import { CampaignStatus } from 'src/@types/campaignStatus'

export const CampaignsListSortMapping = {
	[CampaignStatus.ACTIVE]: 0,
	[CampaignStatus.CREATED]: 1,
	[CampaignStatus.FINALIZING]: 2,
	[CampaignStatus.SUCCESS]: 3,
	[CampaignStatus.REVERTING]: 4,
	[CampaignStatus.FAILED]: 5,
	[CampaignStatus.PAUSED]: 6,
	[CampaignStatus.LOCKED]: 7,
}
