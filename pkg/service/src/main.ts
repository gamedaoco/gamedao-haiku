import { makeExecutableSchema } from '@graphql-tools/schema'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { ApolloServer, gql } from 'apollo-server-express'
import 'dotenv/config'
import express from 'express'
import * as fs from 'fs'
import { graphqlUploadExpress } from 'graphql-upload'
import { useServer } from 'graphql-ws/lib/use/ws'
import { createServer } from 'http'
import { WebSocketServer } from 'ws'

import { ChainClient } from './modules/chainClient'
import { PubSub } from './modules/pubSub'
import { resolvers } from './resolvers/resolvers'

const chainClient = ChainClient.Instance
const pubsub = PubSub.Instance

const typeDefs = gql(fs.readFileSync(process.cwd() + '/src/schema.graphql').toString())

let counter = 0

async function startServer() {
	// Initialize the chain client
	await chainClient.Initialize()

	const schema = makeExecutableSchema({ typeDefs, resolvers: resolvers() })

	setInterval(() => {
		pubsub.client.publish('test', {
			test: counter++,
		})
	}, 1000)

	// Create an Express app and HTTP server; we will attach both the WebSocket
	// server and the ApolloServer to this HTTP server.
	const app = express()
	const httpServer = createServer(app)

	// Create our WebSocket server using the HTTP server we just set up.
	const wsServer = new WebSocketServer({
		server: httpServer,
		path: '/graphql',
	})
	// Save the returned server's info so we can shutdown this server later
	const serverCleanup = useServer({ schema }, wsServer)

	// This middleware should be added before calling `applyMiddleware`.
	app.use(graphqlUploadExpress())

	const server = new ApolloServer({
		schema,
		cache: 'bounded',
		plugins: [
			// Proper shutdown for the HTTP server.
			ApolloServerPluginDrainHttpServer({ httpServer }),

			// Proper shutdown for the WebSocket server.
			{
				async serverWillStart() {
					return {
						async drainServer() {
							await serverCleanup.dispose()
						},
					}
				},
			},
		],
	})

	await server.start()
	server.applyMiddleware({ app })

	await new Promise<void>((r) => httpServer.listen({ port: process.env.SERVER_PORT }, r))

	console.log(`🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`)
}

startServer()
