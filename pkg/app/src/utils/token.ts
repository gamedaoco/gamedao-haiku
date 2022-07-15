import { formatBalance } from '@polkadot/util'
import BigNumber from 'bignumber.js'
import BN from 'bn.js'

export function toUnit(balance: string, decimals: number | string): number {
	const base = new BigNumber('10').pow(typeof decimals !== 'string' ? (decimals ?? 18).toString() : decimals)
	const value = new BigNumber(balance).div(base).toFixed(6)
	return parseFloat(value)
}

export function fromUnit(balance: number, decimals: string): string {
	const base = new BN(10).pow(new BN(decimals))
	return new BN(balance).mul(base).toString()
}

export function toUnitSi(balance: string, decimals: number | string): string {
	return formatBalance(balance, { withSi: true }, typeof decimals === 'string' ? parseInt(decimals) : decimals)
}
