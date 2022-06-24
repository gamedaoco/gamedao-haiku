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

	if (removeMemberData.isV51) {
		await removeOrganizationMember(
			context.store,
			hashToHexString(removeMemberData.asV51.orgId),
			addressCodec.encode(removeMemberData.asV51.accountId),
		);
	} else {
		console.error(`Unknown version of remove member event!`);
	}
}

// Exports
export { handleRemoveMemberEvent };
