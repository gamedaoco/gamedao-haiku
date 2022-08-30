export type CurrentBalance = {
	readonly total?: number
	readonly income?: number
	readonly outgoing?: number
}

export function getCurrentBalanceSubscription() {
	return {
		income: 75000,
		outgoing: 51006,
		total: 100000,
	}
}

export type HistoricBalanceItem = {
	readonly name: string
	readonly data: number[]
}

export function getHistoricBalanceSubscription() {
	return [
		{
			name: 'Income',
			data: [19, 19, 22, 32, 54, 54, 52, 65, 80, 85, 75, 50],
		},
		{
			name: 'Outgoing',
			data: [35, 42, 60, 50, 42, 40, 42, 38, 25, 19, 18, 17],
		},
	]
}

export type TreasuryAsset = {
	readonly name: string
	readonly quantity: number
	readonly image: string
}

export function getAssetsSubscription(): TreasuryAsset[] {
	return [
		{
			name: 'ZERO',
			quantity: 714000064,
			image: 'zero.png',
		},
		{
			name: 'PLAY',
			quantity: 1350000197,
			image: 'play.png',
		},
		{
			name: 'GAME',
			quantity: 1720000361,
			image: 'game.png',
		},
		{
			name: 'aUSD',
			quantity: 2.6566,
			image: 'ausd.png',
		},
	]
}

export type HistoricIncome = {
	readonly currency: string
	readonly amount: number
	readonly source: string
	readonly type: string
	readonly hash: string
	readonly date: number
	readonly image?: string
}

export function getHistoricIncomeSubscription(): HistoricIncome[] {
	return [
		{
			amount: 0.093525,
			currency: 'ZERO',
			source: 'Vera Field',
			type: 'Campaign',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626889924,
			image: 'game',
		},
		{
			amount: 15.525,
			currency: 'PLAY',
			source: 'Vera Field',
			type: 'Campaign',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626889924,
			image: 'play',
		},
		{
			amount: 0.093525,
			currency: 'PLAY',
			source: 'Vera Field',
			type: 'Fee',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626889924,
		},
		{
			amount: 0.093525,
			currency: 'GAME',
			source: 'GameDAO',
			type: 'Donation',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626889924,
			image: 'zero',
		},
		{
			amount: 0.093525,
			currency: 'ZERO',
			source: 'Vera Field',
			type: 'Campaign',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626889924,
		},
		{
			amount: 15.525,
			currency: 'PLAY',
			source: 'Vera Field',
			type: 'Campaign',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626889924,
		},
		{
			amount: 0.093525,
			currency: 'PLAY',
			source: 'Vera Field',
			type: 'Fee',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626889924,
			image: 'game',
		},
		{
			amount: 0.093525,
			currency: 'GAME',
			source: 'GameDAO',
			type: 'Donation',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626889924,
		},
		{
			amount: 0.093525,
			currency: 'ZERO',
			source: 'Vera Field',
			type: 'Campaign',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626889924,
		},
		{
			amount: 15.525,
			currency: 'PLAY',
			source: 'Vera Field',
			type: 'Campaign',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626889924,
		},
		{
			amount: 0.093525,
			currency: 'PLAY',
			source: 'Vera Field',
			type: 'Fee',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626889924,
		},
		{
			amount: 0.093525,
			currency: 'GAME',
			source: 'GameDAO',
			type: 'Donation',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626889924,
		},
	]
}

export type HistoricOutgoing = {
	readonly currency: string
	readonly amount: number
	readonly target: string
	readonly type: string
	readonly hash: string
	readonly date: number
}

export function getHistoricOutgoingSubscription(): HistoricOutgoing[] {
	return [
		{
			amount: 0.093525,
			currency: 'PLAY',
			target: 'Vera Field',
			type: 'Spending',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626889924,
		},
		{
			amount: 0.093525,
			currency: 'GAME',
			target: 'Vera Field',
			type: 'Fee',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626895024,
		},
		{
			amount: 0.093525,
			currency: 'PLAY',
			target: 'GameDAO Treasury',
			type: 'Fee',
			hash: 'TNosx7HCGB4PP2MKI876EJH6',
			date: 1626898524,
		},
	]
}
