import { Campaign } from 'src/queries'

export function getCampaignProgress(campaign: Campaign): number {
	return (campaign?.campaign_contributors_aggregate?.aggregate?.sum?.contributed / campaign?.target) * 100
}
