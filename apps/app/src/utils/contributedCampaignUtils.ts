import { CampaignContributor } from 'src/queries'

export function getContributedCampaignProgress(campaignContributor: CampaignContributor): number {
	return (
		(campaignContributor?.campaign?.campaignContributorsAggregate?.aggregate?.sum?.contributed /
			campaignContributor?.campaign?.target) *
		100
	)
}

export function getContributedCampaignTimeLeft(campaignContributor: CampaignContributor): number | String {
	const timeLeft = campaignContributor?.campaign?.expiry - campaignContributor?.campaign?.createdAtBlock
	return timeLeft > 0 ? timeLeft : 'Expired'
}
