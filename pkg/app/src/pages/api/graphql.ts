import { ApolloServer } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import Cors from 'micro-cors'

import { typeDefs } from 'graphql/schema'
import { resolvers } from 'graphql/resolvers'

const cors = Cors()

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})]
})

const startServer = apolloServer.start()

export default cors(
	async function handler(req, res) {
		if (req.method === 'OPTIONS') {
			res.end()
			return false
		}
		await startServer

		await apolloServer.createHandler({
			path: '/api/graphql',
		})(req, res)
	}
)

export const config = {
	api: {
		bodyParser: false,
		externalResolver:true,
	},
}