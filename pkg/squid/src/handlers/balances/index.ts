import { IPallet } from '../../@types/palletHandler'
import { handleBalanceChanged } from './events/handleBalanceChanged'

export default {
	name: 'signal',
	extrinsicHandlers: [],
	eventHandlers: [
		{
			action: 'EntityCreated',
			handler: handleBalanceChanged,
		},
	],
} as IPallet
