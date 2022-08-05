import React, { Fragment, useEffect, useState } from 'react'

import { Box, Button, Card, CircularProgress, Grid, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import { CampaignsListSortMapping } from 'src/constants/campaign'
import { Campaign } from 'src/queries'

import { CampaignCard } from 'components/CampaignCard/campaignCard'
import { PlusIcon } from 'components/Icons/plusIcon'

interface ComponentProps {
	campaigns: Campaign[]
	draftCampaigns?: Campaign[]
	title?: string
	loading?: boolean
	showCreate?: boolean
	createCallback?: () => void
}

export function CampaignsList({
	campaigns,
	showCreate,
	loading,
	title,
	draftCampaigns,
	createCallback,
}: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()
	const [campaignsState, setCampaignsState] = useState<Campaign[]>()

	useEffect(() => {
		setCampaignsState(
			[...(campaigns ?? [])].sort(
				(a, b) => (CampaignsListSortMapping?.[a.state] ?? 0) - (CampaignsListSortMapping?.[b.state] ?? 0),
			),
		)
	}, [campaigns])

	return (
		<Box>
			{title && (
				<Typography marginBottom={2} variant="body2" fontWeight={theme.typography.fontWeightBold}>
					{title}
				</Typography>
			)}

			{loading && (
				<Stack justifyContent="center" width="100%" alignItems="center" padding={4}>
					<CircularProgress />
				</Stack>
			)}
			<Grid
				sx={{
					display: 'grid',
					gap: '1rem',
					gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
				}}
			>
				{showCreate && (
					<Card variant="dashed">
						<Button sx={{ width: '100%', height: '100%', minHeight: 350 }} onClick={createCallback}>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyItems: 'center',
									alignItems: 'center',
								}}
							>
								<PlusIcon />
								<Typography variant="subtitle1" sx={{ mt: 2 }}>
									{t('page:campaigns:new_campaign')}
								</Typography>
								<Typography variant="body1">{t('page:campaigns:click')}</Typography>
							</Box>
						</Button>
					</Card>
				)}

				{campaignsState?.map((campaign: Campaign) => (
					<Fragment key={campaign?.id}>
						<CampaignCard campaign={campaign} />
					</Fragment>
				))}

				{draftCampaigns?.map((campaign: Campaign) => (
					<Fragment key={campaign?.id}>
						<CampaignCard campaign={campaign} />
					</Fragment>
				))}
			</Grid>
		</Box>
	)
}
