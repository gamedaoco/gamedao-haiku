// score map version 1

export const scoreToLevelMap = [
	{ level: 1, score: 100, name: 'dust', id: '0123456789' },
	{ level: 2, score: 200, name: 'beginner', id: '0123456789' },
	{ level: 3, score: 300, name: 'beginner', id: '0123456789' },
	{ level: 4, score: 500, name: 'amateur', id: '0123456789' },
	{ level: 5, score: 800, name: 'amateur', id: '0123456789' },
	{ level: 6, score: 1300, name: 'amateur', id: '0123456789' },
	{ level: 7, score: 2100, name: 'amateur', id: '0123456789' },
	{ level: 8, score: 3400, name: 'regular', id: '0123456789' },
	{ level: 9, score: 5500, name: 'regular', id: '0123456789' },
	{ level: 10, score: 8900, name: 'regular', id: '0123456789' },
	{ level: 11, score: 14400, name: 'regular', id: '0123456789' },
	{ level: 12, score: 23300, name: 'advanced', id: '0123456789' },
	{ level: 13, score: 37700, name: 'advanced', id: '0123456789' },
	{ level: 14, score: 61000, name: 'advanced', id: '0123456789' },
	{ level: 15, score: 98700, name: 'pro', id: '0123456789' },
	{ level: 16, score: 159700, name: 'pro', id: '0123456789' },
	{ level: 17, score: 258400, name: 'elite', id: '0123456789' },
	{ level: 18, score: 418100, name: 'elite', id: '0123456789' },
	{ level: 19, score: 676500, name: 'overlord', id: '0123456789' },
	{ level: 20, score: 1094600, name: 'god', id: '0123456789' },
]

// TODO: score/level to XRT

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

// reward version 1

type Reward = {
	id: string

	name: string
	slug: string
	description: string
	tags: string[]

	icon_url: string
	banner_url: string
	content_url: string

	season: number
	level: number
	score: number

	available: boolean
	claimable: boolean
	tradable: boolean
	transferable: boolean
	burnable: boolean
}

export const reward_defaults: Reward = {
	id: '0',
	name: 'reward',
	slug: 'reward',
	description: 'Fan shout-out Graphic 1',
	tags: ['reward', 'shoutout', 'level 2'],

	icon_url: 'https://gamedao.infura-ipfs.io/ipfs/QmcYzWQmFdSRc5vbfnq1oWVbLaf4th8MCiakjvD4r3hsED',
	banner_url: 'https://gamedao.infura-ipfs.io/ipfs/QmP3ubPfxMUY7yjxdd6LccqQ9RBbGkr9JTwzoPvyLvnAMe',
	content_url: '/3d/tex/wave-level-1.png',

	season: 1,
	level: 2, // min level to achieve
	score: 12345, // required score to claim

	available: true,
	claimable: true,
	tradable: true,
	transferable: true,
	burnable: true,
}

export const battlepass = {
	uuid: '0x0123456789abcdef',
	name: 'battlepass 1',
	slug: 'battlepass-1',
	description: 'the first to rule them all',

	season: 1,
	price: {
		net: 10.0,
		currency: 'EUR',
		incl_vat: true,
	},

	// claimable rewards and threshold
	rewards: [
		{ id: '0x0123456789abcdef' },
		{ id: '0x0123456789abcdef' },
		{ id: '0x0123456789abcdef' },
		{ id: '0x0123456789abcdef' },
		{ id: '0x0123456789abcdef' },
		{ id: '0x0123456789abcdef' },
		{ id: '0x0123456789abcdef' },
		{ id: '0x0123456789abcdef' },
		{ id: '0x0123456789abcdef' },
		{ id: '0x0123456789abcdef' },
	],
}
