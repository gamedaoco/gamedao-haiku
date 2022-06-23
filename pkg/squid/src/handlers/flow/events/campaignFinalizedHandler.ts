// Imports
// Database
import { getCampaign } from '../../../database/campaign';
// Types
import { FlowCampaignFinalizedEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
// 3rd
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
async function handleCampaignFinalizedEvent(context: EventHandlerContext) {
	// Get versioned instance
	const campaignFinalizedEventData = new FlowCampaignFinalizedEvent(context);

	// Define data
	let campaignId: string | null = null;

	// Load data
	if (campaignFinalizedEventData.isV51) {
		campaignId = hashToHexString(campaignFinalizedEventData.asV51.campaignId);
	} else {
		console.error(`Unknown version of failed campaign event!`);
		return;
	}

	// Get campaign
	const campaign = await getCampaign(context.store, campaignId);
	if (!campaign) {
		console.error(`Unknown campaign ${campaignId}!`);
		return;
	}

	campaign.state = 'Success';

	// Save campaign
	await context.store.save(campaign);
}

// Exports
export { handleCampaignFinalizedEvent };
