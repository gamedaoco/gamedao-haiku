// Imports
// Database
import { removeOrganizationMember } from '../../../database/organizationMember';
// Types
import { ControlRemoveMemberEvent } from '../../../types/events';
import { addressCodec, hashToHexString } from '../../../utils';
// 3rd
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Logic
async function handleRemoveMemberEvent(context: EventHandlerContext) {
	// Get versioned instance
	const removeMemberData = new ControlRemoveMemberEvent(context);

	if (removeMemberData.isV58) {
		await removeOrganizationMember(
			context.store,
			hashToHexString(removeMemberData.asV58.orgId),
			addressCodec.encode(removeMemberData.asV58.accountId),
		);
	} else {
		console.error(`Unknown version of remove member event!`);
	}
}

// Exports
export { handleRemoveMemberEvent };
