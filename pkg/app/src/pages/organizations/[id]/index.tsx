import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { ContentTabs } from 'constants/battlepass'

export function Page() {
	const { query, push } = useRouter()

	useEffect(() => {
		push(`/organizations/${query.id}/${ContentTabs.OVERVIEW}`)
	}, [push, query])
}

export default Page
