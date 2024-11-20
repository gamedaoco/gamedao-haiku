import { useEffect, useState } from 'react'
import { useStakersPerDappSubscription } from '@gamedao/graph'
import { useLogger } from './useLogger'
import { formatBalanceString } from '../utils/balance'
import { convertSS58Prefix } from '../utils'

type Staker = {
	address: string
	amount: number
}

const initialState = {
	totalStakers: 0,
	totalStaked: 0,
	stakers: [{}],
}

// subscription StakersPerDapp($dapp: String!) {
// 	stakers(where: {dapp_address: {_eq: $dapp}}) {
// 		amount
// 		dapp_address
// 		id
// 		staker_address
// 	}
// }

export function useAstarStakers(dAppId: string, address: string) {
	const logger = useLogger('astar')
	const [state, setState] = useState(initialState)

	const { loading, data, error } = useStakersPerDappSubscription({
		variables: {
			dapp: dAppId,
		},
	})

	useEffect(() => {
		if (loading || !data) return
		const stakers = data?.stakers.map((staker) => {
			const _ = staker?.amount?.toString()
			const amount = formatBalanceString(_, 18, 4)
			const address = staker?.staker_address
			return {
				id: staker?.id,
				address: convertSS58Prefix(address),
				amount,
			}
		})
		const totalStakers = data?.stakers?.length
		const totalStaked = data?.stakers?.reduce((acc, staker) => acc + Number(staker?.amount), 0)
		// logger.log('stakers', stakers)
		setState({ totalStakers, totalStaked, stakers })
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { loading, state }
}
