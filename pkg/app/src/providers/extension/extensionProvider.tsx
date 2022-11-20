import { useCallback, useEffect, useRef, useState } from 'react'

import { Wallet } from '@talisman-connect/wallets'
import { useApiProvider } from 'hooks/useApiProvider'
import { useLogger } from 'hooks/useLogger'
import { SignAndNotify } from 'providers/extension/modules/signAndNotify'
import { useTranslation } from 'react-i18next'
import type { AccountSettings, AccountState, ExtensionState } from 'src/@types/extension'
import { sessionUpdateInterval } from 'src/constants'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import { useUpdateSessionMutation } from 'src/queries'
import { createErrorNotification, createWarningNotification } from 'src/utils/notificationUtils'
import { getWallets } from 'src/walletOverrides/wallets'

import { WalletDialog } from 'components/WalletDialog/walletDialog'

import { initializeAccounts } from './modules/accounts'
import { EXTENSION_STATE_DEFAULT, ExtensionContext } from './modules/context'

export function ExtensionProvider({ children }) {
	const [state, setState] = useState<ExtensionState>(null)
	const { t } = useTranslation()
	const apiProvider = useApiProvider()
	const [supportedWalletsState, setSupportedWalletsState] = useState<Wallet[]>()
	const [allSupportedWalletsState, setAllSupportedWalletsState] = useState<Wallet[]>()
	const [accountSettings, setAccountSettings] = useLocalStorage<AccountSettings>('extension-account-settings', {
		selectedAddress: null,
		lastUsedExtension: null,
		allowConnect: false,
	})
	const [updateSession] = useUpdateSessionMutation()
	const isMountedRef = useRef<null | boolean>(null)
	const intervalRef = useRef(null)
	const logger = useLogger('ExtensionProvider')

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

	// Session handling
	const updateSessionCallback = useCallback(
		async (address: string) => {
			if (updateSession && address) {
				const data = await updateSession({
					variables: {
						address,
					},
				})

				logger.log(`updateSession for address ${address}, result: ${data?.data.updateSession}`)

				if (!data?.data?.updateSession) {
					logger.trace('updateSession failed')
				}
			}
		},
		[updateSession, logger],
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
			if (intervalRef.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				clearInterval(intervalRef.current)
			}
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

						if (extensionState.selectedAccount === null) {
							createWarningNotification(
								t('notification:warning:no_accounts_in_wallet', {
									name: accountSettings.lastUsedExtension,
								}),
							)
							disconnectWalletCallback()
							return
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
	}, [
		apiProvider,
		accountSettings.allowConnect,
		accountSettings.lastUsedExtension,
		accountSettings,
		disconnectWalletCallback,
		setAccountSettings,
		supportedWalletsState,
		t,
	])

	useEffect(() => {
		if (updateSession && accountSettings) {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}

			if (accountSettings.allowConnect && accountSettings.selectedAddress) {
				intervalRef.current = setInterval(
					updateSessionCallback,
					sessionUpdateInterval,
					accountSettings.selectedAddress,
				)
				updateSessionCallback(accountSettings.selectedAddress)
			}
		}
	}, [
		updateSession,
		accountSettings.selectedAddress,
		accountSettings.allowConnect,
		accountSettings,
		updateSessionCallback,
	])

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
