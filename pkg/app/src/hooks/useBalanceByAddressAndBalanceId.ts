import { useEffect, useState } from 'react'

import { TBalance, useBalanceByAddress } from 'hooks/useBalanceByAddress'

export function useBalanceByAddressAndBalanceId(address: string, balanceId: number): TBalance {
	const [balanceState, setBalanceState] = useState<TBalance>(null)
	const balance = useBalanceByAddress(address)

	useEffect(() => {
		if (balance) {
			setBalanceState(balance.find((b) => b.balanceId === balanceId))
		}
	}, [balance, balanceId])

	return balanceState
}
