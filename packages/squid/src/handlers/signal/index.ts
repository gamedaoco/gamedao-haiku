import { IPallet } from '../../@types/palletHandler';
import { handleProposalCreatedEvent } from './events/proposalCreatedHandler';
import { handleProposalActivatedEvent } from './events/proposalActivatedHandler';
import { handleProposalAcceptedEvent } from './events/proposalAcceptedHandler';
import { handleProposalRejectedEvent } from './events/proposalRejectedHandler';
import { handleProposalExpiredEvent } from './events/proposalExpiredHandler';
import { handleProposalAbortedEvent } from './events/proposalAbortedHandler';
import { handleProposalFinalizedEvent } from './events/proposalFinalizedHandler';
import { handleProposalVotedEvent } from './events/proposalVotedHandler';

export default {
	name: 'signal',
	extrinsicHandlers: [],
	eventHandlers: [
		{
			action: 'Created',
			handler: handleProposalCreatedEvent,
		},
		{
			action: 'Activated',
			handler: handleProposalActivatedEvent,
		},
		{
			action: 'Accepted',
			handler: handleProposalAcceptedEvent,
		},
		{
			action: 'Rejected',
			handler: handleProposalRejectedEvent,
		},
		{
			action: 'Expired',
			handler: handleProposalExpiredEvent,
		},
		{
			action: 'Aborted',
			handler: handleProposalAbortedEvent,
		},
		{
			action: 'Finalized',
			handler: handleProposalFinalizedEvent,
		},
		{
			action: 'Voted',
			handler: handleProposalVotedEvent,
		},
	],
} as IPallet;
