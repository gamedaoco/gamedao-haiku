import {
	gameDaoSchemaJson,
	getRmrkSubSchema,
	getSubsquidSubSchema,
	resolvers,
} from '@gamedao-haiku/graphql/dist/index.js'
import type { Resolvers } from '@gamedao-haiku/graphql/dist/resolver/resolvers-types'
import { addResolversToSchema } from '@graphql-tools/schema'
import { stitchSchemas } from '@graphql-tools/stitch'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-micro'
import { buildClientSchema } from 'graphql'
import Cors from 'micro-cors'

import pkg from '../../../package.json'

const cors = Cors()
export default cors(async function handler(req, res) {
	if (req.method === 'OPTIONS') {
		res.end()
		return false
	}

	// Add custom resolvers like version
	const extendedResolver: Resolvers = {
		Query: {
			...(resolvers.Query ?? {}),
			version: () => {
				return pkg.version
			},
		},
	} as Resolvers

	const gameDaoSubSchema = addResolversToSchema({
		schema: buildClientSchema(gameDaoSchemaJson),
		resolvers: extendedResolver,
	})

	const gatewaySchema = stitchSchemas({
		subschemas: [await getRmrkSubSchema(), await getSubsquidSubSchema(), gameDaoSubSchema],
	})

	const apolloServer = new ApolloServer({
		schema: gatewaySchema,
		plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
	})

	await apolloServer.start()

	await apolloServer.createHandler({
		path: '/api/graphql',
	})(req, res)
})

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true,
	},
}
