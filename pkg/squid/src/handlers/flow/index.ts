// Imports
// Types
import { IPallet } from '../../@types/palletHandler';
import { handleCampaignContributedEvent } from './events/campaignContributedHandler';
import { handleCampaignCreatedEvent } from './events/campaignCreatedHandler';
import { handleCampaignFailedEvent } from './events/campaignFailedHandler';
import { handleCampaignFinalizedEvent } from './events/campaignFinalizedHandler';
import { handleCampaignUpdatedEvent } from './events/campaignUpdatedHandler';

// Exports
export default {
	name: 'flow',
	extrinsicHandlers: [],
	eventHandlers: [
		{
			action: 'CampaignCreated',
			handler: handleCampaignCreatedEvent,
		},
		{
			action: 'CampaignContributed',
			handler: handleCampaignContributedEvent,
		},
		{
			action: 'CampaignFailed',
			handler: handleCampaignFailedEvent,
		},
		{
			action: 'CampaignFinalized',
			handler: handleCampaignFinalizedEvent,
		},
		{
			action: 'CampaignUpdated',
			handler: handleCampaignUpdatedEvent,
		},
	],
} as IPallet;
