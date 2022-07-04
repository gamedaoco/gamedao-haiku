// Imports
import { IPallet } from '../../@types/palletHandler';
import { handleIdentitySetEvent } from './events/identitySetHandler';
import { handleIdentityClearedEvent } from './events/identityClearedHandler';

// Exports
export default {
	name: 'identity',
	extrinsicHandlers: [],
	eventHandlers: [
		{
			action: 'IdentitySet',
			handler: handleIdentitySetEvent,
		},
		{
			action: 'IdentityCleared',
			handler: handleIdentityClearedEvent,
		},
	],
} as IPallet;
