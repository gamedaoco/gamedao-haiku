import React, { useCallback, useMemo, useState } from 'react'

import { useRouter } from 'next/router'

import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Campaign, useCampaignByOrganizationIdSubscription } from 'src/queries'

import { CampaignsList } from 'components/CampaignsList/campaignsList'
import { CreateCampaignPage } from 'components/TabPanels/Campaign/create'

interface ComponentProps {
	organizationId: string
	isAdmin: boolean
}

export function CampaignOverview({ organizationId, isAdmin }: ComponentProps) {
	const { data, loading } = useCampaignByOrganizationIdSubscription({
		variables: { orgId: organizationId },
	})
	const { t } = useTranslation()
	const { push } = useRouter()
	const rerouteToCampaigns = useCallback(() => {
		push('/campaigns')
	}, [push])

	const paginatedData = useMemo<Campaign[]>(() => data?.campaign?.slice() as Campaign[], [data])
	const [showCreatePage, setShowCreatePage] = useState<boolean>(false)

	const onCreateCallback = useCallback(() => {
		setShowCreatePage(true)
	}, [])

	const onHandleCancelClicked = useCallback(() => {
		setShowCreatePage(false)
	}, [])

	if (showCreatePage) {
		return <CreateCampaignPage organizationId={organizationId} cancel={onHandleCancelClicked} />
	}
	return !loading && paginatedData?.length ? (
		<CampaignsList
			campaigns={paginatedData}
			loading={loading}
			showCreate={isAdmin}
			createCallback={onCreateCallback}
		/>
	) : (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignContent: 'space-evenly',
					alignItems: 'center',
				}}
			>
				<Typography variant="subtitle1">{t('page:organisations:no_campaigns')}</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'space-evenly', mt: 2 }}>
					{isAdmin && (
						<Button variant="contained" onClick={onCreateCallback}>
							{t('button:ui:create_campaign')}
						</Button>
					)}
					<Button onClick={rerouteToCampaigns}>{t('button:ui:explore_campaigns')}</Button>
				</Box>
			</Box>
		</Box>
	)
}
