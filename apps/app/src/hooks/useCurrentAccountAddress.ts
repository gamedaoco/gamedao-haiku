import { useEffect, useState } from 'react'

import { useExtensionContext } from 'src/providers/extension/components/context'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

export function useCurrentAccountAddress(): string {
	const [addressState, setAddressState] = useState<string>('')
	const { selectedAccount } = useExtensionContext()

	useEffect(() => {
		if (selectedAccount) {
			setAddressState(getAddressFromAccountState(selectedAccount))
		} else {
			setAddressState('')
		}
	}, [selectedAccount])

	return addressState
}
