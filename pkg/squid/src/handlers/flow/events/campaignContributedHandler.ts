// Imports
// Database
import { addCampaignContributorContribution } from '../../../database/campaignContributor';
// Types
import { FlowCampaignContributedEvent } from '../../../types/events';
import { addressCodec, hashToHexString } from '../../../utils';
// 3rd
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
async function handleCampaignContributedEvent(context: EventHandlerContext) {
	// Get versioned instance
	const campaignCreatedEventData = new FlowCampaignContributedEvent(context);

	// Define data
	let campaignId: string | null = null;
	let contributorAddress: string | null = null;
	let contribution: bigint | null = null;

	// Load data
	if (campaignCreatedEventData.isV56) {
		campaignId = hashToHexString(campaignCreatedEventData.asV56.campaignId);
		contributorAddress = addressCodec.encode(campaignCreatedEventData.asV56.sender);
		contribution = campaignCreatedEventData.asV56.contribution;
	} else {
		console.error(`Unknown version of contribute campaign event!`);
		return;
	}

	// Create/Update contributor
	await addCampaignContributorContribution(context.store, campaignId, contributorAddress, contribution);
}

// Exports
export { handleCampaignContributedEvent };
