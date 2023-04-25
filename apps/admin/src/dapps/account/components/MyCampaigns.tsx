import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { getAddressFromAccountState } from 'src/utils/accountUtils'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { Campaign, useCampaignContributorsSubscription, useCampaignSubscription } from '@gamedao/graph'

import { Card, CardContent, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { CampaignsList } from 'src/components/CampaignsList/campaignsList'
import { ContributedCampaignsSection } from 'src/components/CampaignsSection/ContributedCampaignsSection/contributedCampaignsSection'
import { CampaignEmptyState } from 'src/components/CampaignsSection/campaignEmptyState'

export function MyCampaigns() {
	const { t } = useTranslation()
	const theme = useTheme()

	const address = useCurrentAccountAddress()

	const { data, loading } = useCampaignSubscription({
		variables: { address: address },
	})

	const { data: campaignContributorsData, loading: campaignContributorsLoading } =
		useCampaignContributorsSubscription({
			variables: { address: address },
		})

	const paginatedData = useMemo<Campaign[]>(() => data?.campaign?.slice() as Campaign[], [data])

	return (
		<Card variant={'glass'}>
			<CardContent>
				<Typography variant="h5"> My Campaigns </Typography>
				<Typography variant="h6"> {t('page:campaigns:created_campaigns')} </Typography>
				{!loading && paginatedData?.length ? (
					<CampaignsList campaigns={paginatedData} loading={loading} />
				) : (
					<CampaignEmptyState />
				)}

				<ContributedCampaignsSection data={campaignContributorsData} loading={campaignContributorsLoading} />
			</CardContent>
		</Card>
	)
}
