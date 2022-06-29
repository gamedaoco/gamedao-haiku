import { Campaign } from 'src/queries'


export function getCampaignFunding(campaign: Campaign): number {
	return campaign?.campaign_contributors.reduce((acc, obj) => (acc += parseInt(obj.contributed)), parseInt(campaign?.deposit))
}

export function getCampaignProgress(campaign: Campaign): number {
	return (getCampaignFunding(campaign) / campaign?.target) * 100
}
