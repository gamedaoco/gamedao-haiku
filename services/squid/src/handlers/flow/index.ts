import { IPallet } from '../../@types/palletHandler';
import { handleCampaignContributedEvent } from './events/campaignContributedHandler';
import { handleCampaignCreatedEvent } from './events/campaignCreatedHandler';
import { handleCampaignFailedEvent } from './events/campaignFailedHandler';
import { handleCampaignActivatedEvent } from './events/campaignActivatedHandler';
import { handleCampaignSucceededEvent } from './events/campaignSucceededHandler';

export default {
	name: 'flow',
	extrinsicHandlers: [],
	eventHandlers: [
		{
			action: 'Created',
			handler: handleCampaignCreatedEvent,
		},
		{
			action: 'Activated',
			handler: handleCampaignActivatedEvent,
		},
		{
			action: 'Contributed',
			handler: handleCampaignContributedEvent,
		},
		{
			action: 'Succeeded',
			handler: handleCampaignSucceededEvent,
		},
		{
			action: 'Failed',
			handler: handleCampaignFailedEvent,
		},
	],
} as IPallet;
