import React, { useMemo } from 'react'

import { Box } from '@mui/material'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { Campaign, useCampaignContributorsSubscription } from 'src/queries'
import { useCampaignSubscription } from 'src/queries'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import { CampaignsList } from 'components/CampaignsSection/CampaignsList/campaignsList'
import { ContributedCampaignsSection } from 'components/CampaignsSection/ContributedCampaignsSection/contributedCampaignsSection'

export function MyCampaignsTab() {
	const accountState = useCurrentAccountState()
	const { data, loading } = useCampaignSubscription({
		variables: { address: getAddressFromAccountState(accountState) },
	})
	const { data: campaignContributorsData, loading: campaignContributorsLoading } =
		useCampaignContributorsSubscription({
			variables: { address: getAddressFromAccountState(accountState) },
		})

	const paginatedData = useMemo<Campaign[]>(() => data?.campaign?.slice() as Campaign[], [data])

	return (
		<Box>
			<CampaignsList data={paginatedData} loading={loading} title={true} isAdmin={true} />
			<ContributedCampaignsSection data={campaignContributorsData} loading={campaignContributorsLoading} />
		</Box>
	)
}
