import { useEffect, useRef, useState } from 'react'
import { AccountSettings, ExtensionState } from 'src/@types/extension'
import { useNetworkContext } from 'src/provider/network/modules/context'
import { EXTENSION_STATE_DEFAULT, ExtensionContext } from './modules/context'
import { initializeAccounts } from './modules/accounts'
import useLocalStorage from 'src/hooks/useLocalStorage'

export function ExtensionProvider({ children, allowConnect }) {
	const [state, setState] = useState<ExtensionState>(null)
	const { apiProvider } = useNetworkContext()
	const [accountSettings, setAccountSettings] = useLocalStorage<AccountSettings>('settings', {
		selectedAddress: null,
	})
	const isMountedRef = useRef<null | boolean>(null)

	useEffect(() => {
		isMountedRef.current = true
		return () => {
			isMountedRef.current = false
		}
	}, [])

	useEffect(() => {
		if (!apiProvider) return
		if (allowConnect) {
			// Load accounts from extension
			initializeAccounts(apiProvider.systemProperties, accountSettings).then((extensionState: ExtensionState) => {
				if (isMountedRef.current) {
					if (!extensionState?.selectedAccount && extensionState?.accounts?.length > 0) {
						extensionState.selectedAccount = extensionState.accounts[0]
						setAccountSettings({ selectedAddress: extensionState.selectedAccount?.account?.address })
					}

					setState(extensionState)

					// TODO: Remove
					console.log('ExtensionState', extensionState)
				}
			})
		} else {
			// Reset accounts and state
			setState(EXTENSION_STATE_DEFAULT)
		}
	}, [apiProvider, allowConnect])

	return <ExtensionContext.Provider value={state}>{children}</ExtensionContext.Provider>
}
