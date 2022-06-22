// Imports
// 3rd
import { OrganizationMetadata as OrgIpfsMetadata } from '../@types/ipfs/organizationMetadata';
// Types
import { OrganizationCreationData } from '../@types/pallets/control/orgCreationData';
// Database
import { Organization } from '../model';
import { get } from './helper';
import { upsertIdentity } from './identity';
// Helpers
import { upsertOrganizationMetadata } from './organizationMetadata';
import { Store } from '@subsquid/substrate-processor';

// Functions
function getOrganization(store: Store, organizationId: string): Promise<Organization | null> {
	return get(store, Organization, organizationId, ['creatorIdentity', 'metadata']);
}

async function createOrganization(
	store: Store,
	organizationId: string,
	signer: string,
	data: OrganizationCreationData,
	metadata: OrgIpfsMetadata | null,
) {
	// Check if exists
	let organization = await getOrganization(store, organizationId);
	if (organization) return organization;

	// Create instance
	organization = new Organization();

	// Fill data
	organization.id = organizationId;
	organization.creator = signer;
	organization.creatorIdentity = await upsertIdentity(store, signer, null);
	organization.controller = data.controller;
	organization.controllerIdentity = await upsertIdentity(store, organization.controller, null);
	organization.treasury = data.treasury as string;
	organization.treasuryIdentity = await upsertIdentity(store, organization.treasury, null);

	organization.access = data.access.__kind;
	organization.feeModel = data.feeModel.__kind;
	organization.type = data.orgType.__kind;

	organization.fee = data.fee;
	organization.govAsset = data.govAsset;
	organization.payAsset = data.payAsset;
	organization.memberLimit = data.memberLimit;

	if (data.cid) {
		organization.metadata = await upsertOrganizationMetadata(store, data.cid, metadata);
	}

	organization.createdAtBlock = data.blockNumber as number;

	// Save organization
	await store.save(organization);

	return organization;
}

// Exports
export { createOrganization, getOrganization };
