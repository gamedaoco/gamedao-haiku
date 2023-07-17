import { ApiPromise } from '@polkadot/api'
import { formatBalance } from '@polkadot/util'
import BigNumber from 'bignumber.js'

export function toUnit(balance: string, decimals: number | string): number {
	const base = new BigNumber('10').pow(typeof decimals !== 'string' ? (decimals ?? 18).toString() : decimals)
	const value = new BigNumber(balance).div(base).toFixed(6)
	return parseFloat(value)
}

export function fromUnit(balance: number, decimals: string): string {
	const base = new BigNumber(10).pow(new BigNumber(decimals))
	return new BigNumber(balance).multipliedBy(base).toString()
}

export function toUnitSi(balance: string, decimals: number | string): string {
	return formatBalance(balance, {
		withSi: true,
		decimals: typeof decimals === 'string' ? parseInt(decimals) : decimals,
	})
}

export function createTokenType(apiProvider: ApiPromise, token: string): any {
	return apiProvider.createType('ZeroPrimitivesCurrencyCurrencyId', {
		Token: token,
	})
}
