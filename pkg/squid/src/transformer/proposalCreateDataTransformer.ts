// Imports
import { ProposalCreationData } from '../@types/pallets/signal/proposalCreationData';
import { SignalGeneralProposalCall, SignalWithdrawProposalCall } from '../types/calls';
import { encodeSigner, hashToHexString } from '../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
function getProposalCreationData(context: EventHandlerContext): ProposalCreationData | null {
	switch (context.extrinsic?.method) {
		case 'generalProposal':
			return getSimpleProposalCreationData(context);
		case 'withdrawProposal':
			return getWithdrawProposalCreationData(context);
		default:
			console.error(`Unknown method of create proposal extrinsic!`);
			return null;
	}
}

function getSimpleProposalCreationData(context: EventHandlerContext): ProposalCreationData | null {
	// Get versioned extrinsic call
	const createData = new SignalGeneralProposalCall({
		_chain: context._chain,
		block: context.block,
		extrinsic: context.extrinsic!,
	});

	// Get versioned data
	let result: ProposalCreationData | null = null;
	if (createData.isV56) {
		const v56Data = createData.asV56;
		result = {
			orgId: hashToHexString(v56Data.orgId),
			title: v56Data.title.toString(),
			cid: v56Data.cid.toString(),
			start: v56Data.start,
			expiry: v56Data.expiry,
		} as ProposalCreationData;
	} else {
		console.error(`Unknown version of create general proposal extrinsic!`);
	}

	if (result) {
		// ToDo: Find better solution? (Maybe put these values in event on chain)
		result.type = 0;
		result.votingType = 0;

		result.signer = encodeSigner(context.extrinsic!.signer);
		result.blockNumber = context.block.height;
	}

	return result;
}

function getWithdrawProposalCreationData(context: EventHandlerContext): ProposalCreationData | null {
	// Get versioned extrinsic call
	const createData = new SignalWithdrawProposalCall({
		_chain: context._chain,
		block: context.block,
		extrinsic: context.extrinsic!,
	});

	// Get versioned data
	if (createData.isV56) {
		const v56Data = createData.asV56;
		return {
			campaignId: hashToHexString(v56Data.campaignId),
			title: v56Data.title.toString(),
			cid: v56Data.cid.toString(),
			start: v56Data.start,
			expiry: v56Data.expiry,

			// ToDo: Find better solution? (Maybe put these values in event on chain)
			type: 3,
			votingType: 0,

			withdrawAmount: v56Data.amount,

			signer: encodeSigner(context.extrinsic!.signer),
			blockNumber: context.block.height,
		};
	} else {
		console.error(`Unknown version of create withdraw proposal extrinsic!`);
	}

	return null;
}

// Exports
export { getProposalCreationData };
