import { ApolloServer, gql } from 'apollo-server-express'
import { createPrometheusExporterPlugin } from '@bmatei/apollo-prometheus-exporter'
import 'dotenv/config'
import express from 'express'
import * as fs from 'fs'
import { graphqlUploadExpress } from 'graphql-upload'

import { BalanceManager } from './modules/balanceManager'
import { ChainClient } from './modules/chainClient'
import { DbClient } from './modules/dbClient'
import { SessionManager } from './modules/sessionManager'
import { updateSessionResolver } from './resolvers/mutation/updateSessionResolver'
import { resolvers } from './resolvers/resolvers'

const chainClient = ChainClient.Instance
const dbClient = DbClient.Instance
const sessionManager = SessionManager.Instance
const balanceManager = BalanceManager.Instance

const typeDefs = gql(fs.readFileSync(process.cwd() + '/src/schema.graphql').toString())

async function startServer() {
	// Initialize the chain client
	await chainClient.Initialize()
	await dbClient.Initialize()
	await sessionManager.Initialize()
	await balanceManager.Initialize()

	const app = express()
	const prometheusExporterPlugin = createPrometheusExporterPlugin({ app })

	const server = new ApolloServer({
		typeDefs,
		resolvers: resolvers(),
		cache: 'bounded',
		plugins: [prometheusExporterPlugin],
	})
	await server.start()

	// This middleware should be added before calling `applyMiddleware`.
	app.use(graphqlUploadExpress())

	server.applyMiddleware({ app })

	await new Promise<void>((r) => app.listen({ port: process.env.SERVER_PORT }, r))

	console.log(`🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`)
}

startServer()
