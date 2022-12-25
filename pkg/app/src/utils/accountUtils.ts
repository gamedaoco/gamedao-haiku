import type { InjectedAccount } from '@polkadot/extension-inject/types'
import { hexToU8a, isHex } from '@polkadot/util'
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto'
import type { AccountState } from 'src/@types/extension'

export function shortAccountAddress(account: InjectedAccount): string {
	const address = account?.address ?? ''
	return `${address.slice(0, 4)}...${address.slice(-4)}`
}

export function getAccountName(account: InjectedAccount): string {
	return account?.name ?? ''
}

export function getAddressFromAccountState(accountState: AccountState) {
	return accountState?.account?.address
}
export function getNameFromAccountState(accountState: AccountState) {
	return accountState?.account?.name
}
export function getKusamaAddressFromAccountState(accountState: AccountState) {
	return encodeAddress(decodeAddress(getAddressFromAccountState(accountState)), 2)
}

export function getDecodedAddress(address: string): string {
	try {
		return decodeAddress(address).toString()
	} catch (error) {
		console.error('Address could not be decoded', 'error', error)
	}

	return null
}

export function checkIsAddressValid(address: string): boolean {
	try {
		isHex(address) ? hexToU8a(address) : decodeAddress(address)
		return true
	} catch (error) {
		return false
	}
}
export const getInitials = (name = ''): string =>
	name
		?.replace(/\s+/, ' ')
		?.split(' ')
		?.slice(0, 2)
		?.map((v) => v && v[0].toUpperCase())
		?.join('')
