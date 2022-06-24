// Imports
// Types
import { IPallet } from '../../@types/palletHandler';
import { handleIdentitySetEvent } from './events/identitySetHandler';

// Exports
export default {
	name: 'identity',
	extrinsicHandlers: [],
	eventHandlers: [
		{
			action: 'IdentitySet',
			handler: handleIdentitySetEvent,
		},
	],
} as IPallet;
