import { CampaignByOrganizationIdSubscription } from 'src/queries'

export function getCampaignByStatus(data: CampaignByOrganizationIdSubscription, state: String) {
	return data?.campaign
		?.filter((campaign) => campaign?.state === state)
		?.sort((a, b) => {
			return b?.expiry - a?.expiry
		})
}
