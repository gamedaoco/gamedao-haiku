import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useLogger, formatBalanceString, convertSS58Prefix, sumBigNumbers } from '@gamedao/utils'
import { useStakersPerDappSubscription } from '@gamedao/graph'

type Staker = {
	address: string
	amount: number
}
type State = {
	totalStakers: number
	totalStaked: BigNumber | number
	stakers: null | Object[]
}
const initialState: State = {
	totalStakers: 0,
	totalStaked: 0,
	stakers: null,
}

export function useAstarDappStakers(id: string) {
	const logger = useLogger('useAstarStakers')
	const [state, setState] = useState(initialState)

	const { loading, data, error } = useStakersPerDappSubscription({
		variables: {
			dapp: id,
		},
	})

	useEffect(() => {
		if (loading || !data || data.stakers.length === 0) return

		const stakers = data.stakers.map((staker) => {
			const _amount = staker.amount.toString()
			const amount = formatBalanceString(_amount, 18, 4)
			const address = staker.staker_address
			return {
				id: staker.id,
				address: convertSS58Prefix(address),
				amount,
			}
		})

		const totalStakers = data.stakers.length

		const stakes = data.stakers.map((s) => BigNumber(s.amount ?? 0))
		const totalStaked = sumBigNumbers(stakes)

		setState({ totalStakers, totalStaked, stakers })
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { loading, state }
}
