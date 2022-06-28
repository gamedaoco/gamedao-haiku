import { useCallback, useEffect, useRef, useState } from 'react'

import { Wallet, getWallets } from '@talisman-connect/wallets'
import { useApiProvider } from 'hooks/useApiProvider'
import { SignAndNotify } from 'provider/extension/modules/signAndNotify'
import type { AccountSettings, AccountState, ExtensionState } from 'src/@types/extension'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import { createErrorNotification } from 'src/utils/notificationUtils'

import { WalletDialog } from 'components/WalletDialog/walletDialog'

import { initializeAccounts } from './modules/accounts'
import { EXTENSION_STATE_DEFAULT, ExtensionContext } from './modules/context'

export function ExtensionProvider({ children }) {
	const [state, setState] = useState<ExtensionState>(null)
	const apiProvider = useApiProvider()
	const [supportedWalletsState, setSupportedWalletsState] = useState<Wallet[]>()
	const [allSupportedWalletsState, setAllSupportedWalletsState] = useState<Wallet[]>()
	const [accountSettings, setAccountSettings] = useLocalStorage<AccountSettings>('extension-account-settings', {
		selectedAddress: null,
		lastUsedExtension: null,
		allowConnect: false,
	})
	const isMountedRef = useRef<null | boolean>(null)

	// Connect and disconnect callback
	// Set allowConnect state to trigger effect
	const connectWalletCallback = useCallback(() => {
		setAccountSettings({ ...accountSettings, allowConnect: true })
	}, [accountSettings, setAccountSettings])
	const disconnectWalletCallback = useCallback(() => {
		setAccountSettings({ ...accountSettings, allowConnect: false, lastUsedExtension: null })
	}, [accountSettings, setAccountSettings])
	const selectWalletExtension = useCallback(
		(extensionName: string) => {
			setAccountSettings({ ...accountSettings, lastUsedExtension: extensionName })
		},
		[accountSettings, setAccountSettings],
	)

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
		let supWallets = supportedWalletsState

		if (!supportedWalletsState) {
			setAllSupportedWalletsState(getWallets() ?? [])
			const wallets = getWallets().filter((wallet) => wallet.installed)
			setSupportedWalletsState(wallets)
			supWallets = wallets
		}

		if (accountSettings.allowConnect && accountSettings.lastUsedExtension && supWallets) {
			// Load accounts from extension
			initializeAccounts(apiProvider.systemProperties, accountSettings, supWallets)
				.then((extensionState: ExtensionState) => {
					if (extensionState === null) {
						disconnectWalletCallback()
						return
					}

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
				.catch((error) => {
					createErrorNotification(`Wallet connection error: ${error.message}`)
					disconnectWalletCallback()
				})
		} else {
			// Reset accounts and state
			setState(EXTENSION_STATE_DEFAULT)
		}
	}, [apiProvider, accountSettings.allowConnect, accountSettings.lastUsedExtension])

	return (
		<ExtensionContext.Provider
			value={
				{
					...(state ?? {}),
					connectWallet: connectWalletCallback,
					disconnectWallet: disconnectWalletCallback,
					selectAccount: selectAccountCallback,
					supportedWallets: supportedWalletsState,
					allSupportedWallets: allSupportedWalletsState,
					signAndNotify: SignAndNotify,
				} as any
			}
		>
			<WalletDialog
				callback={selectWalletExtension as any}
				open={accountSettings.allowConnect && !accountSettings.lastUsedExtension}
				onClose={disconnectWalletCallback as any}
			/>
			{children}
		</ExtensionContext.Provider>
	)
}
