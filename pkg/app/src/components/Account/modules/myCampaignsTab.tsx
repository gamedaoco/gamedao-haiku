import React, { useMemo } from 'react'

import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useTranslation } from 'react-i18next'
import { Campaign, useCampaignContributorsSubscription, useCampaignSubscription } from 'src/queries'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import { CampaignsList } from 'components/CampaignsList/campaignsList'
import { ContributedCampaignsSection } from 'components/CampaignsSection/ContributedCampaignsSection/contributedCampaignsSection'
import { CampaignEmptyState } from 'components/CampaignsSection/campaignEmptyState'

export function MyCampaignsTab() {
	const { t } = useTranslation()
	const theme = useTheme()
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
			<Typography marginBottom={2} variant="body2" fontWeight={theme.typography.fontWeightBold}>
				{t('page:campaigns:created_campaigns')}
			</Typography>
			{!loading && paginatedData?.length ? (
				<CampaignsList campaigns={paginatedData} loading={loading} />
			) : (
				<CampaignEmptyState />
			)}

			<ContributedCampaignsSection data={campaignContributorsData} loading={campaignContributorsLoading} />
		</Box>
	)
}
