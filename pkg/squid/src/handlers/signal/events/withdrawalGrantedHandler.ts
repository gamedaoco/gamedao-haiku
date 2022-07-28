// Imports
import { updateProposalState } from '../../../database/proposal';
import { SignalWithdrawalGrantedEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Functions
async function handleWithdrawalGrantedEvent(context: EventHandlerContext) {
	// Get versioned instance
	const withdrawalGrantedEventData = new SignalWithdrawalGrantedEvent(context);

	// Get id
	let id;
	if (withdrawalGrantedEventData.isV56) {
		id = hashToHexString(withdrawalGrantedEventData.asV56.proposalId);
	} else {
		console.error(`Unknown version of withdrawal granted event!`);
		return;
	}

	// Update proposal
	await updateProposalState(context.store, id, 'Finalized');
}

// Exports
export { handleWithdrawalGrantedEvent };
