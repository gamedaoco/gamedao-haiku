import { BaseDotsamaWallet } from '@talisman-connect/wallets'

import logo from './logo.png'

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
