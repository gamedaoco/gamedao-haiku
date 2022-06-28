// Imports
import { ProposalSimpleVoteData } from '../../../@types/pallets/governance/proposalSimpleVoteData';
import { createProposalVoter } from '../../../database/proposalVoter';
import { SignalProposalVotedEvent } from '../../../types/events';
import { addressCodec, hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
async function handleProposalVotedEvent(context: EventHandlerContext) {
	// Get versioned instance
	const proposalVotedEventData = new SignalProposalVotedEvent(context);

	// Get vote data
	let voteData: ProposalSimpleVoteData | null = null;
	if (proposalVotedEventData.isV51) {
		const v51Data = proposalVotedEventData.asV51;
		voteData = {
			proposalId: hashToHexString(v51Data.proposalId),
			voter: addressCodec.encode(v51Data.senderId),
			vote: v51Data.vote,
		};
	} else {
		console.error(`Unknown version of ProposalVoted event!`);
		return;
	}

	// Add voter
	await createProposalVoter(context.store, voteData);
}

// Exports
export { handleProposalVotedEvent };
