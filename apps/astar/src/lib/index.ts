const { ApolloClient, InMemoryCache, HttpLink } = await import('@apollo/client')

const endpoint = 'https://graph.gamedao.net/v1/graphql'

const httpLink = new HttpLink({
	uri: endpoint,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || '',
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_HASURA_BEARER_TOKEN}`,
	},
})

export const graphqlClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
})
