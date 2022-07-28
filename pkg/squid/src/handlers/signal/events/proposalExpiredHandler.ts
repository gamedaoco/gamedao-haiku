// Imports
import { updateProposalState } from '../../../database/proposal';
import { SignalProposalExpiredEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
async function handleProposalExpiredEvent(context: EventHandlerContext) {
	// Get versioned instance
	const proposalExpiredEventData = new SignalProposalExpiredEvent(context);

	// Get id
	let id;
	if (proposalExpiredEventData.isV56) {
		id = hashToHexString(proposalExpiredEventData.asV56.proposalId);
	} else {
		console.error(`Unknown version of proposal expired event!`);
		return;
	}

	// Update proposal
	await updateProposalState(context.store, id, 'Expired');
}

// Exports
export { handleProposalExpiredEvent };
