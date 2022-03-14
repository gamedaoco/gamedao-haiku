import pkg from '../../../package.json'

import { links } from './links'
import { config } from './config'
import { features } from './features'

export const resolvers = {
	Query: {
		version: () => {
			return pkg.version
		},
		links,
		config,
		features,
	},
}
