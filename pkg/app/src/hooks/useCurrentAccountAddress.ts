import { useEffect, useState } from 'react'
import { getAddressFromAccountState } from 'src/utils/accountUtils'
import { useExtensionContext } from 'provider/extension/modules/context'

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
