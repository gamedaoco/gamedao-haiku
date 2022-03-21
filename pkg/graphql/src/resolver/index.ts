// Provide resolver functions for your schema fields
import type { Resolvers } from './resolvers-types'
import { configResolver } from './config/configResolver'
import { featuresResolver } from './features/featuresResolver'
import { linksResolver } from './links/linksResolver'

export const resolvers: Resolvers = {
	Query: {
		links: linksResolver,
		config: configResolver,
		features: featuresResolver,
	},
}
