enum CampaignStatus {
	INIT = 'Init',
	ACTIVE = 'Active',
	PAUSED = 'Paused',
	FINALIZING = 'Finalizing',
	REVERTING = 'Reverting',
	SUCCESS = 'Success',
	FAILED = 'Failed',
	LOCKED = 'Locked',
}

export const mapping = {
	[CampaignStatus.ACTIVE]: 0,
	[CampaignStatus.INIT]: 1,
	[CampaignStatus.FINALIZING]: 2,
	[CampaignStatus.SUCCESS]: 3,
	[CampaignStatus.REVERTING]: 4,
	[CampaignStatus.FAILED]: 5,
	[CampaignStatus.PAUSED]: 6,
	[CampaignStatus.LOCKED]: 7,
}
