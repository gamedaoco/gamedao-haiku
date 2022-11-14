import { FlowActivatedEvent } from '../../../types/events';
import { getCampaign } from '../../../database/getters';
import { hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';

async function handleCampaignActivatedEvent(context: EventHandlerContext) {
	let eventName = 'Flow.Activated';
	let raw_event = new FlowActivatedEvent(context);

	if (!raw_event.isV62) {
		console.error(`Unknown version: ${eventName}`);
		return;
	}
	let store = context.store;
	let event = raw_event.asV62;

	let campaignId = hashToHexString(event.campaignId);
	let campaign = await getCampaign(store, campaignId);
	if (!campaign) return;

	campaign.state = 'Active';
	await store.save(campaign);
}

export { handleCampaignActivatedEvent };
