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
		if (createData.isV58) {
			const v58Data = createData.asV58;
			return {
				org: hashToHexString(v58Data.orgId),
				admin: addressCodec.encode(v58Data.adminId),
				name: v58Data.name.toString(),
				target: v58Data.target,
				deposit: v58Data.deposit,
				expiry: v58Data.expiry,
				protocol: v58Data.protocol,
				governance: v58Data.governance,
				cid: v58Data.cid.toString(),
				tokenSymbol: v58Data.tokenSymbol.toString(),
				tokenName: v58Data.tokenName.toString(),
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
