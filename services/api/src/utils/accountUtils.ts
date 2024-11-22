import { hexToU8a, isHex } from '@polkadot/util'
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto'

export function getKusamaAddressFromAddress(address: string) {
	return encodeAddress(decodeAddress(address), 2)
}

export function getZeroAddressFromAddress(address: string) {
	return encodeAddress(decodeAddress(address), 25)
}

export function getDecodedAddress(address: string): string {
	try {
		return decodeAddress(address).toString()
	} catch (error) {
		console.error('Address could not be decoded', 'error', error)
	}

	return null as any
}

export function checkIsAddressValid(address: string): boolean {
	try {
		isHex(address) ? hexToU8a(address) : decodeAddress(address)
		return true
	} catch (error) {
		return false
	}
}
