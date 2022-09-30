import { FlowCreatedEvent } from '../../../types/events';
import { FlowCreateCampaignCall } from '../../../types/calls';
import { fetchCampaignMetadata } from '../../../ipfs/getters';
import { upsertIdentity } from '../../../database/identity';
import { getOrg } from '../../../database/getters';
import { upsertCampaignMetadata } from '../../../database/metadata';
import { Campaign } from '../../../model';
import { addressCodec, encodeSigner, hashToHexString, isCIDValid } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';
import { getCampaign } from '../../../database/getters';

async function handleCampaignCreatedEvent(context: EventHandlerContext) {
	let eventName = 'Flow.Created';
	if (!context.extrinsic) {
		console.error(`No extrinsic in the context: ${eventName}`);
		return;
	}
	let raw_event = new FlowCreatedEvent(context);
	let raw_call = new FlowCreateCampaignCall({
		_chain: context._chain,
		block: context.block,
		extrinsic: context.extrinsic,
	});
	if (!raw_event.isV61 || !raw_call.isV61) {
		console.error(`Unknown version: ${eventName}`);
		return;
	}
	let store = context.store;
	let event = raw_event.asV61;
	let call = raw_call.asV61;

	let campaignId = hashToHexString(event.campaignId);
	let orgId = hashToHexString(call.orgId);

	let campaign_exists = await getCampaign(store, campaignId);
	let org = await getOrg(store, orgId);
	if (campaign_exists || !org) return;

	let creator = encodeSigner(context.extrinsic!.signer);
	let admin = addressCodec.encode(call.adminId);
	let start = call.start ?? context.block.height;

	let campaign = new Campaign();
	campaign.id = campaignId;
	campaign.organization = org;
	campaign.creator = creator;
	campaign.creatorIdentity = await upsertIdentity(store, creator, null);
	campaign.admin = admin;
	campaign.adminIdentity = await upsertIdentity(store, admin, null);
	campaign.target = call.target;
	campaign.deposit = call.deposit;
	campaign.start = call.start ?? context.block.height;
	campaign.expiry = call.expiry;
	campaign.protocol = call.protocol.__kind;
	campaign.governance = call.governance.__kind;
	campaign.tokenSymbol = call.tokenSymbol?.toString();
	campaign.tokenName = call.tokenName?.toString();
	campaign.state = start > context.block.height ? 'Created' : 'Active';
	campaign.createdAtBlock = context.block.height;

	// Check if cid is valid, fetch metadata from ipfs
	let metadata = await fetchCampaignMetadata(call.cid.toString(), orgId);
	if (metadata) {
		campaign.metadata = await upsertCampaignMetadata(store, call.cid.toString(), metadata);
	}

	await store.save(campaign);
}

export { handleCampaignCreatedEvent };
