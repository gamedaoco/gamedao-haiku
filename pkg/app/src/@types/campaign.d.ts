import { Campaign_Bool_Exp, Campaign_Order_By } from 'src/queries'

export interface TMPCampaign {
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
	endDate: Date
	governance: number
	metadataCid: string
}

export interface TMPCampaignState extends TMPCampaign {
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
	setEndDate: (date) => void
	setGovernance: (number) => void
	setMetadataCid: (string) => void
	clearAll: () => void
	restoreDraft: (draft: TMPCampaign) => void
}

export interface CampaignFiltersInterface {
	query: string
	sortOption: Campaign_Order_By | string
	filters: Campaign_Bool_Exp[] | string[]
}
