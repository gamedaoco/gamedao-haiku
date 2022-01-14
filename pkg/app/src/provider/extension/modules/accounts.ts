import { SystemProperties } from 'src/@types/network'
import { AccountSettings, ExtensionState } from 'src/@types/extension'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { Signer } from '@polkadot/types/types'

export async function getSigner(account: InjectedAccountWithMeta): Promise<Signer> {
	const { web3FromSource } = await import('@polkadot/extension-dapp')
	try {
		return (await web3FromSource(account.meta.source)).signer
	} catch (error: any) {
		console.error('The signer could not be retrieved from the account', 'error:', error)
	}

	return null
}

export async function initializeAccounts(
	systemProperties: SystemProperties,
	accountSettings: AccountSettings,
): Promise<ExtensionState> {
	if (!systemProperties) return null
	try {
		const { web3Accounts, web3Enable } = await import('@polkadot/extension-dapp')
		const w3Enabled = (await web3Enable('polkadot-extension'))?.length > 0
		const walletAccounts = await web3Accounts({ ss58Format: systemProperties.ss58Format })
		const accounts = await Promise.all(
			walletAccounts.map(async (account) => {
				return {
					account,
					signer: await getSigner(account),
				}
			}),
		)
		const selectedAccount = accounts.find((acc) => acc.account.address === accountSettings.selectedAddress) || null

		return {
			w3Enabled,
			accounts,
			selectedAccount,
		}
	} catch (error: any) {
		console.error('Accounts could not be initialized', 'error:', error)
	}

	return null
}
