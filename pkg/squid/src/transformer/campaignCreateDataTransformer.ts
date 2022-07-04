// Imports
import { CampaignCreationData } from '../@types/pallets/flow/campaignCreationData';
import { FlowCreateCampaignCall } from '../types/calls';
import { addressCodec, hashToHexString } from '../utils';
// Types
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
function getCampaignCreationData(context: EventHandlerContext): CampaignCreationData | null {
	if (context.extrinsic) {
		// Get versioned extrinsic call
		const createData = new FlowCreateCampaignCall({
			_chain: context._chain,
			block: context.block,
			extrinsic: context.extrinsic,
		});

		// Get versioned data
		if (createData.isV51) {
			const v51Data = createData.asV51;
			return {
				org: hashToHexString(v51Data.org),
				admin: addressCodec.encode(v51Data.admin),
				name: v51Data.name.toString(),
				target: v51Data.target,
				deposit: v51Data.deposit,
				expiry: v51Data.expiry,
				protocol: v51Data.protocol,
				governance: v51Data.governance,
				cid: v51Data.cid.toString(),
				tokenSymbol: v51Data.tokenSymbol.toString(),
				tokenName: v51Data.tokenName.toString(),
				blockNumber: context.block.height,
			};
		} else if (createData.isV55) {
			const v52Data = createData.asV55;
			return {
				org: hashToHexString(v52Data.orgId),
				admin: addressCodec.encode(v52Data.adminId),
				name: v52Data.name.toString(),
				target: v52Data.target,
				deposit: v52Data.deposit,
				expiry: v52Data.expiry,
				protocol: v52Data.protocol,
				governance: v52Data.governance,
				cid: v52Data.cid.toString(),
				tokenSymbol: v52Data.tokenSymbol.toString(),
				tokenName: v52Data.tokenName.toString(),
				blockNumber: context.block.height,
			};
		} else {
			console.error(`Unknown version of create campaign extrinsic!`);
		}
	}

	return null;
}

// Exports
export { getCampaignCreationData };
