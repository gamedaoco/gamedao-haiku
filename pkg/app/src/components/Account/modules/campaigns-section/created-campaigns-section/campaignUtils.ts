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

export function getCampaignNam(campaign: Campaign) {
	return campaign.metadata.name
}
