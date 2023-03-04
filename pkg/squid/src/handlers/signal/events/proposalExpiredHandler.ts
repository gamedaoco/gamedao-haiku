import { SignalExpiredEvent } from '../../../types/events';
import { hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';
import { getProposal } from '../../../database/getters';

async function handleProposalExpiredEvent(context: EventHandlerContext) {
	let eventName = 'Signal.Expired';
	let raw_event = new SignalExpiredEvent(context);

	if (!raw_event.isV62) {
		console.error(`Unknown version: ${eventName}`);
		return;
	}
	let store = context.store;
	let event = raw_event.asV62;

	let proposalId = hashToHexString(event.proposalId);
	let proposal = await getProposal(store, proposalId);
	if (!proposal) return;

	proposal.state = 'Expired';

	await store.save(proposal);
}

export { handleProposalExpiredEvent };
