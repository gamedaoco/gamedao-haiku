// Imports
import { ProposalMetadata } from '../@types/ipfs/proposalMetadata';
import { fetchJsonByCid } from './ipfs';

// Functions
async function fetchProposalMetadata(cid: string): Promise<ProposalMetadata | null> {
	return fetchJsonByCid(cid);
}

// Exports
export { fetchProposalMetadata };
