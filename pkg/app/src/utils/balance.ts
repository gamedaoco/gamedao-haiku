import { toUnit } from 'src/utils/token'

export function formatBalanceString(balance: string, decimals: number | string): number {
	return toUnit(balance?.split(' ')?.[0]?.replaceAll(',', ''), decimals)
}
