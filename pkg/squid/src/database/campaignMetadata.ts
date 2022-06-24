// Imports
// 3rd
// Types
import { CampaignMetadata as BodyIpfsMetadata } from '../@types/ipfs/campaignMetadata';
// Database
import { CampaignMetadata } from '../model';
import { get } from './helper';
import { Store } from '@subsquid/substrate-processor';

// Functions
function getCampaignMetadata(store: Store, campaignMetadataId: string): Promise<CampaignMetadata | null> {
	return get(store, CampaignMetadata, campaignMetadataId);
}

async function upsertCampaignMetadata(store: Store, campaignMetadataId: string, data: BodyIpfsMetadata | null) {
	// Get metadata
	let campaignMetadata = await getCampaignMetadata(store, campaignMetadataId);
	if (!campaignMetadata) {
		campaignMetadata = new CampaignMetadata();
		campaignMetadata.id = campaignMetadataId;
	}

	// Fill data
	campaignMetadata.name = data?.name ?? '';
	campaignMetadata.email = data?.email ?? '';
	campaignMetadata.title = data?.title ?? '';
	campaignMetadata.description = data?.description ?? '';
	campaignMetadata.markdown = data?.markdown ?? '';
	campaignMetadata.logo = data?.logo ?? '';
	campaignMetadata.header = data?.header ?? '';

	// Save metadata
	await store.save(campaignMetadata);

	return campaignMetadata;
}

// Exports
export { getCampaignMetadata, upsertCampaignMetadata };
