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
import { BattlepassViews } from 'src/constants/battlepass'
import { useActiveBattlepassByIdQuery } from 'src/queries'

import { Loader } from 'src/components/Loader'

export function Page() {
	const { query, push } = useRouter()
	const id = query?.id as string

	const { loading, data, error } = useActiveBattlepassByIdQuery({ variables: { id: id } })

	// console.log(loading, query)
	// console.log(data)

	useEffect(() => {
		if (loading || !data) return
		if (data?.BattlepassBot?.Battlepasses?.length === 0) push('/battlepass') // 404
		push(`/battlepass/${id}/dashboard`)
	}, [loading, data?.BattlepassBot?.Battlepasses, push])

	return loading ? <Loader /> : null
}

export default Page
