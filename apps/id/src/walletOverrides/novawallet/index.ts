import logo from './logo.png'
import { BaseDotsamaWallet } from '@talisman-connect/wallets'

export class NovaWallet extends BaseDotsamaWallet {
	extensionName = 'novawallet'
	title = 'Nova Wallet'
	// noExtensionMessage = 'You can use any Polkadot compatible wallet but we recommend using Talisman'
	installUrl = 'https://novawallet.io/'
	logo = {
		src: logo.src,
		alt: 'Nova Wallet',
	}
}
