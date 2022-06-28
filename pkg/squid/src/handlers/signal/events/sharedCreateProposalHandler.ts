import { ProposalMetadata } from '../../../@types/ipfs/proposalMetadata';
import { createProposal } from '../../../database/proposal';
import { fetchMetadataByCid } from '../../../ipfs/ipfs';
import { getProposalCreationData } from '../../../transformer/proposalCreateDataTransformer';
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
async function sharedCreateProposalHandler(context: EventHandlerContext, proposalId: string) {
	// Get versioned call
	const callCreateData = getProposalCreationData(context);
	if (!callCreateData) return;

	callCreateData.id = proposalId;

	// Load proposal metadata
	const metadata: ProposalMetadata | null = callCreateData.cid
		? await fetchMetadataByCid<ProposalMetadata>(callCreateData.cid, `Proposal ${callCreateData.id}`)
		: null;
	if (!metadata) {
		callCreateData.cid = null;
	}

	// Create proposal
	await createProposal(context.store, callCreateData, metadata);
}

// Exports
export { sharedCreateProposalHandler };
