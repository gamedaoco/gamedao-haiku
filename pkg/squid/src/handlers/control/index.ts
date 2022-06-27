// Imports
// Types
import { IPallet } from '../../@types/palletHandler';
import { handleAddMemberEvent } from './events/addMemberHandler';
import { handleOrgCreatedEvent } from './events/orgCreatedHandler';
import { handleRemoveMemberEvent } from './events/removeMemberHandler';

// Exports
export default {
	name: 'control',
	extrinsicHandlers: [],
	eventHandlers: [
		{
			action: 'OrgCreated',
			handler: handleOrgCreatedEvent,
		},
		{
			action: 'AddMember',
			handler: handleAddMemberEvent,
		},
		{
			action: 'RemoveMember',
			handler: handleRemoveMemberEvent,
		},
	],
} as IPallet;
