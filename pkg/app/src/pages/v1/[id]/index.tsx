// v1 contains a new routing approach:
//
// gamedao.co/[id]/[dapp]/[mod]
//
// [id]		a slug or hash resolving an organization
// [dapp]	a dapp string resolving to a dapp
//			if the dapp is not active, it will redirect
// [mod]	depending on the dapp either a view, tab or the like

// until slugs are fully working, we only resolve by id

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { DApps } from 'constants/dapps'

import { useOrganizationByIdSubscription } from 'src/queries'
import { Loader } from 'components/Loader'

export function Page() {
	const { query, push } = useRouter()
	const id = query?.id as string

	// console.log(id, DApps)
	// const resolve = id.startsWith('0x')
	const { loading, data, error } = useOrganizationByIdSubscription({ variables: { orgId: id } })

	// const { loading, data, error } = resolve
	// 	? useOrganizationByIdSubscription({ variables: { orgId: id } })
	// 	: useOrganizationByNameSubscription({ variables: { name: id } })

	useEffect(() => {
		if (!data?.organization) return
		if (data?.organization[0]) {
			const name = data?.organization[0].name
			// console.log(name)
			const p = `/v1/${id}/${DApps.BATTLEPASS}`
			// console.log(p)
			push(p)
		}
	}, [id, data?.organization, push])

	return loading ? <Loader /> : null
}

export default Page
