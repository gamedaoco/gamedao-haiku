import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: '/api/graphql',
	cache: new InMemoryCache(),
})

export function GraphQlProvider({ children }) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
