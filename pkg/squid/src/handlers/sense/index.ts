import { IPallet } from '../../@types/palletHandler'
import { handleEntityCreated } from './events/handleEntityCreated'
import { handlePropertyUpdated } from './events/handlePropertyUpdated'

export default {
	name: 'signal',
	extrinsicHandlers: [],
	eventHandlers: [
		{
			action: 'EntityCreated',
			handler: handleEntityCreated,
		},
		{
			action: 'PropertyUpdated',
			handler: handlePropertyUpdated,
		},
	],
} as IPallet
