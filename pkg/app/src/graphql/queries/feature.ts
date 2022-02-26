import { gql } from 'apollo-server-micro'
import { ENVIRONMENT } from 'graphql/constants'

export const GET_FEATURE_QUERY = gql`
query {
	features(env: ${ENVIRONMENT}) {
		DEBUG
		SHOW_HEADER
		SHOW_HEADER_NAV
		SHOW_FOOTER
		SHOW_FOOTER_NAV
		SHOW_APPLY
		SHOW_CAMPAIGNS
		SHOW_FX
	}
}
`
