import { Campaign_Order_By } from 'src/queries'

export interface TmpCampaign {
	name: string
	description: string
}

export interface TmpCampaignState extends TmpCampaign {
	setName: (name) => void
	setDescription: (string) => void
	clearAll: () => void
}
export interface CampaignsSortOptions {
	text: string
	value: Campaign_Order_By | string
	key: string
}
