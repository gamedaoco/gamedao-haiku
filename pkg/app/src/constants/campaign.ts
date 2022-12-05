export enum CampaignState {
	CREATED = 'Created',
	ACTIVE = 'Active',
	PAUSED = 'Paused',
	FINALIZING = 'Finalizing',
	REVERTING = 'Reverting',
	SUCCESS = 'Success',
	FAILED = 'Failed',
	LOCKED = 'Locked',
	Draft = 'Draft',
}

export const CampaignsListSortMapping = {
	[CampaignState.ACTIVE]: 0,
	[CampaignState.CREATED]: 1,
	[CampaignState.FINALIZING]: 2,
	[CampaignState.SUCCESS]: 3,
	[CampaignState.REVERTING]: 4,
	[CampaignState.FAILED]: 5,
	[CampaignState.PAUSED]: 6,
	[CampaignState.LOCKED]: 7,
}
