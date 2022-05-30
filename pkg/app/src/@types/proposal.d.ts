export interface TMPProposal {
	type: number
	name: string
	description: string
	startDate: Date
	endDate: Date
	majority: number
	deposit: number
}

export interface TMPProposalState extends TMPProposal {
	setType: (number) => void
	setName: (name) => void
	setDescription: (string) => void
	setStartDate: (date) => void
	setEndDate: (date) => void
	setMajority: (number) => void
	setDeposit: (number) => void
	clearAll: () => void
}
