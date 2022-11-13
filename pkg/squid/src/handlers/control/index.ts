import { IPallet } from '../../@types/palletHandler'
import { handleMemberAddedEvent } from './events/memberAddedHandler'
import { handleOrgCreatedEvent } from './events/orgCreatedHandler'
import { handleMemberRemovedEvent } from './events/memberRemovedHandler'
import { handleOrgUpdatedEvent } from './events/orgUpdatedHandler'

export default {
	name: 'control',
	extrinsicHandlers: [],
	eventHandlers: [
		{
			action: 'OrgCreated',
			handler: handleOrgCreatedEvent,
		},
		// TODO: OrgEnabled, OrgDisabled
		// {
		// 	action: 'OrgEnabled',
		// 	handler: handleOrgEnabledEvent,
		// },
		// {
		// 	action: 'OrgDisabled',
		// 	handler: handleOrgDisabledEvent,
		// },
		{
			action: 'OrgUpdated',
			handler: handleOrgUpdatedEvent,
		},
		{
			action: 'MemberAdded',
			handler: handleMemberAddedEvent,
		},
		{
			action: 'MemberRemoved',
			handler: handleMemberRemovedEvent,
		},
	],
} as IPallet
