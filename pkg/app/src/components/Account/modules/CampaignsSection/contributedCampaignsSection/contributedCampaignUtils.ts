import { Campaign_Contributor } from 'src/queries'

export function getContributedCampaignRaisedAmount(campaignContributor: Campaign_Contributor): number {
	return campaignContributor?.campaign?.campaign_contributors.reduce(
		(acc, obj) => (acc += parseInt(obj.contributed)),
		campaignContributor?.campaign?.deposit,
	)
}

export function getContributedCampaignProgress(campaignContributor: Campaign_Contributor): number {
	return (
		(getContributedCampaignRaisedAmount(campaignContributor) /
			campaignContributor?.campaign?.target) *
		100
	)
}

export function getContributedCampaignTimeLeft(campaignContributor: Campaign_Contributor): number {
	return (
		campaignContributor?.campaign?.expiry - campaignContributor?.campaign?.created_at_block
	)
}
