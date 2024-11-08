import { useEffect, useState } from 'react'
import { useStakesPerStakerAndPeriodSubscription } from 'src/queries'
import { useLogger } from 'src/hooks/useLogger'
import { dAppId } from 'src/constants/astar'
import { formatBalanceString } from 'src/utils/balance'
import { convertSS58Prefix } from 'src/utils'

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
			address: localAddress,
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
