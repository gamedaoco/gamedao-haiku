import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useLogger, formatBalanceString } from '@gamedao/utils'
import { Stakes_Per_Dap_And_Period_Select_Column, useAstarDappStakingEventsAggregateQuery } from '@gamedao/graph'

// subscription CurrentDappStake( $id:String, $period:Int ) {
//   stakes_per_dap_and_period(where: {
//     dapp_address: { _eq: $id }
//     period: { _eq: $period }
//   }) {
//     stake_amount
//     reward_amount
//     period
//   }
// }

export function useAstarDappStakingEventsAggregate(dapp: string) {
	const logger = useLogger('useAstarDappStakingEvents')
	const [state, setState] = useState({})
	const { loading, data, error } = useAstarDappStakingEventsAggregateQuery({
		variables: {
			dapp: dapp,
		},
	})

	useEffect(() => {
		if (loading || !data || !data.stake_aggregate.nodes) return
		const _data = data.stake_aggregate.nodes
		const stakesCount = _data.length
		logger.log('dapp staking actions', stakesCount)

		const stakers = [
			...new Set(_data.map((item) => (item.amount > 0 ? item.staker_address : null)).filter((i) => i !== null)),
		]
		logger.log('dapp stakers', stakers.length)

		const stakes = stakers.map((adr, index) => {
			const val = _data
				.filter((item) => item.staker_address === adr)
				.map((item) => [item.block_number, item.amount])
			const res = { address: adr, tx: val }
			return res
		})
		logger.log('dapp stakes', stakes)

		// reduce((stakes, item) => {
		// 	const key: string = `${item.staker_address}`
		// 	const value = new BigNumber(item.amount)
		// 	if (!stakes[key]) stakes[key] = []
		// 	stakes[key].push(value)
		// 	return stakes
		// }, [])
		setState(stakes)
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { loading, state }
}
