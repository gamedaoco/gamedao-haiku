import { IPallet } from '../../@types/palletHandler'
import { handleIdentitySetEvent } from './events/identitySetHandler'
import { handleIdentityClearedEvent } from './events/identityClearedHandler'

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
} as IPallet
