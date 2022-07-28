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
		if (createData.isV56) {
			const v56Data = createData.asV56;
			return {
				org: hashToHexString(v56Data.orgId),
				admin: addressCodec.encode(v56Data.adminId),
				name: v56Data.name.toString(),
				target: v56Data.target,
				deposit: v56Data.deposit,
				expiry: v56Data.expiry,
				protocol: v56Data.protocol,
				governance: v56Data.governance,
				cid: v56Data.cid.toString(),
				tokenSymbol: v56Data.tokenSymbol.toString(),
				tokenName: v56Data.tokenName.toString(),
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
