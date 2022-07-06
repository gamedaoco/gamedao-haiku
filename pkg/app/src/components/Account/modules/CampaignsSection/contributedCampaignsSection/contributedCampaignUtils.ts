import { Campaign_Contributor } from 'src/queries'

export function getContributedCampaignProgress(campaignContributor: Campaign_Contributor): number {
	return (
		(campaignContributor?.campaign?.campaign_contributors_aggregate?.aggregate?.sum?.contributed /
			campaignContributor?.campaign?.target) *
		100
	)
}

export function getContributedCampaignTimeLeft(campaignContributor: Campaign_Contributor): number | String {
	const timeLeft = campaignContributor?.campaign?.expiry - campaignContributor?.campaign?.created_at_block
	return timeLeft > 0 ? timeLeft : 'Expired'
}
