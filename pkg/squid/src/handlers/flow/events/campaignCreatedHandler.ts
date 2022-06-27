// Imports
import { CampaignMetadata } from '../../../@types/ipfs/campaignMetadata';
// Database
import { createCampaign } from '../../../database/campaign';
import { fetchCampaignMetadata } from '../../../ipfs/campaign';
import { getCampaignCreationData } from '../../../transformer/capmaignCreateDataTransformer';
// Types
import { FlowCampaignCreatedEvent } from '../../../types/events';
import { encodeSigner, hashToHexString } from '../../../utils';
// Helpers
import { isCIDValid } from '../../../utils';
// 3rd
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
async function handleCampaignCreatedEvent(context: EventHandlerContext) {
	if (!context.extrinsic) return;

	// Get versioned call
	const callCreateData = getCampaignCreationData(context);
	if (!callCreateData) return;

	callCreateData.blockNumber = context.block.height;

	// Get versioned instance
	const campaignCreatedEventData = new FlowCampaignCreatedEvent(context);

	// Get id
	let id;
	if (campaignCreatedEventData.isV51) {
		id = hashToHexString(campaignCreatedEventData.asV51.campaignId);
	} else {
		console.error(`Unknown version of campaign created event!`);
		return;
	}

	// Load body metadata
	let metadata: CampaignMetadata | null = null;
	try {
		if (!isCIDValid(callCreateData.cid)) {
			console.error(`Couldn't fetch metadata of campaign ${id}, invalid cid`);
			callCreateData.cid = null;
		} else {
			metadata = await fetchCampaignMetadata(callCreateData.cid as string);
			if (!metadata) {
				console.error(`Couldn't fetch metadata of campaign ${id}`);
			}
		}
	} catch (e) {}

	// Create campaign
	await createCampaign(context.store, id, encodeSigner(context.extrinsic.signer), callCreateData, metadata);
}

// Exports
export { handleCampaignCreatedEvent };
