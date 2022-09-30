import { SignalVotedEvent } from '../../../types/events';
import { SignalVoteCall } from '../../../types/calls';
import { upsertIdentity } from '../../../database/identity';
import { getVoting, getProposalVoter } from '../../../database/getters';
import { ProposalVoter } from '../../../model';
import { addressCodec, hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';
import { getProposal } from '../../../database/getters';

async function handleProposalVotedEvent(context: EventHandlerContext) {
	let eventName = 'Signal.Voted';
	if (!context.extrinsic) {
		console.error(`No extrinsic in the context: ${eventName}`);
		return;
	}

	let raw_event = new SignalVotedEvent(context);
	let raw_call = new SignalVoteCall({
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

	let proposal = await getProposal(store, proposalId);
	let voting = await getVoting(store, votingId);
	if (!proposal || !voting) return;

	voting.yes = event.yes;
	voting.no = event.no;
	await store.save(voting);

	let account = addressCodec.encode(event.account);
	let voter = await getProposalVoter(store, proposalId, account);
	if (!voter) {
		voter = new ProposalVoter();
		voter.id = `${proposalId}-${account}`.toLowerCase();
		voter.address = account;
		voter.identity = await upsertIdentity(store, account, null);
		voter.voting = voting;
	}
	voter.amount = call.deposit;
	voter.power = event.votePower;
	voter.voted = event.voted;
	await store.save(voter);
}

export { handleProposalVotedEvent };
