import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { LocalStorageWrapper, persistCache } from 'apollo3-cache-persist'
import { createClient } from 'graphql-ws'
import { Endpoint } from 'src/@types/graphql'

const cache = new InMemoryCache({
	addTypename: false,
	typePolicies: {
		gamedaoQuery: {
			keyFields: [],
		},
		Balance: {
			keyFields: ['address', 'balanceId'],
		},
		Campaign: {
			keyFields: ['id'],
		},
		CampaignContributor: {
			keyFields: ['id'],
		},
		Organization: {
			keyFields: ['id'],
		},
		RMRKNft: {
			keyFields: ['id'],
		},
		Config: {
			keyFields: [],
		},
		ApiProvider: {
			keyFields: ['wsProviderUrl'],
		},
		DisplayValues: {
			keyFields: [],
		},
		Features: {
			keyFields: [],
		},
		Identity: {
			keyFields: ['id'],
		},
		Proposal: {
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
		headers: {
			'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
			'Access-Control-Allow-Origin': '*',
			// Authorization: `Bearer ${process.env.HASURA_BEARER_TOKEN}`
		},
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
		// ssrMode: typeof window === 'undefined',
		cache,
		defaultOptions: {
			watchQuery: {
				fetchPolicy: 'cache-and-network',
			},
		},
	})
}
