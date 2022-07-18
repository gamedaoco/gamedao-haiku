import { Campaign_Bool_Exp, Campaign_Order_By } from 'src/queries'

export interface TMPCampaign {
	name: string
	description: string
	bannerCid: string
	content: string
}

export interface TMPCampaignState extends TMPCampaign {
	setName: (name) => void
	setDescription: (string) => void
	setBannerCid: (string) => void
	setContent: (string) => void
	clearAll: () => void
}
export interface CampaignFiltersInterface {
	query: string
	sortOption: Campaign_Order_By | string
	filters: Campaign_Bool_Exp[] | string[]
}
