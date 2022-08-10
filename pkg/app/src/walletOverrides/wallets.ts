import { Wallet, getWallets as getTalismanWallets } from '@talisman-connect/wallets'
import { PolkawalletWallet } from 'src/walletOverrides/polkawallet-wallet'

// Add new wallets here
const supportedWallets = [...getTalismanWallets(), new PolkawalletWallet()]

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
