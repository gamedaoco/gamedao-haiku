export interface Balances {
	symbol: string
	transferable: number
	locked: number
	reserved: number
	total: number
}
export const balances = [
	{
		symbol: 'ZERO',
		transferable: 89.9235,
		locked: 10.0,
		reserved: 7.0002,
		total: 110.0,
	},
	{
		symbol: 'GAME',
		transferable: 89.9235,
		locked: 89.9235,
		reserved: 89.9235,
		total: 110.0,
	},
	{
		symbol: 'PLAY',
		transferable: 89.9235,
		locked: 89.9235,
		reserved: 89.9235,
		total: 110.0,
	},
]
