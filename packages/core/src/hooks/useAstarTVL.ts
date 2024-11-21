import { useEffect, useState } from 'react'
import JSONbig from 'json-bigint'
import { type CurrentTvlSubscription, useCurrentTvlSubscription } from '@gamedao/graph'
import { useLogger } from '../hooks/useLogger'

const initialState = {
	block_number: 0,
	tvl: 0,
	usd_price: 0,
	lockers_count: 0,
}

export function useAstarTVL() {
	const logger = useLogger('astar')

	const [state, setState] = useState({ tvl: 0, astrusd: 0, lockers: 0 })

	const { loading, data, error } = useCurrentTvlSubscription()

	useEffect(() => {
		if (loading || !data) return
		const _state = {
			tvl: JSONbig.stringify(data.tvl_aggregated_daily[0].tvl, null, 18),
			astrusd: data.tvl_aggregated_daily[0].usd_price,
			lockers: JSONbig.stringify(data.tvl_aggregated_daily[0].lockers_count, null, 0),
		}
		setState(_state)
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { tvlLoading: loading, state }
}
