import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'

export interface ExtensionState {
	w3Enabled: boolean
	accounts: InjectedAccountWithMeta[] | null
}
