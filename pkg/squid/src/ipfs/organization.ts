// Imports
// Types
import { OrganizationMetadata } from '../@types/ipfs/organizationMetadata';
import { fetchJsonByCid } from './ipfs';

// Functions
async function fetchOrganizationMetadata(cid: string): Promise<OrganizationMetadata | null> {
	return fetchJsonByCid(cid);
}

// Exports
export { fetchOrganizationMetadata };
