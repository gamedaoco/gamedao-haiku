import { useEffect, useState } from 'react'

import { useLogger } from 'src/hooks/useLogger'
import { useSystemProperties } from 'src/hooks/useSystemProperties'
import { useBalanceByAddressSubscription } from 'src/queries'
import { formatBalanceString } from 'src/utils/balance'

export type TBalance = {
	frozen: number
	free: number
	reserved: number
	balanceId: number
	tokenSymbol: string
	tokenDecimals: number
}

const balanceDefault: TBalance = {
	frozen: 0,
	free: 0,
	reserved: 0,
	balanceId: 0,
	tokenSymbol: '...',
	tokenDecimals: 0,
}

export function useBalanceByAddress(address: string): TBalance[] {
	const [balanceState, setBalanceState] = useState<TBalance[]>(null)
	const { data, error } = useBalanceByAddressSubscription({ variables: { address } })
	const systemProperties = useSystemProperties()
	const logger = useLogger('useBalanceByAddress')

	useEffect(() => {
		if (error) {
			logger.debug('Subscription error:', error)
		}
	}, [error, logger])

	useEffect(() => {
		if (data && systemProperties) {
			setBalanceState(
				data.Balance
					// @ts-ignore
					.sort((a, b) => (a.balanceId < b.balanceId ? -1 : a.balanceId > b.balanceId ? 1 : 0))
					.map((balance) => {
						const tokenDecimals = systemProperties.tokenDecimals?.[balance.balanceId] ?? 18
						return {
							frozen: formatBalanceString(balance.frozen, tokenDecimals),
							free: formatBalanceString(balance.free, tokenDecimals),
							reserved: formatBalanceString(balance.reserved, tokenDecimals),
							balanceId: +balance.balanceId,
							tokenSymbol: systemProperties.tokenSymbol?.[balance.balanceId] ?? '',
							tokenDecimals: tokenDecimals,
						} as TBalance
					}),
			)
		}
	}, [data, systemProperties])

	return balanceState
}
