import { useCallback, useEffect, useRef, useState } from 'react'
import type { AccountSettings, AccountState, ExtensionState } from 'src/@types/extension'
import { EXTENSION_STATE_DEFAULT, ExtensionContext } from './modules/context'
import { initializeAccounts } from './modules/accounts'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import { useApiProvider } from 'hooks/useApiProvider'

export function ExtensionProvider({ children }) {
	const [state, setState] = useState<ExtensionState>(null)
	const apiProvider = useApiProvider()
	const [accountSettings, setAccountSettings] = useLocalStorage<AccountSettings>('extension-account-settings', {
		selectedAddress: null,
		allowConnect: false,
	})
	const isMountedRef = useRef<null | boolean>(null)

	// Connect and disconnect callback
	// Set allowConnect state to trigger effect
	const connectWalletCallback = useCallback(() => {
		setAccountSettings({ ...accountSettings, allowConnect: true })
	}, [accountSettings, setAccountSettings])
	const disconnectWalletCallback = useCallback(() => {
		setAccountSettings({ ...accountSettings, allowConnect: false })
	}, [accountSettings, setAccountSettings])

	// Change selected account callback
	const selectAccountCallback = useCallback(
		(accountState: AccountState) => {
			if (!accountState) return
			setState({ ...(state ?? ({} as any)), selectedAccount: accountState })
			setAccountSettings({
				...accountSettings,
				selectedAddress: accountState?.account?.address,
			})
		},
		[accountSettings, setAccountSettings, state, setState],
	)

	// Initialize is mounted ref
	useEffect(() => {
		isMountedRef.current = true
		return () => {
			isMountedRef.current = false
		}
	}, [])

	// Logic initialize polkadot wallet and account loading
	useEffect(() => {
		if (!apiProvider) return
		if (accountSettings.allowConnect) {
			// Load accounts from extension
			initializeAccounts(apiProvider.systemProperties, accountSettings).then((extensionState: ExtensionState) => {
				if (isMountedRef.current) {
					if (!extensionState?.selectedAccount && extensionState?.accounts?.length > 0) {
						extensionState.selectedAccount = extensionState.accounts[0]
						setAccountSettings({
							...accountSettings,
							selectedAddress: extensionState.selectedAccount?.account?.address,
						})
					}

					setState(extensionState)
				}
			})
		} else {
			// Reset accounts and state
			setState(EXTENSION_STATE_DEFAULT)
		}
	}, [apiProvider, accountSettings.allowConnect])

	return (
		<ExtensionContext.Provider
			value={
				{
					...(state ?? {}),
					connectWallet: connectWalletCallback,
					disconnectWallet: disconnectWalletCallback,
					selectAccount: selectAccountCallback,
				} as any
			}
		>
			{children}
		</ExtensionContext.Provider>
	)
}
