// Imports
import { IPallet } from '../../@types/palletHandler';
import { handleProposalApprovedEvent } from './events/proposalApprovedHandler';
import { handleProposalCreatedEvent } from './events/proposalCreatedHandler';
import { handleProposalExpiredEvent } from './events/proposalExpiredHandler';
import { handleProposalEvent } from './events/proposalHandler';
import { handleProposalRejectedEvent } from './events/proposalRejectedHandler';
import { handleProposalVotedEvent } from './events/proposalVotedHandler';
import { handleWithdrawalGrantedEvent } from './events/withdrawalGrantedHandler';

// Exports
export default {
	name: 'signal',
	extrinsicHandlers: [],
	eventHandlers: [
		{
			action: 'Proposal',
			handler: handleProposalEvent,
		},
		{
			action: 'ProposalCreated',
			handler: handleProposalCreatedEvent,
		},
		{
			action: 'ProposalCreated',
			handler: handleProposalCreatedEvent,
		},
		{
			action: 'ProposalVoted',
			handler: handleProposalVotedEvent,
		},
		{
			action: 'ProposalExpired',
			handler: handleProposalExpiredEvent,
		},
		{
			action: 'ProposalApproved',
			handler: handleProposalApprovedEvent,
		},
		{
			action: 'ProposalRejected',
			handler: handleProposalRejectedEvent,
		},
		{
			action: 'WithdrawalGranted',
			handler: handleWithdrawalGrantedEvent,
		},
	],
} as IPallet;
