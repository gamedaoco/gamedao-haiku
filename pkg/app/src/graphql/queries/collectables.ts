import { gql } from 'apollo-server-micro'

export const GET_COLLECTABLES_FOR_USER = gql`
	query ($owner: [String!]) {
		nfts(where: { owner: { _in: $owner } }) {
			id
			metadata_name
			metadata_image
			metadata_properties
			metadata
			sn
		}
	}
`
