import { InjectedAccount, InjectedExtension } from '@polkadot/extension-inject/types'
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto'
import { Wallet } from '@talisman-connect/wallets'
import { AccountSettings, ExtensionState } from 'src/@types/extension'
import { SystemProperties } from 'src/@types/network'
import { getDecodedAddress } from 'src/utils/accountUtils'
import { getWalletBySource } from 'src/walletOverrides/wallets'

export async function initializeAccounts(
	systemProperties: SystemProperties,
	accountSettings: AccountSettings,
	supportedWallets: Wallet[],
): Promise<ExtensionState> {
	if (!systemProperties || !supportedWallets?.length) return null
	const wallet = getWalletBySource(accountSettings.lastUsedExtension)
	if (!wallet) {
		console.error(`The wallet ${accountSettings.lastUsedExtension} is not installed `)
		return null
	}

	try {
		// Enable wallet
		await wallet.enable('GameDAO')
		const extension: InjectedExtension = wallet.extension
		if (!extension) {
			throw new Error('The wallet connection is unauthorized')
		}

		const walletAccounts: InjectedAccount[] = await extension.accounts.get()
		const accounts = await Promise.all(
			walletAccounts.map(async (account: InjectedAccount) => {
				account.address = encodeAddress(decodeAddress(account.address), systemProperties.ss58Format)
				return {
					account,
					signer: extension.signer,
				}
			}),
		)

		const selectedAccount =
			accounts.find(
				(acc) => getDecodedAddress(acc.account.address) === getDecodedAddress(accountSettings.selectedAddress),
			) || null

		return {
			w3Enabled: true,
			// @ts-ignore
			accounts,
			// @ts-ignore
			selectedAccount,
			connectWallet: null,
			disconnectWallet: null,
			selectAccount: null,
			supportedWallets: null,
			allSupportedWallets: null,
			signAndNotify: null,
		}
	} catch (error) {
		console.error('Accounts could not be initialized', 'error:', error)
		throw error
	}
}
