import { ApolloServer } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import Cors from 'micro-cors'
import { stitchSchemas } from '@graphql-tools/stitch'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { typeDefs } from 'graphql/schema'
import { resolvers } from 'graphql/resolvers'
import { getRmrkSubSchema } from 'graphql/executors/rmrk'

const cors = Cors()
const gameDaoSubSchema = makeExecutableSchema({
	typeDefs,
	resolvers,
})

export default cors(async function handler(req, res) {
	if (req.method === 'OPTIONS') {
		res.end()
		return false
	}

	const gatewaySchema = stitchSchemas({
		subschemas: [await getRmrkSubSchema(), gameDaoSubSchema],
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
