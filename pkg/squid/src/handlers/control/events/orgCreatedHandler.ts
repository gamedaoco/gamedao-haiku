// Imports
import { OrganizationMetadata } from '../../../@types/ipfs/organizationMetadata';
// Database
import { createOrganization } from '../../../database/organization';
import { addOrganizationMember } from '../../../database/organizationMember';
import { fetchOrganizationMetadata } from '../../../ipfs/organization';
// Transformer
import { getOrganizationCreationData } from '../../../transformer/organizationCreateDataTransformer';
import { ControlOrgCreatedEvent } from '../../../types/events';
import { addressCodec, encodeSigner, hashToHexString } from '../../../utils';
import { isCIDValid } from '../../../utils';
// Types
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Logic
async function handleOrgCreatedEvent(context: EventHandlerContext) {
	if (!context.extrinsic) return;

	// Get versioned call
	const callCreateData = getOrganizationCreationData(context);
	if (!callCreateData) return;

	callCreateData.blockNumber = context.block.height;

	// Get versioned instance
	const organizationCreatedEventData = new ControlOrgCreatedEvent(context);

	// Get id
	let id;
	if (organizationCreatedEventData.isV51) {
		id = hashToHexString(organizationCreatedEventData.asV51.orgId);
		callCreateData.treasury = addressCodec.encode(organizationCreatedEventData.asV51.treasuryId);
	} else {
		console.error(`Unknown version of organization created event!`);
		return;
	}

	// Load organization metadata
	let metadata: OrganizationMetadata | null = null;
	try {
		if (!isCIDValid(callCreateData.cid)) {
			console.error(`Couldn't fetch metadata of organization ${id}, invalid cid`);
			callCreateData.cid = null;
		} else {
			metadata = await fetchOrganizationMetadata(callCreateData.cid as string);
			if (!metadata) {
				console.error(`Couldn't fetch metadata of organization ${id}`);
			}
		}
	} catch (e) {
		console.log(e);
	}

	// Create body
	const organization = await createOrganization(
		context.store,
		id,
		encodeSigner(context.extrinsic.signer),
		callCreateData,
		metadata,
	);

	// Add initial member (creator of DAO)
	await addOrganizationMember(context.store, organization.id, organization.creator);
}

// Exports
export { handleOrgCreatedEvent };
