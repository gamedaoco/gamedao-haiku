// Imports
// Types
import { CampaignMetadata } from '../@types/ipfs/campaignMetadata';
import { fetchJsonByCid } from './ipfs';

// Functions
async function fetchCampaignMetadata(cid: string): Promise<CampaignMetadata | null> {
	return fetchJsonByCid(cid);
}

// Exports
export { fetchCampaignMetadata };
