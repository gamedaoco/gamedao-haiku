import { SignalCreatedEvent } from '../../../types/events';
import { SignalProposalCall } from '../../../types/calls';
import { fetchProposalMetadata } from '../../../ipfs/getters';
import { upsertIdentity } from '../../../database/identity';
import { getOrg, getCampaign, getVoting } from '../../../database/getters';
import { upsertProposalMetadata } from '../../../database/metadata';
import { Proposal, Voting } from '../../../model';
import { addressCodec, encodeSigner, hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';
import { getProposal } from '../../../database/getters';

async function handleProposalCreatedEvent(context: EventHandlerContext) {
	let eventName = 'Signal.Created';
	if (!context.extrinsic) {
		console.error(`No extrinsic in the context: ${eventName}`);
		return;
	}
	let raw_event = new SignalCreatedEvent(context);
	let raw_call = new SignalProposalCall({
		_chain: context._chain,
		block: context.block,
		extrinsic: context.extrinsic,
	});
	if (!raw_event.isV61 || !raw_call.isV61) {
		console.error(`Unknown version: ${eventName}`);
		return;
	}
	let store = context.store;
	let event = raw_event.asV61;
	let call = raw_call.asV61;

	let proposalId = hashToHexString(event.proposalId);
	let votingId = proposalId;
	let orgId = hashToHexString(call.orgId);

	let proposal_exists = await getProposal(store, proposalId);
	let voting_exists = await getVoting(store, votingId);
	let org = await getOrg(store, orgId);
	if (proposal_exists || voting_exists || !org) return;

	let creator = encodeSigner(context.extrinsic!.signer);
	let beneficiary = call.beneficiary ? (addressCodec.encode(call.beneficiary) as string) : null;
	let start = call.start ?? context.block.height;
	let campaign = call.campaignId ? await getCampaign(store, hashToHexString(call.campaignId)) : null;

	let voting = new Voting();
	voting.id = votingId;
	voting.unit = call.unit.__kind;
	voting.scale = call.scale.__kind;
	voting.yes = 0n;
	voting.no = 0n;
	voting.quorum = call.quorum?.toString();
	voting.majority = call.majority.__kind;
	await store.save(voting);

	let proposal = new Proposal();
	proposal.id = proposalId;
	proposal.creator = creator;
	proposal.creatorIdentity = await upsertIdentity(store, creator, null);
	proposal.organization = org;
	proposal.campaign = campaign;
	proposal.type = call.proposalType.__kind;
	proposal.start = start;
	proposal.expiry = call.expiry;
	proposal.createdAtBlock = context.block.height;
	proposal.amount = call.amount;
	proposal.currencyId = call.currencyId?.__kind;
	proposal.beneficiary = beneficiary;
	proposal.beneficiaryIdentity = beneficiary ? await upsertIdentity(store, beneficiary, null) : null;
	proposal.slashingRule = 'Automated';
	proposal.deposit = call.deposit ?? BigInt((100 * 10) ^ 10); // MinProposalDeposit = 100 * dollar(GAME);
	proposal.state = start > context.block.height ? 'Created' : 'Active';
	proposal.voting = voting;

	// Check if cid is valid, fetch metadata from ipfs
	let metadata = await fetchProposalMetadata(call.cid.toString(), orgId);
	if (metadata) {
		proposal.metadata = await upsertProposalMetadata(store, call.cid.toString(), metadata);
	}
	await store.save(proposal);
}

export { handleProposalCreatedEvent };
