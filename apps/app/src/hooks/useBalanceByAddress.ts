import { useEffect, useState } from 'react'

import { useLogger } from 'src/hooks/useLogger'
import { useSystemProperties } from 'src/hooks/useSystemProperties'
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

export function useBalanceByAddress(address: string): Balance[] {
	const [balanceState, setBalanceState] = useState<Balance[]>(null)
	const { data, error } = useBalanceByAddressSubscription({ variables: { address } })
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
				data.balance
					// @ts-ignore
					.sort((a, b) => (a.balanceId < b.balanceId ? -1 : a.balanceId > b.balanceId ? 1 : 0))
					.map((balance) => {
						const tokenDecimals = systemProperties.tokenDecimals?.[balance.balanceId] ?? 18
						return {
							frozen: formatBalanceString(balance.frozen, tokenDecimals) ?? 0,
							free: formatBalanceString(balance.free, tokenDecimals) ?? 0,
							reserved: formatBalanceString(balance.reserved, tokenDecimals) ?? 0,
							balanceId: +balance.balanceId,
							tokenSymbol: systemProperties.tokenSymbol?.[balance.balanceId] ?? '',
							tokenDecimals: tokenDecimals,
						} as Balance
					}),
			)
		}
	}, [data, systemProperties])

	return balanceState
}
