import React from 'react'

import { Box } from '@mui/material'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useCampaignContributorsSubscription } from 'src/queries'
import { useCampaignSubscription } from 'src/queries'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import { CreatedCampaignSection } from './CampaignsSection/CreatedCampaignsSection/createdCampainsSection'
import ContributedCampaignsSection from './CampaignsSection/contributedCampaignsSection/contributedCampaignsSection'

export function MyCampaignsTab() {
	const accountState = useCurrentAccountState()
	const { data, loading } = useCampaignSubscription({
		variables: { address: getAddressFromAccountState(accountState) },
	})
	const { data: campaignContributorsData, loading: campaignContributorsLoading } =
		useCampaignContributorsSubscription({
			variables: { address: getAddressFromAccountState(accountState) },
		})
	return (
		<Box>
			<CreatedCampaignSection data={data} loading={loading} title={true} />
			<ContributedCampaignsSection data={campaignContributorsData} loading={campaignContributorsLoading} />
		</Box>
	)
}
