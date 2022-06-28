// Imports
import { ProposalMetadata } from '../@types/ipfs/proposalMetadata';
import { ProposalCreationData } from '../@types/pallets/signal/proposalCreationData';
import { Proposal, ProposalTypeWithdrawalData } from '../model';
import { getCampaign } from './campaign';
import { get } from './helper';
import { upsertIdentity } from './identity';
import { getOrganization } from './organization';
import { upsertProposalMetadata } from './proposalMetadata';
import { Store } from '@subsquid/substrate-processor';

// Functions
function getProposal(store: Store, proposalId: string): Promise<Proposal | null> {
	return get(store, Proposal, proposalId, ['organization', 'campaign', 'creatorIdentity']);
}

async function createProposal(store: Store, data: ProposalCreationData, metadata: ProposalMetadata | null) {
	// Check if already exists
	let proposal = await getProposal(store, data.id!);
	if (proposal) return proposal;

	// Get organization (and campaign)
	const campaign = data.campaignId ? await getCampaign(store, data.campaignId) : null;
	const organization = data.orgId ? await getOrganization(store, data.orgId) : campaign?.organization ?? null;
	if (!organization) {
		console.error(`Unknown organization in create proposal, block: ${data.blockNumber}!`);
		return null;
	} else if (data.campaignId && !campaign) {
		console.error(`Unknown campaign in create proposal, block: ${data.blockNumber}!`);
		return null;
	}

	// Create instance
	proposal = new Proposal();

	// Fill data
	proposal.id = data.id!;

	proposal.organization = organization;
	proposal.campaign = campaign;

	proposal.creator = data.signer;
	proposal.creatorIdentity = await upsertIdentity(store, data.signer, null);

	proposal.type = data.type;
	proposal.votingType = 0;

	// Withdraw Proposal
	if (proposal.type === 3) {
		proposal.data = new ProposalTypeWithdrawalData({
			withdrawAmount: data.withdrawAmount!,
		});
	}

	proposal.state = 'Active';
	proposal.metadata = await upsertProposalMetadata(store, proposal.id, metadata);

	proposal.createdAtBlock = data.blockNumber;
	proposal.expiryBlock = data.expiry;

	// Save proposal
	await store.save(proposal);

	return proposal;
}

// async function updateProposalState(store: Store, proposalId: string, state: ProposalState) {
// 	// Get proposal
// 	let proposal = await getProposal(store, proposalId);
// 	if (!proposal) return proposal;
//
// 	// Update
// 	proposal.state = state;
//
// 	// Save proposal
// 	await store.save(proposal);
//
// 	return proposal;
// }

// Exports
export { createProposal /*, updateProposalState*/, getProposal };
