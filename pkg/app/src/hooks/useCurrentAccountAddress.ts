import { useEffect, useState } from 'react'

import { useExtensionContext } from 'providers/extension/modules/context'
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
