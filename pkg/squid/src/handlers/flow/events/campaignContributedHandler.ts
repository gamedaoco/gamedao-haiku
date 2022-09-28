import { FlowContributedEvent } from '../../../types/events';
import { CampaignContributor } from '../../../model';
import { upsertIdentity } from '../../../database/identity';
import { addressCodec, hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';
import { getCampaign, getCampaignContributor } from '../../../database/getters';

async function handleCampaignContributedEvent(context: EventHandlerContext) {
	let eventName = 'Flow.Contributed';
	let raw_event = new FlowContributedEvent(context);
	if (!raw_event.isV60) {
		console.error(`Unknown version: ${eventName}`);
		return;
	}
	let store = context.store;
	let event = raw_event.asV60;

	let contributor = addressCodec.encode(event.sender);
	let campaignId = hashToHexString(event.campaignId);
	let campaign = await getCampaign(store, campaignId);
	if (!campaign) return;

	let campaignContributor = await getCampaignContributor(store, campaignId, contributor);
	if (!campaignContributor) {
		campaignContributor = new CampaignContributor();

		campaignContributor.id = `${campaignId}-${contributor}`.toLowerCase();
		campaignContributor.campaign = campaign;
		campaignContributor.address = contributor;
		campaignContributor.identity = await upsertIdentity(store, contributor, null);
		campaignContributor.contributed = event.contribution;
	} else {
		campaignContributor.contributed += event.contribution;
	}

	await store.save(campaignContributor);
}

export { handleCampaignContributedEvent };
