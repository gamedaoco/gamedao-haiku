export interface TMPProposal {
	type: number
	name: string
	description: string
	startDate: Date
	endDate: Date
	majority: number
	deposit: number
	campaignId: string
	amount: number
	metaDataCID: string
	currencyId: number
	beneficiaryAddress: string
}

export interface TMPProposalState extends TMPProposal {
	setType: (number) => void
	setName: (name) => void
	setDescription: (string) => void
	setStartDate: (date) => void
	setEndDate: (date) => void
	setMajority: (number) => void
	setDeposit: (number) => void
	setMetaDataCID: (string) => void
	setCampaignId: (string) => void
	setAmount: (number) => void
	setCurrencyId: (number) => void
	setBeneficiaryAddress: (string) => void
	clearAll: () => void
}
