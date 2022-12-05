import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { OrganizationTabs } from 'constants/organization'

export function Page() {
	const { query, push } = useRouter()

	useEffect(() => {
		push(`/org/${query.id}/${OrganizationTabs.OVERVIEW}`)
	}, [push, query])
}

export default Page
