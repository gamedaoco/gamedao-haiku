// Imports
// Types
import { IPallet } from '../../@types/palletHandler';
import { handleProposalCreatedEvent } from './events/proposalCreatedHandler';

// Exports
export default {
	name: 'signal',
	extrinsicHandlers: [],
	eventHandlers: [
		{
			action: 'ProposalCreated',
			handler: handleProposalCreatedEvent,
		},
	],
} as IPallet;
