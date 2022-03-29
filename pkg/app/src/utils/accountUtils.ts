import type { InjectedAccount } from '@polkadot/extension-inject/types'
import type { AccountState } from 'src/@types/extension'
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto'
import { hexToU8a, isHex } from '@polkadot/util'

export function shortAccountAddress(account: InjectedAccount): string {
	const address = account?.address ?? ''
	return `${address.slice(0, 15)}...${address.slice(-6)}`
}

export function getAccountName(account: InjectedAccount): string {
	return account?.name ?? ''
}

export function getAddressFromAccountState(accountState: AccountState) {
	return accountState?.account?.address
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
