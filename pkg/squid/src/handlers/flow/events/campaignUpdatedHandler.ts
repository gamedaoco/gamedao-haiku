// Imports
// Database
import { getCampaign } from '../../../database/campaign';
// Types
import { FlowCampaignUpdatedEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
// 3rd
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
async function handleCampaignUpdatedEvent(context: EventHandlerContext) {
	// Get versioned instance
	const campaignUpdatedEventData = new FlowCampaignUpdatedEvent(context);

	// Define data
	let campaignId: string | null = null;
	let state: string | null = null;

	// Load data
	if (campaignUpdatedEventData.isV51) {
		campaignId = hashToHexString(campaignUpdatedEventData.asV51.campaignId);
		state = campaignUpdatedEventData.asV51.state.__kind;
	} else if (campaignUpdatedEventData.isV55) {
		campaignId = hashToHexString(campaignUpdatedEventData.asV55.campaignId);
		state = campaignUpdatedEventData.asV55.state.__kind;
	} else {
		console.error(`Unknown version of update campaign event!`);
		return;
	}

	// Get campaign
	const campaign = await getCampaign(context.store, campaignId);
	if (!campaign) {
		console.error(`Unknown campaign ${campaignId}!`);
		return;
	}

	campaign.state = state;

	// Save campaign
	await context.store.save(campaign);
}

// Exports
export { handleCampaignUpdatedEvent };
