import { NovaWallet } from './novawallet'
import { Polkawallet } from './polkawallet'
import { Wallet, getWallets as getTalismanWallets } from '@talisman-connect/wallets'

// Add new wallets here
const supportedWallets = [...getTalismanWallets(), new Polkawallet(), new NovaWallet()]

export function getWallets() {
	return supportedWallets
}

export function getWalletBySource(source: string | unknown): Wallet | undefined {
	return supportedWallets.find((wallet) => {
		return wallet.extensionName === source
	})
}

export function isWalletInstalled(source: string | unknown): boolean {
	const wallet = getWalletBySource(source)
	return wallet?.installed as boolean
}
