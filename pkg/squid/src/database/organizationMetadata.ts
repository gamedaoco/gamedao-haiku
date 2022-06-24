// Imports
// 3rd
// Types
import { OrganizationMetadata as OrganizationIpfsMetadata } from '../@types/ipfs/organizationMetadata';
// Database
import { OrganizationMetadata } from '../model';
import { get } from './helper';
import { Store } from '@subsquid/substrate-processor';

// Functions
function getOrganizationMetadata(store: Store, organizationMetadataId: string): Promise<OrganizationMetadata | null> {
	return get(store, OrganizationMetadata, organizationMetadataId);
}

async function upsertOrganizationMetadata(
	store: Store,
	organizationMetadataId: string,
	data: OrganizationIpfsMetadata | null,
) {
	// Get metadata
	let organizationMetadata = await getOrganizationMetadata(store, organizationMetadataId);
	if (!organizationMetadata) {
		organizationMetadata = new OrganizationMetadata();
		organizationMetadata.id = organizationMetadataId;
	}

	// Fill data
	organizationMetadata.name = data?.name ?? '';
	organizationMetadata.description = data?.description ?? '';
	organizationMetadata.website = data?.website ?? '';
	organizationMetadata.email = data?.email ?? '';
	organizationMetadata.repo = data?.repo ?? '';
	organizationMetadata.logo = data?.logo ?? '';
	organizationMetadata.header = data?.header ?? '';

	// Save metadata
	await store.save(organizationMetadata);

	return organizationMetadata;
}

// Exports
export { getOrganizationMetadata, upsertOrganizationMetadata };
