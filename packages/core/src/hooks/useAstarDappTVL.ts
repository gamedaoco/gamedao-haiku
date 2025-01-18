import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useLogger } from '@gamedao/utils'
import { useStakesPerDappAndPeriodSubscription } from '@gamedao/graph'

type DappState = {
	totalStaked: string
	totalRewards: string
	period: number
}

const initialState: DappState = {
	totalStaked: '',
	totalRewards: '',
	period: 0,
}

export function useAstarDappTVL(id: string, period = 3) {
	const logger = useLogger('useAstarStakersPerDappAndPeriod')
	const [state, setState] = useState(initialState)

	const { loading, data, error } = useStakesPerDappAndPeriodSubscription({
		variables: {
			dapp: id,
			period: period,
		},
	})

	useEffect(() => {
		if (loading || !data || data.stakes_per_dap_and_period.length === 0) return
		const _ = data.stakes_per_dap_and_period[0]
		const totalStaked = _.stake_amount
		const totalRewards = _.reward_amount
		const period = _.period
		// logger.log('tvl', totalStaked, totalRewards)
		setState({ totalStaked, totalRewards, period })
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { loading, state }
}
