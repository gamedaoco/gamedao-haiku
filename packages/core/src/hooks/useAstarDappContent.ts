import { useEffect, useState } from 'react'
import { dAppId } from '@gamedao/constants'
import { useLogger } from '@gamedao/core/logger'
import { useAstarDappContentQuery } from '@gamedao/graph'
import assert from 'assert'

const initialState: any = []

export function useAstarDappContent(id?: string) {
	const logger = useLogger()
	const [state, setState] = useState(initialState)
	const { loading, data, error } = useAstarDappContentQuery()

	useEffect(() => {
		if (loading || !data?.dAppContent ) return
		const content = id
			? data?.dAppContent.filter( dapp => dapp?.address === id )
			: data?.dAppContent
		setState(content)
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { loading, state }
}
