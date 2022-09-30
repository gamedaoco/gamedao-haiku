import { FlowFailedEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';
import { getCampaign } from '../../../database/getters';


async function handleCampaignFailedEvent(context: EventHandlerContext) {
	let eventName = 'Flow.Failed';
	let raw_event = new FlowFailedEvent(context);

	if (!raw_event.isV61) {
		console.error(`Unknown version: ${eventName}`);
		return;
	}
	let store = context.store;
	let event = raw_event.asV61;

	let campaignId = hashToHexString(event.campaignId);

	let campaign = await getCampaign(store, campaignId);
	if (!campaign) return;
	
	campaign.state = 'Failed';
	await store.save(campaign);
}

export { handleCampaignFailedEvent };
