import { toUnit } from 'src/utils/token'

export function formatBalanceString(balance: string, decimals: number | string, displayDecimals: number = 2): number {
	return Number(toUnit(balance?.split(' ')?.[0]?.replaceAll(',', ''), decimals).toFixed(displayDecimals))
}
