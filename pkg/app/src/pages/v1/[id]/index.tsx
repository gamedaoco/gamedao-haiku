import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { ContentTabs } from 'constants/battlepass'

import { useOrganizationByIdSubscription } from 'src/queries'
import { Loader } from 'components/Loader'

export function Page() {
	const { query, push } = useRouter()
	const id = query?.id as string

	// console.log(id, ContentTabs)

	// const resolve = id.startsWith('0x')
	const { loading, data, error } = useOrganizationByIdSubscription({ variables: { orgId: id } })

	// const { loading, data, error } = resolve
	// 	? useOrganizationByIdSubscription({ variables: { orgId: id } })
	// 	: useOrganizationByNameSubscription({ variables: { name: id } })

	useEffect(() => {
		if (!data?.organization) return
		if (data?.organization[0]) {
			// const name = data?.organization[0].name
			// console.log(name)
			const p = `/v1/${id}/${ContentTabs.BATTLEPASS}`
			// console.log(p)
			push(p)
		}
	}, [id, data?.organization, push])

	return
	loading ? <Loader /> : null
}

export default Page
