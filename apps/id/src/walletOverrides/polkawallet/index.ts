import logo from './logo.png'
import { BaseDotsamaWallet } from '@talisman-connect/wallets'

export class Polkawallet extends BaseDotsamaWallet {
	extensionName = 'polkawallet'
	title = 'Polkawallet'
	// noExtensionMessage = 'You can use any Polkadot compatible wallet but we recommend using Talisman'
	installUrl = 'https://polkawallet.io/'
	logo = {
		src: logo.src,
		alt: 'Polkawallet',
	}
}
