/*
	simple example of a one page graphql with schema and resolvers
	the json gets its typing through GraphQLJSON
*/

import { ApolloServer, gql } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import Cors from 'micro-cors'

import GraphQLJSON from 'graphql-type-json'
import configData from 'data/config.json'
import featuresData from 'data/features.json'

const DEV = process.env.NODE_ENV === 'production' ? false : true
const cors = Cors()

const typeDefs = gql`
	scalar JSON

	type Query {
		users: [User!]!
		fx: [Pair!]!
		config: [Config!]!
		features: [Features!]!
	}

	type Config {
		config: JSON
	}

	type Features {
		features: JSON
	}

	type Content {
		features: JSON
	}

	type User {
		nick: String
		firstname: String
		lastname: String
		email: String
		email_verified: Boolean
	}

	type Sense {
		rep: Float
		xp: Float
		trust: Float
	}

	type Account {
		zero:Float
		game: Float
		play: Float
		ausd: Float
	}

	type Pair {
		name: String
		bid_name: String
		bid_quote: Float
		ask_name: String
		ask_quote: Float
	}
`

const resolvers = {
	Query: {

		config(parent, args, context) {
			const { env } = args
			const global = configData['global']
			const local = configData[env]
			const content = {
				...global,
				...local,
			}
			return { config: content }
		},

		features(parent, args, context) {
			const { env } = args
			const global = featuresData['global']
			const local = featuresData[env]
			const content = {
				...global,
				...local,
			}
			return { features: content }
		},

		// user aggregated from
		// sense
		// kilt
		// fractal

		users(parent, args, context) {
			return [
				{
					nick: 'Anonymouse',
					firstname: 'Anon',
					lastname: 'Ymous',
					email: 'anon@mou.se',
					rep: 49152,
					xp: 42,
					trust: 13.37,
				},
			]
		},

		// fx rates for fictional trading pairs

		fx(parent, args, context) {
			return [
				{
					id: 101,
					name: 'EURPLAY',
					ask_currency: 'Euro',
					ask_quote: 1.1,
					bid_currency: 'PLAY',
					bid_quote: 0.9,
				},
				{
					id: 102,
					name: 'EURETH',
					ask_currency: 'Euro',
					ask_quote: 220,
					bid_currency: 'ETH',
					bid_quote: 1,
				},
				{
					id: 103,
					name: 'EURGAME',
					ask_currency: 'Euro',
					ask_quote: 1000,
					bid_currency: 'Game',
					bid_quote: 1,
				},
			]
		},

	},
}

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	plugins: [ DEV ? ApolloServerPluginLandingPageGraphQLPlayground({}) : null ]
})

const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
	if (req.method === 'OPTIONS') {
		res.end()
		return false
	}
	await startServer

	await apolloServer.createHandler({
		path: '/api/graph',
	})(req, res)
})

export const config = {
	api: {
		bodyParser: false,
	},
}
