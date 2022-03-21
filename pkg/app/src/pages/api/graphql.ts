import { ApolloServer } from 'apollo-server-micro'
import pkg from '../../../package.json'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { addResolversToSchema } from '@graphql-tools/schema'
import Cors from 'micro-cors'
import { stitchSchemas } from '@graphql-tools/stitch'
import { resolvers, getRmrkSubSchema, getSubsquidSubSchema } from '@gamedao-haiku/graphql/dist/index.js'
import type { Resolvers } from '@gamedao-haiku/graphql/dist/resolver/resolvers-types'

const { loadSchema } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')

const cors = Cors()
export default cors(async function handler(req, res) {
	if (req.method === 'OPTIONS') {
		res.end()
		return false
	}

	// TODO: import from package ! not at runtime
	const gameDaoSchema = await loadSchema('../graphql/src/schema/gameDao.graphql', {
		loaders: [new GraphQLFileLoader()],
	})

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
		schema: gameDaoSchema,
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
