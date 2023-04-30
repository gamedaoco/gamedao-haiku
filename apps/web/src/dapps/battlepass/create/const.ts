export type TMetadata = {
	name: string
	description: string
	slug: string
	tags: string[]
	imageCid: string
	price: number
	cid: string
}
export const initialMetadata: TMetadata = {
	name: '',
	description: '',
	slug: '',
	tags: [],
	imageCid: '',
	price: 0,
	cid: '',
}

export type TInitialState = {
	metadata?: TMetadata

	organizationId: string
	organizationAddress: string
	creatorAddress: string
	battlepassId: string

	// battlepass metadata
	name: string
	description: string
	slug: string
	tags: string[]
	coverImageCid: string
	metadataCid: string

	//
	iconImg: string
	bannerImg: string
	cardImg: string
	primaryColor: string
	secondaryColor: string
	backgroundColor: string
	//
	tokenCoverImg: string
	tokenContent: string
	//
	currency: string
	subscribers: number
	price: number
	stake: number
	freePasses: number
	totalPasses: number
	//
	duration: number
	claim: number
	join: number
	//
	acceptTerms: boolean
	botAccount: string
}

// const initialMetadataState = {
// 	collection: {},
// 	quests: [
// 		{
// 			index: 0,
// 			name: 'GameDAO Battlepass Quest 1',
// 			description: 'A fancy description of a quest',
// 			payload: {
// 				channel: 'twitter:gamedaoco',
// 				action: 'follow',
// 			},
// 			points: 100,
// 			metadataCID: '',
// 		},
// 	],
// 	rewards: [
// 		{
// 			index: 0,

// 			minPoints: 100,
// 			minLevel: 1,
// 			maxMint: 100,

// 			name: 'GameDAO Battlepass Reward Level 1',
// 			description: 'A fancy description of a reward',

// 			payload: null, // e.g. { 'onClaim', 'mint', '<id>' }

// 			thumbnailCID: '', // preview image
// 			mediaCID: '', // content

// 			metadataCID: '', // cid of this json excl this key
// 		},
// 	]
// }

export const initialState: TInitialState = {
	metadata: initialMetadata,

	organizationId: '',
	organizationAddress: '',
	battlepassId: '',
	creatorAddress: '',

	// styling
	primaryColor: '',
	secondaryColor: '',
	backgroundColor: '',

	// images
	iconImg: '',
	cardImg: '',
	bannerImg: '',

	// battlepass token
	tokenCoverImg: '',
	tokenContent: '',

	// content
	name: '',
	description: '',
	slug: '',
	tags: [],
	metadataCid: '',
	coverImageCid: '',

	// commercials
	currency: 'EUR',
	subscribers: 0,
	price: 1500, // in eurocents
	stake: 15000,
	freePasses: 0,
	totalPasses: 0, // unlimited
	// duration and access
	duration: 100,
	claim: 0,
	join: 1,
	// create
	acceptTerms: false,
	botAccount: '',
}
