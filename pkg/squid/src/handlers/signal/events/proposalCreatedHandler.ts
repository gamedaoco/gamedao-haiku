// Imports
import { SignalProposalCreatedEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
import { sharedCreateProposalHandler } from './sharedCreateProposalHandler';
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
async function handleProposalCreatedEvent(context: EventHandlerContext) {
	if (!context.extrinsic) return;

	// Get versioned instance
	const proposalCreatedEventData = new SignalProposalCreatedEvent(context);

	// Get id
	let proposalId;
	if (proposalCreatedEventData.isV58) {
		proposalId = hashToHexString(proposalCreatedEventData.asV58.proposalId);
	} else if (proposalCreatedEventData.isV58) {
		proposalId = hashToHexString(proposalCreatedEventData.asV58.proposalId);
	} else {
		console.error(`Unknown version of ProposalCreated event!`);
		return;
	}

	await sharedCreateProposalHandler(context, proposalId);
}

// Exports
export { handleProposalCreatedEvent };
