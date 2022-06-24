// Imports
// 3rd
import { CampaignMetadata as CampaignIpfsMetadata } from '../@types/ipfs/campaignMetadata';
// Types
import { CampaignCreationData } from '../@types/pallets/crowdfunding/campaignCreationData';
// Database
import { Campaign } from '../model';
import { upsertCampaignMetadata } from './campaignMetadata';
// Helpers
import { get } from './helper';
import { upsertIdentity } from './identity';
import { getOrganization } from './organization';
import { Store } from '@subsquid/substrate-processor';

// Functions
function getCampaign(store: Store, campaignId: string): Promise<Campaign | null> {
	return get(store, Campaign, campaignId, ['organization', 'creatorIdentity', 'metadata']);
}

async function createCampaign(
	store: Store,
	campaignId: string,
	signer: string,
	data: CampaignCreationData,
	metadata: CampaignIpfsMetadata | null,
): Promise<Campaign | null> {
	// Check if exists
	let campaign = await getCampaign(store, campaignId);
	if (campaign) return campaign;

	// Get organization
	const organizationId = data.org;
	const organization = await getOrganization(store, organizationId);
	if (!organization) {
		console.error(`Unknown organization ${organizationId} for campaign ${campaignId}`);
		return null;
	}

	// Create campaign
	campaign = new Campaign();

	// Fill data
	campaign.id = campaignId;
	campaign.organization = organization;
	campaign.admin = data.admin;
	campaign.adminIdentity = await upsertIdentity(store, campaign.admin, null);
	campaign.creator = signer;
	campaign.creatorIdentity = await upsertIdentity(store, signer, null);
	campaign.target = data.target;
	campaign.deposit = data.deposit;
	campaign.expiry = data.expiry;
	campaign.protocol = data.protocol.__kind;
	campaign.governance = data.governance.__kind;
	campaign.tokenSymbol = data.tokenSymbol;
	campaign.tokenName = data.tokenName;

	campaign.state = 'Active';

	if (data.cid) {
		campaign.metadata = await upsertCampaignMetadata(store, data.cid, metadata);
	}

	campaign.createdAtBlock = data.blockNumber as number;

	// Save campaign
	await store.save(campaign);

	return campaign;
}

// Exports
export { createCampaign, getCampaign };
