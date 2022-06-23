// Imports
import { OrganizationCreationData } from '../@types/pallets/control/orgCreationData';
import { ControlCreateOrgCall } from '../types/calls';
import { addressCodec } from '../utils';
// Types
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
function getOrganizationCreationData(context: EventHandlerContext): OrganizationCreationData | null {
	if (context.extrinsic) {
		// Get versioned extrinsic call
		const createData = new ControlCreateOrgCall({
			_chain: context._chain,
			block: context.block,
			extrinsic: context.extrinsic,
		});

		// Get versioned data
		if (createData.isV51) {
			const v51Data = createData.asV51;
			return {
				name: v51Data.name.toString(),
				cid: v51Data.cid.toString(),

				controller: addressCodec.encode(v51Data.controller),

				orgType: v51Data.orgType,
				access: v51Data.access,
				feeModel: v51Data.feeModel,
				fee: v51Data.fee,

				govAsset: v51Data.govAsset,
				payAsset: v51Data.payAsset,

				memberLimit: v51Data.memberLimit,
				blockNumber: context.block.height,
				deposit: BigInt(0),
			};
		} else if (createData.isV55) {
			const v52Data = createData.asV55;
			return {
				name: v52Data.name.toString(),
				cid: v52Data.cid.toString(),

				controller: addressCodec.encode(v52Data.controllerId),

				orgType: v52Data.orgType,
				access: v52Data.access,
				feeModel: v52Data.feeModel,
				fee: v52Data.fee,

				govAsset: v52Data.govAsset,
				payAsset: v52Data.payAsset,

				memberLimit: v52Data.memberLimit,
				blockNumber: context.block.height,
				deposit: v52Data.deposit,
			};
		} else {
			console.error(`Unknown version of create organization extrinsic!`);
		}
	}

	return null;
}

// Exports
export { getOrganizationCreationData };
