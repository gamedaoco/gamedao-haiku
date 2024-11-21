import { toUnit } from './token'

export function formatBalanceString(balance: string, decimals: number | string, displayDecimals: number = 2): number {
	const _ = toUnit(balance?.split(' ')?.[0]?.replaceAll(',', ''), decimals) || 0
	const fixed = Number(_.toFixed(displayDecimals))
	return fixed
}
