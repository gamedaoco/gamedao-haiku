import { BaseDotsamaWallet } from '@talisman-connect/wallets'

import logo from './logo.png'

export class PolkawalletWallet extends BaseDotsamaWallet {
	extensionName = 'polkawallet'
	title = 'Polkawallet'
	// noExtensionMessage = 'You can use any Polkadot compatible wallet but we recommend using Talisman'
	installUrl = 'https://polkawallet.io/'
	logo = {
		src: logo.src,
		alt: 'Polkawallet Logo',
	}
}
