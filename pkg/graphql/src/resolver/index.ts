// Provide resolver functions for your schema fields
import { accountResolver } from './account/accountResolver'
import { configResolver } from './config/configResolver'
import { displayDataResolver } from './displayValues/displayValuesResolver'
import { featuresResolver } from './features/featuresResolver'
import { linksResolver } from './links/linksResolver'
import type { Resolvers } from './resolvers-types'

export const resolvers: Resolvers = {
	Query: {
		account: accountResolver,
		links: linksResolver,
		config: configResolver,
		features: featuresResolver,
		displayValues: displayDataResolver,
	},
}
