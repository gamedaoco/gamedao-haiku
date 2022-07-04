// Imports
// Database
import { addOrganizationMember } from '../../../database/organizationMember';
// Types
import { ControlAddMemberEvent } from '../../../types/events';
import { addressCodec, hashToHexString } from '../../../utils';
// 3rd
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Logic
async function handleAddMemberEvent(context: EventHandlerContext) {
	// Get versioned instance
	const addMemberData = new ControlAddMemberEvent(context);

	if (addMemberData.isV51) {
		await addOrganizationMember(
			context.store,
			hashToHexString(addMemberData.asV51.orgId),
			addressCodec.encode(addMemberData.asV51.accountId),
		);
	} else {
		console.error(`Unknown version of add member event!`);
	}
}

// Exports
export { handleAddMemberEvent };
