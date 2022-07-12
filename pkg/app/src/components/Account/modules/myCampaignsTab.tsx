import React, { useMemo } from 'react'

import { Box } from '@mui/material'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { Campaign, useCampaignContributorsSubscription } from 'src/queries'
import { useCampaignSubscription } from 'src/queries'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import { CreatedCampaignSection } from './CampaignsSection/CreatedCampaignsSection/createdCampainsSection'
import ContributedCampaignsSection from './CampaignsSection/contributedCampaignsSection/contributedCampaignsSection'

export function MyCampaignsTab() {
	const accountState = useCurrentAccountState()
	const { data, loading } = useCampaignSubscription({
		variables: { address: getAddressFromAccountState(accountState) },
	})
	const paginatedData = useMemo<Campaign[]>(() => data?.campaign?.slice() as Campaign[], [])
	const { data: campaignContributorsData, loading: campaignContributorsLoading } =
		useCampaignContributorsSubscription({
			variables: { address: getAddressFromAccountState(accountState) },
		})
	return (
		<Box>
			<CreatedCampaignSection data={paginatedData} loading={loading} />
			<ContributedCampaignsSection data={campaignContributorsData} loading={campaignContributorsLoading} />
		</Box>
	)
}
