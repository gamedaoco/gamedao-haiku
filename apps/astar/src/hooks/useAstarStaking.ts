import { useEffect, useState } from 'react'
import { useCurrentTvlSubscription } from 'src/queries'
import { useLogger } from 'src/hooks/useLogger'

export function useAstarStaking() {
	const logger = useLogger('astar')
	const [stakingData, setStakingData] = useState(null)
	const { loading, data, error } = useCurrentTvlSubscription()

	useEffect(() => {
		if (loading || !data) return
		setStakingData(data.tvl_aggregated_daily[0])
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { loading, data: stakingData }
}
