import { useEffect, useRef, useState } from 'react'

import { useApiProvider } from 'hooks/useApiProvider'
import { unsubRef } from 'src/utils/hooks'
import { toUnit } from 'src/utils/token'

export interface Balance {
	feeFrozen: number
	free: number
	miscFrozen: number
	reserved: number
	tokenSymbol: string
	tokenDecimals: number
}

export function useBalanceByAddress(address: string): Balance {
	const provider = useApiProvider()
	const unsubscribeRef = useRef(null)
	const [balanceState, setBalanceState] = useState<Balance>(null)

	useEffect(() => {
		unsubRef(unsubscribeRef)

		if (address && provider.apiProvider && provider.systemProperties) {
			provider.apiProvider.query.system
				.account(address, (result) => {
					const data = result?.toHuman()?.data
					if (data) {
						Object.keys(data || {}).forEach((key) => {
							data[key] = toUnit(
								data[key]?.split(' ')?.[0]?.replaceAll(',', ''),
								provider.systemProperties.tokenDecimals[provider.systemProperties.networkCurrency],
							)
						})
						setBalanceState({
							...data,
							tokenSymbol:
								provider.systemProperties.tokenSymbol[provider.systemProperties.networkCurrency],
							tokenDecimals:
								provider.systemProperties.tokenDecimals[provider.systemProperties.networkCurrency],
						})
					} else {
						setBalanceState(null)
					}
				})
				.then((unsub) => {
					unsubRef(unsubscribeRef)
					unsubscribeRef.current = unsub
				})
		}
	}, [address, provider])

	return balanceState
}
