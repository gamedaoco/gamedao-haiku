import { SignalRejectedEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';
import { getProposal } from '../../../database/getters';

async function handleProposalRejectedEvent(context: EventHandlerContext) {
	let eventName = 'Signal.Rejected';
	let raw_event = new SignalRejectedEvent(context);

	if (!raw_event.isV62) {
		console.error(`Unknown version: ${eventName}`);
		return;
	}
	let store = context.store;
	let event = raw_event.asV62;

	let proposalId = hashToHexString(event.proposalId);
	let proposal = await getProposal(store, proposalId);
	if (!proposal) return;

	proposal.state = 'Rejected';

	await store.save(proposal);
}

export { handleProposalRejectedEvent };
