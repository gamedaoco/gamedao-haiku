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
		if (createData.isV55) {
			const v55 = createData.asV55;
			return {
				name: v55.name.toString(),
				cid: v55.cid.toString(),

				controller: addressCodec.encode(v55.controllerId),

				orgType: v55.orgType,
				access: v55.access,
				feeModel: v55.feeModel,
				fee: v55.fee,

				govAsset: v55.govAsset,
				payAsset: v55.payAsset,

				memberLimit: v55.memberLimit,
				blockNumber: context.block.height,
				deposit: v55.deposit ?? 0n,
			};
		} else {
			console.error(`Unknown version of create organization extrinsic!`);
		}
	}

	return null;
}

// Exports
export { getOrganizationCreationData };
