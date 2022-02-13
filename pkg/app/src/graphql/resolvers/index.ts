import pkg from '../../../package.json'

import { typeDefs } from '../schema'
import { links } from './links'
import { config } from './config'
import { features } from './features'
// import { translations } from './translations'
// import { networks } from './networks'
// import { rmrk } from './rmrk'

export const resolvers = {
	Query: {
		version: () => { return pkg.version },
		links,
		config,
		features,
		// translations
		// networks,
		// rmrk,

	},
}
