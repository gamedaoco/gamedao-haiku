import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { OrganizationTabs } from 'constants/organization'
import { useOrganizationByNameSubscription } from 'src/queries'
import { Loader } from 'components/Loader'

export function Page() {
	const { query, push } = useRouter()

	const { loading, data, error } = useOrganizationByNameSubscription({
		variables: { name: query.org },
	})

	useEffect(() => {
		console.log('query for:', query.org)
		console.log('resolver:', data?.organization, error)

		if (data) {
			push(`/guilds/${query.org}/${OrganizationTabs.OVERVIEW}`)
		}
	}, [query.org, data, push])

	return loading ? <Loader /> : null
}

export default Page
