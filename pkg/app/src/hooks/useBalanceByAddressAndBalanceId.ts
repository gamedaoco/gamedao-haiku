import { useEffect, useState } from 'react'

import { Balance, useBalanceByAddress } from 'hooks/useBalanceByAddress'

export function useBalanceByAddressAndBalanceId(address: string, balanceId: number): Balance {
	const [balanceState, setBalanceState] = useState<Balance>(null)
	const { balanceState: balance } = useBalanceByAddress(address)

	useEffect(() => {
		if (balance) {
			setBalanceState(balance.find((b) => b.balanceId === balanceId))
		}
	}, [balance, balanceId])

	return balanceState
}
