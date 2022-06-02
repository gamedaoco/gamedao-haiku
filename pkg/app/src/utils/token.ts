import { formatBalance } from '@polkadot/util'
import BN from 'bn.js'

export function toUnit(balance: string, decimals: number | string): number {
	const balanceFormatted = formatBalance(
		balance,
		{ withSi: false },
		typeof decimals === 'string' ? parseInt(decimals) : decimals,
	)
	return parseFloat(balanceFormatted)
}

export function fromUnit(balance: number, decimals: string): string {
	const base = new BN(10).pow(new BN(decimals))
	return new BN(balance).mul(base).toString()
}
