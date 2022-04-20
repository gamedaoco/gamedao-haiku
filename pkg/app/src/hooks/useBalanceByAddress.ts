import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useApiProvider } from 'hooks/useApiProvider'

function unsubRef(ref: MutableRefObject<any>) {
	if (ref.current && typeof ref.current === 'function') {
		ref.current()
	}
}

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
							data[key] = +data[key]?.split(' ')?.[0]
						})
						setBalanceState({
							...data,
							tokenSymbol: provider.systemProperties.tokenSymbol,
							tokenDecimals: +provider.systemProperties.tokenDecimals,
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
