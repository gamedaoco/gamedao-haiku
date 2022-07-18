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
