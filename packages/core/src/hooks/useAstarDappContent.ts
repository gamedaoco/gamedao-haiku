import { useEffect, useState } from 'react'
import { useLogger } from '@gamedao/core/logger'
import { useAstarDappContentQuery } from '@gamedao/graph'

const initialState: any = []

export function useAstarDappContent(id?: string) {
	const logger = useLogger('useAstarDappContent')
	const [state, setState] = useState(initialState)
	const { loading, data, error } = useAstarDappContentQuery()

	useEffect(() => {
		if (loading || !data?.dAppContent) return
		const raw = id ? data?.dAppContent.filter((dapp) => dapp?.address === id) : data?.dAppContent

		const content = raw.map((dapp) => {
			const parsed = {
				...dapp,
			}
			return parsed
		}) //.sort( (a,b) => b. - a.amount )
		setState(content)
	}, [loading, data])

	useEffect(() => {
		if (error) logger.warn(error)
	}, [error])

	return { loading, state }
}
