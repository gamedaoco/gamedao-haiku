// Imports
import { OrganizationCreationData } from '../@types/pallets/control/orgCreationData';
import { ControlCreateOrgCall } from '../types/calls';
import { addressCodec } from '../utils';
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
		if (createData.isV58) {
			const v58 = createData.asV58;
			return {
				name: v58.name.toString(),
				cid: v58.cid.toString(),

				controller: addressCodec.encode(v58.controllerId),

				orgType: v58.orgType,
				access: v58.access,
				feeModel: v58.feeModel,
				fee: v58.fee,

				govAsset: v58.govAsset.value.__kind,
				payAsset: v58.payAsset.value.__kind,

				memberLimit: v58.memberLimit,
				blockNumber: context.block.height,
				deposit: v58.deposit ?? 0n,
			};
		} else {
			console.error(`Unknown version of create organization extrinsic!`);
		}
	}

	return null;
}

// Exports
export { getOrganizationCreationData };
