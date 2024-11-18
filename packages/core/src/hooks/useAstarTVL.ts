import { useEffect, useState } from 'react'
import JSONbig from 'json-bigint'
import { useCurrentTvlSubscription } from '@gamedao/graph'
import { useLogger } from '../hooks/useLogger'

export function useAstarTVL() {
	const logger = useLogger('astar')

	const [state, setState] = useState(null)

	const { loading, data, error } = useCurrentTvlSubscription()

	useEffect(() => {
		if (loading || !data) return
		setState(data.tvl_aggregated_daily[0])
		console.log('Current TVL:', JSONbig.stringify(data.tvl_aggregated_daily[0].tvl, null, 2))
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { tvlLoading: loading, state }
}
