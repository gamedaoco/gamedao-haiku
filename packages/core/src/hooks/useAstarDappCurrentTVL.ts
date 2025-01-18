import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useLogger, formatBalanceString } from '@gamedao/utils'
import { useCurrentDappStakeSubscription } from '@gamedao/graph'

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

export function useAstarDappCurrentTVL(id?: string, period: number = 3) {
	const logger = useLogger('useAstarDappCurrentTVL')
	const [state, setState] = useState({})
	const { loading, data, error } = useCurrentDappStakeSubscription({
		variables: {
			id: id,
			period: period,
		},
	})

	useEffect(() => {
		if (loading || !data || !data.stakes_per_dap_and_period) return

		// logger.log('dapp tvl', data.stakes_per_dap_and_period )
		const _data = {
			// stake: formatBalanceString( data.stakes_per_dap_and_period.stake_amount.toString(),18 ,4 ),
			// rewards: formatBalanceString( data.stakes_per_dap_and_period.reward_amount.toString(),18 ,4 ),
		}
		setState(_data)
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { loading, state }
}
