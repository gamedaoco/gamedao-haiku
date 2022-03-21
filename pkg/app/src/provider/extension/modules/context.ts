import { createContext, useContext } from 'react'
import { ExtensionState } from 'src/@types/extension'

export const EXTENSION_STATE_DEFAULT: ExtensionState = {
	w3Enabled: false,
	accounts: null,
	selectedAccount: null,
	connectWallet: null,
	disconnectWallet: null,
	selectAccount: null,
	supportedWallets: null,
}

export const ExtensionContext = createContext<ExtensionState>(EXTENSION_STATE_DEFAULT)

export function useExtensionContext() {
	return useContext(ExtensionContext)
}
