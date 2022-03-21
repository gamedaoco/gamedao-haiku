import { InjectedAccount } from '@polkadot/extension-inject/types'
import { Signer } from '@polkadot/types/types'
import { Wallet } from '@talisman-connect/wallets'

export interface AccountSettings {
	selectedAddress: string
	allowConnect: boolean
	lastUsedExtension: string
}

export interface AccountState {
	account: InjectedAccount | null
	signer: Signer
}

export interface ExtensionState {
	w3Enabled: boolean
	supportedWallets: Wallet[]
	accounts: AccountState[] | null
	selectedAccount: AccountState
	connectWallet: Function
	disconnectWallet: Function
	selectAccount: Function<AccountState>
}
