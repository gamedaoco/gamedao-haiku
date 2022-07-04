export interface TmpCampaign {
	name: string
	description: string
}

export interface TmpCampaignState extends TmpCampaign {
	setName: (name) => void
	setDescription: (string) => void
	clearAll: () => void
}
