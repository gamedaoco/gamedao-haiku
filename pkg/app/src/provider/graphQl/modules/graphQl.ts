import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
import { Endpoint } from 'src/@types/graphql'

export function createApolloClient(endpoint: Endpoint): ApolloClient<any> {
	if (!endpoint) return null

	const wsLink = new GraphQLWsLink(
		createClient({
			url: endpoint?.url?.replace('http://', 'ws://').replace('https://', 'wss://'),
			webSocketImpl: require('websocket').w3cwebsocket,
		}),
	)

	const httpLink = new HttpLink({
		uri: endpoint?.url,
	})

	const splitLink = split(
		({ query }) => {
			const definition = getMainDefinition(query)
			return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
		},
		wsLink,
		httpLink,
	)

	return new ApolloClient({
		link: splitLink,
		cache: new InMemoryCache(),
	})
}
