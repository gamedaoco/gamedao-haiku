// Imports
import { SignalProposalEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
import { sharedCreateProposalHandler } from './sharedCreateProposalHandler';
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
async function handleProposalEvent(context: EventHandlerContext) {
	if (!context.extrinsic) return;

	// Get versioned instance
	const proposalEventData = new SignalProposalEvent(context);

	// Get id
	let proposalId: string;
	if (proposalEventData.isV58) {
		proposalId = hashToHexString(proposalEventData.asV58.proposalId);
	} else {
		console.error(`Unknown version of ProposalCreated event!`);
		return;
	}

	await sharedCreateProposalHandler(context, proposalId);
}

// Exports
export { handleProposalEvent };
