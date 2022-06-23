import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

const wsLink = new GraphQLWsLink(
	createClient({
		url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT?.replace('https://', 'wss://'),
		webSocketImpl: require('websocket').w3cwebsocket,
	}),
)

const httpLink = new HttpLink({
	uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
})

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query)
		return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
	},
	wsLink,
	httpLink,
)

// TODO: Add cache TypePolicy
const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
})

export function GraphQlProvider({ children }) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
