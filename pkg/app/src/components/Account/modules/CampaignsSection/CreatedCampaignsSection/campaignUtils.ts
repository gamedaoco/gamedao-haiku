import { Campaign } from '@gamedao-haiku/graphql/dist'

export function getCampaignName(campaign: Campaign): string {
	return campaign.metadata?.name
}

export function getCampaignTitle(campaign: Campaign): string {
	return campaign?.metadata?.title
}

export function getCampaignTarget(campaign: Campaign): number {
	return campaign?.target
}

export function getCampaignLogo(campaign: Campaign): string {
	return campaign?.metadata?.logo
}

export function getCampaignHeader(campaign: Campaign) {
	return campaign?.metadata?.header
}

export function getCampaignContributors(campaign: Campaign): number {
	return campaign?.contributors?.length
}

export function getCampaignFunding(campaign: Campaign): number {
	return campaign?.contributors.reduce((acc, obj) => (acc += parseInt(obj.contributed)), parseInt(campaign?.deposit))
}

export function getCampaignProgress(campaign: Campaign): number {
	return (getCampaignFunding(campaign) / getCampaignTarget(campaign)) * 100
}
