//  import { CampaignsConnection } from '@gamedao-haiku/graphql/dist/resolver/resolvers-types'

// export function getCampaignName(campaignsConnection: CampaignsConnection): string {
// 	return campaignsConnection?.edges?.
// }

// export function getCampaignTitle(campaignsConnection: CampaignsConnection): string {
// 	return campaign?.metadata?.title
// }

// export function getCampaignTarget(campaignsConnection: CampaignsConnection): number {
// 	return campaign?.target
// }

// export function getCampaignLogo(campaignsConnection: CampaignsConnection): string {
// 	return campaign?.metadata?.logo
// }

// export function getCampaignHeader(campaignsConnection: CampaignsConnection) {
// 	return campaign?.metadata?.header
// }

// export function getCampaignContributors(campaignsConnection: CampaignsConnection): number {
// 	return campaign?.contributors?.length
// }

// export function getCampaignFunding(campaignsConnection: CampaignsConnection): number {
// 	let total = 0
// 	campaign.contributors.map((contributor) => (total += parseInt(contributor.contributed)))
// 	return total
// }

// export function getCampaignProgress(campaignsConnection: CampaignsConnection): number {
// 	return (getCampaignFunding(campaign) / getCampaignTarget(campaign)) * 100
// }
