import { CampaignContributor, CampaignContributorEdge } from '@gamedao-haiku/graphql/dist'

function extractValues(campaignContributorEdge: CampaignContributorEdge) {
	return campaignContributorEdge?.node
}

export function getContributedCampaignName(campaignContributorEdge: CampaignContributorEdge): string {
	return extractValues(campaignContributorEdge)?.campaign?.metadata?.name
}

export function getContributedCampaignTitle(campaignContributorEdge: CampaignContributorEdge): string {
	return extractValues(campaignContributorEdge)?.campaign?.metadata?.title
}

export function getContributedCampaignLogo(campaignContributorEdge: CampaignContributorEdge): string {
	return extractValues(campaignContributorEdge)?.campaign?.metadata?.logo
}

export function getContributedCampaignCreatedAtBlock(campaignContributorEdge: CampaignContributorEdge): number {
	return extractValues(campaignContributorEdge)?.campaign?.createdAtBlock
}

export function getContributedCampaignDeposit(campaignContributorEdge: CampaignContributorEdge): number {
	return parseInt(extractValues(campaignContributorEdge)?.campaign?.deposit)
}

export function getContributedCampaignTarget(campaignContributorEdge: CampaignContributorEdge): number {
	return extractValues(campaignContributorEdge)?.campaign?.target
}

export function getContributedCampaignExpiry(campaignContributorEdge: CampaignContributorEdge): number {
	return extractValues(campaignContributorEdge)?.campaign?.expiry
}

export function getContributedCampaignState(campaignContributorEdge: CampaignContributorEdge): string {
	return extractValues(campaignContributorEdge)?.campaign?.state
}

export function getContributedCampaignContributorsCount(campaignContributorEdge: CampaignContributorEdge): number {
	return extractValues(campaignContributorEdge)?.campaign?.contributors?.length
}

export function getContributedCampaignContribution(campaignContributorEdge: CampaignContributorEdge): number {
	return extractValues(campaignContributorEdge)?.contributed
}

export function getContributedCampaignRaisedAmount(campaignContributorEdge: CampaignContributorEdge): number {
	return extractValues(campaignContributorEdge)?.campaign?.contributors.reduce(
		(acc, obj) => (acc += parseInt(obj.contributed)),
		getContributedCampaignDeposit(campaignContributorEdge),
	)
}

export function getContributedCampaignProgress(campaignContributorEdge: CampaignContributorEdge): number {
	return (
		(getContributedCampaignRaisedAmount(campaignContributorEdge) /
			getContributedCampaignTarget(campaignContributorEdge)) *
		100
	)
}

export function getContributedCampaignTimeLeft(campaignContributorEdge: CampaignContributorEdge): number {
	return (
		extractValues(campaignContributorEdge)?.campaign?.expiry -
		extractValues(campaignContributorEdge)?.campaign?.createdAtBlock
	)
}
