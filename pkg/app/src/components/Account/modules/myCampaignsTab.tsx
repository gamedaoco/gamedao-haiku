import React, { useMemo } from 'react'

import { Box } from '@mui/material'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useTranslation } from 'react-i18next'
import { Campaign, useCampaignContributorsSubscription, useCampaignSubscription } from 'src/queries'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import { CampaignsList } from 'components/CampaignsList/campaignsList'
import { ContributedCampaignsSection } from 'components/CampaignsSection/ContributedCampaignsSection/contributedCampaignsSection'

export function MyCampaignsTab() {
	const { t } = useTranslation()

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
			<CampaignsList
				campaigns={paginatedData}
				loading={loading}
				title={t('page:campaigns:created_campaigns')}
				showCreate={false}
			/>
			<ContributedCampaignsSection data={campaignContributorsData} loading={campaignContributorsLoading} />
		</Box>
	)
}
