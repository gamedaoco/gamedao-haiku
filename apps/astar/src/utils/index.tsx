import { createInfoNotification } from './notification'
import { encodeAddress, decodeAddress } from '@polkadot/util-crypto'

export const copyToClipboard = (content) => {
	console.log('copied', content)
	return navigator.clipboard.writeText(content).then(() => createInfoNotification('copied'))
}

export const convertSS58Prefix = (address, prefix) => encodeAddress(decodeAddress(address), prefix)
