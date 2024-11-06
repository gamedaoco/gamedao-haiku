import { useEffect, useState } from 'react'
import { useCurrentTvlSubscription } from 'src/queries'
import { useLogger } from 'src/hooks/useLogger'

export function useAstarTVL() {
	const logger = useLogger('astar')
	const [tvlData, setTvlData] = useState(null)
	const { loading, data, error } = useCurrentTvlSubscription()
	useEffect(() => {
		if (loading || !data) return
		setTvlData(data.tvl_aggregated_daily[0])
	}, [loading, data])
	useEffect(() => {
		if (error) logger.error(error)
	}, [error])
	return { tvlLoading: loading, tvlData }
}
