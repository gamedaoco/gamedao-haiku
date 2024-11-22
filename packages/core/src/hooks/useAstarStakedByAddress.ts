import { useEffect, useState } from 'react'
import { dAppId } from '@gamedao/constants'
import { useStakesPerStakerAndPeriodSubscription } from '@gamedao/graph'
import { useLogger, formatBalanceString, convertSS58Prefix } from '@gamedao/utils'

const initialState = {
	amount: 0,
}

export function useAstarStakedByAddress(address: string) {
	const logger = useLogger('astar')
	const localAddress = convertSS58Prefix(address, 5)
	const [state, setState] = useState(initialState)

	const { loading, data, error } = useStakesPerStakerAndPeriodSubscription({
		variables: {
			dapp: dAppId,
			address: localAddress ?? '',
		},
	})

	useEffect(() => {
		if (loading || !data || !localAddress) return
		const _ = data?.stakers[0]?.amount?.toString()
		const amount = formatBalanceString(_, 18, 4)
		setState({ amount: amount })
	}, [loading, data, localAddress])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { loading, state }
}
