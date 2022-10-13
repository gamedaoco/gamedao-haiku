import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { LocalStorageWrapper, persistCache } from 'apollo3-cache-persist'
import { createClient } from 'graphql-ws'
import { Endpoint } from 'src/@types/graphql'

const cache = new InMemoryCache({
	typePolicies: {
		Balance: {
			keyFields: ['address', 'balanceId'],
		},
		campaign: {
			keyFields: ['id'],
		},
		campaign_contributor: {
			keyFields: ['id'],
		},
		organization: {
			keyFields: ['id'],
		},
		rmrkNfts: {
			keyFields: ['id'],
		},
		config: {
			keyFields: [],
		},
		apiProvider: {
			keyFields: ['wsProviderUrl'],
		},
		displayValues: {
			keyFields: [],
		},
		features: {
			keyFields: [],
		},
		identity: {
			keyFields: ['id'],
		},
		proposal: {
			keyFields: ['id'],
		},
	},
})

export async function createApolloClient(endpoint: Endpoint): Promise<ApolloClient<any>> {
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

	await persistCache({
		cache,
		storage: new LocalStorageWrapper(window.localStorage),
	})

	return new ApolloClient({
		link: splitLink,
		cache,
		defaultOptions: {
			watchQuery: {
				fetchPolicy: 'cache-and-network',
			},
		},
	})
}
