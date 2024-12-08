import { useEffect, useState } from 'react'
import { dAppId } from '@gamedao/constants'
import { useStakesPerStakerAndPeriodSubscription } from '@gamedao/graph'
import { useLogger, formatBalanceString, convertSS58Prefix } from '@gamedao/utils'

export function useAstarStakedByAddress(address: string) {
	const logger = useLogger('useAstarStakedByAddress')
	const localAddress = convertSS58Prefix(address, 5)
	const [state, setState] = useState({ amount: 0 })

	const { loading, data, error } = useStakesPerStakerAndPeriodSubscription({
		variables: {
			dapp: dAppId,
		},
	})

	useEffect(() => {
		if (!localAddress || loading || !data) return
		// const _ = data.stakers[0].amount.toString()
		// setState({ amount: formatBalanceString(_, 18, 4) })
	}, [loading, data, localAddress])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { loading, state }
}
