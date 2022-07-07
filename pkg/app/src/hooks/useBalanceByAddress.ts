import { useEffect, useState } from 'react'

import { useLogger } from 'hooks/useLogger'
import { useSystemProperties } from 'hooks/useSystemProperties'
import { useBalanceByAddressSubscription } from 'src/queries'
import { formatBalanceString } from 'src/utils/balance'

export interface Balance {
	frozen: number
	free: number
	reserved: number
	balanceId: number
	tokenSymbol: string
	tokenDecimals: number
}
interface UseBalanceByAddress {
	balanceState: Balance[]
	loading: boolean
}
export function useBalanceByAddress(address: string): UseBalanceByAddress {
	const [balanceState, setBalanceState] = useState<Balance[]>(null)
	const { data, error, loading } = useBalanceByAddressSubscription({ variables: { address } })
	const systemProperties = useSystemProperties()
	const logger = useLogger('useBalanceByAddress')

	useEffect(() => {
		if (error) {
			logger.debug('Subscription error:', error)
		}
	}, [error])

	useEffect(() => {
		if (data && systemProperties) {
			setBalanceState(
				data.Balance.map((balance) => {
					const tokenDecimals = systemProperties.tokenDecimals?.[balance.balanceId] ?? 18
					return {
						frozen: formatBalanceString(balance.frozen, tokenDecimals),
						free: formatBalanceString(balance.free, tokenDecimals),
						reserved: formatBalanceString(balance.reserved, tokenDecimals),
						balanceId: +balance.balanceId,
						tokenSymbol: systemProperties.tokenSymbol?.[balance.balanceId] ?? '',
						tokenDecimals: tokenDecimals,
					} as Balance
				}),
			)
		}
	}, [data, systemProperties])

	return { balanceState, loading }
}
