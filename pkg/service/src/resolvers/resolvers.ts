import { GraphQLUpload } from 'graphql-upload'

import { Resolvers } from '../@types/schema'
import { singleUpload } from './mutation/singleUploadResolver'
import { configResolver } from './query/config/configResolver'
import { displayDataResolver } from './query/displayValues/displayValuesResolver'
import { featuresResolver } from './query/features/featuresResolver'
import { linksResolver } from './query/links/linksResolver'

export function resolvers(): Resolvers {
	return {
		Upload: GraphQLUpload,
		Query: {
			links: linksResolver,
			config: configResolver,
			features: featuresResolver,
			displayValues: displayDataResolver,
		},
		Mutation: {
			singleUpload: singleUpload,
		},
	}
}
