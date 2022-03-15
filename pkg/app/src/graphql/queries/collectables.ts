import { gql } from 'apollo-server-micro'

export const GET_COLLECTABLES_FOR_USER = gql`
	query ($owner: String!) {
		nfts(where: { owner: { _eq: $owner } }) {
			id
			metadata
			sn
		}
	}
`
