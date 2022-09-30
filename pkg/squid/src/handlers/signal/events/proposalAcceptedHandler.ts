import { SignalAcceptedEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';
import { getProposal } from '../../../database/getters';

async function handleProposalAcceptedEvent(context: EventHandlerContext) {
	let eventName = 'Signal.Accepted';
	let raw_event = new SignalAcceptedEvent(context);

	if (!raw_event.isV61) {
		console.error(`Unknown version: ${eventName}`);
		return;
	}
	let store = context.store;
	let event = raw_event.asV61;

	let proposalId = hashToHexString(event.proposalId);
	let proposal = await getProposal(store, proposalId);
	if (!proposal) return;

	proposal.state = 'Accepted';

	await store.save(proposal);
}

export { handleProposalAcceptedEvent };
