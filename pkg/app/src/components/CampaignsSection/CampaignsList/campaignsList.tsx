import React, { useEffect, useState } from 'react'

import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import { CampaignsListSortMapping } from 'src/@types/campaignStatus'
import { Campaign } from 'src/queries'

import { PlusIcon } from 'components/Icons/plusIcon'

import { CampaignCard } from './campaignCard'
import { LoadingCampaignCard } from './loadingCampaignCard'

interface ComponentProps {
	data: Campaign[]
	loading: boolean
	title: boolean
	isAdmin: boolean
	onCreateCampaignClicked?: () => void
}

export function CampaignsList({ data, loading, title, isAdmin, onCreateCampaignClicked }: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()
	const [campaigns, setCampaigns] = useState<Campaign[]>(data)

	useEffect(() => {
		setCampaigns(
			data?.sort(
				(a, b) => (CampaignsListSortMapping?.[a.state] ?? 0) - (CampaignsListSortMapping?.[b.state] ?? 0),
			) ?? [],
		)
	}, [data])

	return (
		<Box sx={{ pb: 4 }}>
			{title && (
				<Typography variant="body2" fontWeight={theme.typography.fontWeightBold}>
					{t('page:campaigns:created_campaigns')}
				</Typography>
			)}
			<Grid container sx={{ pt: 2 }} spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 4, md: 12 }}>
				{isAdmin && (
					<Grid item sx={{ marginBottom: 5, minHeight: 406 }} xs={4}>
						<Card variant="dashed">
							<Button sx={{ width: '100%', height: '100%' }} onClick={onCreateCampaignClicked}>
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
					</Grid>
				)}
				{
					<>
						{campaigns?.map((campaign: Campaign) => (
							<Grid item xs={4} key={campaign?.id} sx={{ marginBottom: 5 }}>
								<CampaignCard campaign={campaign} />
							</Grid>
						))}
					</>
				}

				{(!data || loading) &&
					[1, 2].map((x) => (
						<Grid item xs={4} key={x} sx={{ marginBottom: 5 }}>
							<LoadingCampaignCard />
						</Grid>
					))}
			</Grid>
		</Box>
	)
}
