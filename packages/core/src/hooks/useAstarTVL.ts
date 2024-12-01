import { useEffect, useState } from 'react'
import JSONbig from 'json-bigint'
import { useLogger } from '../hooks/useLogger'
import { useCurrentTvlSubscription } from '@gamedao/graph'

const initialState = {
	block: 0,
	lockers: 0,
	tvl: '',
	fx: 0,
}

export function useAstarTVL() {
	const logger = useLogger('astar')

	const [state, setState] = useState(initialState)

	const { loading, data, error } = useCurrentTvlSubscription()

	useEffect(() => {
		if (loading || !data) return
		const _ = {
			block: data.tvl_aggregated_daily[0].block_number,
			lockers: data.tvl_aggregated_daily[0].lockers_count,
			tvl: JSONbig.stringify(data.tvl_aggregated_daily[0].tvl, null, 18),
			fx: data.tvl_aggregated_daily[0].usd_price,
		}
		setState(_)
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { loading, state, error }
}
