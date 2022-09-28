import { SignalActivatedEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';
import { getProposal } from '../../../database/getters';

async function handleProposalActivatedEvent(context: EventHandlerContext) {
	let eventName = 'Signal.Activated';
	let raw_event = new SignalActivatedEvent(context);

	if (!raw_event.isV60) {
		console.error(`Unknown version: ${eventName}`);
		return;
	}
	let store = context.store;
	let event = raw_event.asV60;

	let proposalId = hashToHexString(event.proposalId);
	let proposal = await getProposal(store, proposalId);
	if (!proposal) return;

	proposal.state = 'Active';

	await store.save(proposal);
}

export { handleProposalActivatedEvent };
