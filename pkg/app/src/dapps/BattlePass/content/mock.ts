type Achievement = {
	uuid: string
	name: string
	slug: string

	season: number
	level: number
	threshold: Threshold

	available: boolean
	claimable: boolean
	tradable: boolean
	transferable: boolean
	burnable: boolean
}

type Threshold = {
	local: {
		xp: number
		rep: number
		trust: number
	}
	global: {
		xp: number
		rep: number
		trust: number
	}
}

const achievement_defaults = {
	name: 'achievement',
	slug: 'achievement',

	season: 1,
	level: 1,

	available: true,
	claimable: true,
	tradable: true,
	transferable: true,
	burnable: true,
}

const battlepass = {
	uuid: '0x0123456789abcdef',

	name: 'battlepass 1',
	description: 'the first to rule them all',

	season: 1,
	price: {
		net: 10.0,
		currency: 'EUR',
		incl_vat: true,
	},

	achievements: [
		{ id: '0x0123456789abcdef', level: 0 },
		{ id: '0x0123456789abcdef', level: 1 },
		{ id: '0x0123456789abcdef', level: 2 },
		{ id: '0x0123456789abcdef', level: 3 },
		{ id: '0x0123456789abcdef', level: 4 },
		{ id: '0x0123456789abcdef', level: 5 },
		{ id: '0x0123456789abcdef', level: 6 },
		{ id: '0x0123456789abcdef', level: 7 },
		{ id: '0x0123456789abcdef', level: 8 },
		{ id: '0x0123456789abcdef', level: 9 },
		{ id: '0x0123456789abcdef', level: 10 },
	],
}
