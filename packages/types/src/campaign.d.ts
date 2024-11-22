import { CampaignBoolExp, CampaignOrderBy } from '@gamedao/graph'

export interface DraftCampaign {
	orgId: string
	name: string
	description: string
	bannerCid: string
	content: string
	target: number
	deposit: number
	protocol: number
	usageOfFunds: string
	currencyId: number
	startDate: Date
	endDate: Date
	governance: number
	metadataCid: string
}

export interface DraftCampaignState extends DraftCampaign {
	setOrgId: (name) => void
	setName: (name) => void
	setDescription: (string) => void
	setBannerCid: (string) => void
	setContent: (string) => void
	setTarget: (number) => void
	setDeposit: (number) => void
	setProtocol: (number) => void
	setUsageOfFunds: (string) => void
	setCurrencyId: (number) => void
	setStartDate: (date) => void
	setEndDate: (date) => void
	setGovernance: (number) => void
	setMetadataCid: (string) => void
	clearAll: () => void
	restoreDraft: (draft: DraftCampaign) => void
}

export interface CampaignFiltersInterface {
	query: string
	sortOption: CampaignOrderBy | string
	filters: CampaignBoolExp[] | string[]
}
