export const collateral_types = [{ key: '0', text: 'GAME', value: 0 }]

export const proposal_types = [
	{ key: '0', text: 'General', value: 0 },
	{ key: '3', text: 'Withdrawal', value: 3 },
]

export const voting_types = [
	{ key: '0', text: 'Simple Majority', value: 0 }, // majority of those who vote, 1 account, 1 vote
	{ key: '1', text: 'Token Weight Majority', value: 1 }, // majority of token weight
	{ key: '4', text: 'Absolute Majority', value: 3 }, // 3. absolute majority
]

export const dao_bodies = [
	{ key: '0', text: 'Individual', value: 0 },
	{ key: '1', text: 'Off Chain Organization', value: 1 },
	{ key: '2', text: 'On Chain / DAO', value: 2 },
	{ key: '3', text: 'Hybrid DAO', value: 3 },
]
export const dao_member_governance = [
	{ key: '0', text: 'Open', value: 0 },
	{ key: '1', text: 'Invitation', value: 1 },
	{ key: '2', text: 'Proposal', value: 2 },
]

export const dao_fee_model = [
	{ key: '0', text: 'no fees', value: 0 }, // fees are reserved in actor account
	{ key: '1', text: 'reserve', value: 1 }, // fees are paid to treasury
	{ key: '2', text: 'transfer', value: 2 }, // fees are staked and may result in item drops
]

export const project_types = [
	{ key: '0', text: 'Game', value: '0' },
	{ key: '1', text: 'Content Pack / DLC', value: '1' },
	{ key: '2', text: 'Concept', value: '2' },
	{ key: '3', text: 'Audio / Music / SFX', value: '3' },
	{ key: '4', text: 'Video / Motion Graphics', value: '4' },
	{ key: '5', text: '2D / 3D / GFX / Artwork', value: '5' },
	{ key: '6', text: 'Team', value: '6' },
	{ key: '7', text: 'Merch', value: '7' },
	{ key: '8', text: 'Hardware', value: '8' },
	{ key: '9', text: 'Other', value: '9' },
]

export const protocol_types = [
	{ key: '0', text: 'Grant', value: '0' },
	{ key: '1', text: 'Prepaid', value: '1' },
]

export const countries = [
	{ key: '0', flag: 'eu', text: 'Europe', value: 'eu' },
	{ key: '1', flag: 'de', text: 'Germany', value: 'de' },
	{ key: '2', flag: 'ch', text: 'Switzerland', value: 'ch' },
	{ key: '3', flag: 'li', text: 'Liechtenstein', value: 'li' },
	{ key: '999', flag: 'xx', text: 'other', value: '999' },
]

export const project_durations = [
	{ key: '0', text: '1 day', value: '1' },
	{ key: '1', text: '7 days', value: '7' },
	{ key: '2', text: '30 days', value: '30' },
]

export const memberships = [{ key: '0', text: 'CitizenGame', value: 0 }]
