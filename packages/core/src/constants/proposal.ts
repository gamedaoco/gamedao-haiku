export const PROPOSAL_KEYS = {
	General: 0,
	Withdrawal: 1,
	Spending: 2,
}

export const PROPOSAL_TYPES = {
	[PROPOSAL_KEYS.General]: 'General',
	[PROPOSAL_KEYS.Withdrawal]: 'Withdrawal',
	[PROPOSAL_KEYS.Spending]: 'Spending',
}

export const PROPOSAL_UNITS = {
	[PROPOSAL_KEYS.General]: 'Account',
	[PROPOSAL_KEYS.Withdrawal]: 'Account',
	[PROPOSAL_KEYS.Spending]: 'Account',
}

export const CREATE_PROPOSAL_TYPE_TITLES = {
	[PROPOSAL_KEYS.General]: 'What’s the name of your proposal?',
	[PROPOSAL_KEYS.Withdrawal]: 'Withdrawal Proposal',
	[PROPOSAL_KEYS.Spending]: 'Spending Proposal',
}

export const PROPOSAL_MAJORITIES = {
	0: 'Simple',
	1: 'Relative',
	2: 'Absolute',
}

export const PROPOSAL_CREATE_DEPOSIT = {
	[PROPOSAL_KEYS.General]: 100,
	[PROPOSAL_KEYS.Withdrawal]: 100,
	[PROPOSAL_KEYS.Spending]: 100,
}
