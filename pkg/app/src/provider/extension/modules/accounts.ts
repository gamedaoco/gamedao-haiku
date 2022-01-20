import { SystemProperties } from 'src/@types/network'
import { ExtensionState } from 'src/@types/extension'

export async function initializeAccounts(systemProperties: SystemProperties): Promise<ExtensionState> {
	if (!systemProperties) return null
	try {
		const { web3Accounts, web3Enable } = await import('@polkadot/extension-dapp')
		return {
			w3Enabled: (await web3Enable('polkadot-extension'))?.length > 0,
			accounts: await web3Accounts({ ss58Format: systemProperties.ss58Format }),
		}
	} catch (error: any) {}

	return null
}
