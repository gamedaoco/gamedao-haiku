// middleware to capture the signin and signout
// process inside of nextauth and syncing
// credentials with the bot user db:
//
// uuid			unique id
// discord		discord id
// twitter		twitter id
// address		ss58 address

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { gql, useQuery } from '@apollo/client'

const cache = new InMemoryCache()
const client = new ApolloClient({
	cache: cache,
	uri: 'https://graph.dev.sub.zero.io/',
	name: 'battlepass',
	version: '1.3',
	queryDeduplication: false,
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'network-only',
		},
	},
})

const GET_IDENTITY = gql`
	query GetIdentityByDiscord($discord: String) {
		BattlepassBot {
			BattlepassIdentities(where: { discord: $discord }) {
				uuid
				address
				discord
				twitter
			}
		}
	}
`

function GetIdentity() {
	const { loading, error, data } = useQuery(GET_IDENTITY)
	if (loading) return 'Loading...'

	if (error) return `Error! ${error.message}`

	return (
		<select name="dog" onChange={onDogSelected}>
			{data.dogs.map((dog) => (
				<option key={dog.id} value={dog.breed}>
					{dog.breed}
				</option>
			))}
		</select>
	)
}
