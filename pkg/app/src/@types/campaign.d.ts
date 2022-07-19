import { Campaign_Bool_Exp, Campaign_Order_By } from 'src/queries'

export interface TMPCampaign {
	name: string
	description: string
	bannerCid: string
	content: string
	target: number
	deposit: number
	email: string
	protocol: number
}

export interface TMPCampaignState extends TMPCampaign {
	setName: (name) => void
	setDescription: (string) => void
	setBannerCid: (string) => void
	setContent: (string) => void
	setTarget: (number) => void
	setDeposit: (number) => void
	setEmail: (string) => void
	setProtocol: (number) => void
	clearAll: () => void
}
export interface CampaignFiltersInterface {
	query: string
	sortOption: Campaign_Order_By | string
	filters: Campaign_Bool_Exp[] | string[]
}
