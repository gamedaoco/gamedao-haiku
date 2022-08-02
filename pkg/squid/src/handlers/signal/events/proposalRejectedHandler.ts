// Imports
import { updateProposalState } from '../../../database/proposal';
import { SignalProposalRejectedEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
async function handleProposalRejectedEvent(context: EventHandlerContext) {
	// Get versioned instance
	const proposalRejectedEventData = new SignalProposalRejectedEvent(context);

	// Get id
	let id;
	if (proposalRejectedEventData.isV58) {
		id = hashToHexString(proposalRejectedEventData.asV58.proposalId);
	} else {
		console.error(`Unknown version of proposal rejected event!`);
		return;
	}

	// Update proposal
	await updateProposalState(context.store, id, 'Rejected');
}

// Exports
export { handleProposalRejectedEvent };
