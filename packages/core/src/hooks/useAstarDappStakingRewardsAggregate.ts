import { useEffect, useState, useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { useLogger, formatBalanceString } from '@gamedao/utils'
import { useAstarDappStakingRewardsAggregateQuery } from '@gamedao/graph'

export function useAstarDappStakingRewardsAggregate(dapp: string, period: number = 3) {
	const logger = useLogger('DappStakingRewardsAggregate')

	const [state, setState] = useState({ totalStakingEvents: 0, stakers: [], stakes: [] })
	const { loading, data, error } = useAstarDappStakingRewardsAggregateQuery({
		variables: {
			dapp: dapp,
			period: period,
		},
	})

	useEffect(() => {
		if (loading || !data || !data.stake_aggregate.nodes) return
		const _data = data.stake_aggregate.nodes

		const stakers = [
			...new Set(_data.map((item) => (item.amount > 0 ? item.staker_address : null)).filter((i) => i !== null)),
		]

		const stakes = stakers.map((adr, index) => {
			const val = _data
				.filter((item) => item.staker_address === adr)
				.map((item) => [item.block_number, item.amount])
			const res = { address: adr, tx: val }
			return res
		})

		setState({
			...state,
			totalStakingEvents: _data.length,
			stakers,
			stakes,
		})
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { loading, state }
}
