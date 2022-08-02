// Imports
import { updateProposalState } from '../../../database/proposal';
import { SignalProposalApprovedEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
async function handleProposalApprovedEvent(context: EventHandlerContext) {
	// Get versioned instance
	const proposalApprovedEventData = new SignalProposalApprovedEvent(context);

	// Get id
	let id;
	if (proposalApprovedEventData.isV58) {
		id = hashToHexString(proposalApprovedEventData.asV58.proposalId);
	} else {
		console.error(`Unknown version of proposal approved event!`);
		return;
	}

	// Update proposal
	await updateProposalState(context.store, id, 'Accepted');
}

// Exports
export { handleProposalApprovedEvent };
