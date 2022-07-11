import React from 'react'

import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import { CampaignStatus } from 'src/@types/campaignStatus'
import { Campaign, CampaignByOrganizationIdSubscription } from 'src/queries'
import { getCampaignByStatus } from 'src/utils/campaign'

import CampaignCard from './campaignCard'
import LoadingCampaignCard from './loadingCampaignCard'

export const PlusIcon = () => {
	const theme = useTheme()
	return (
		<Box
			sx={{
				borderRadius: theme.shape.borderRadiusLg,
				maxWidth: 56,
				maxHeight: 56,
				padding: 2,
				backgroundColor: theme.palette.grey[900],
			}}
		>
			<AddIcon sx={{ color: theme.palette.grey[600] }} />
		</Box>
	)
}

interface ComponentProps {
	data: CampaignByOrganizationIdSubscription
	loading: boolean
	title: boolean
	isAdmin: boolean
	onCreateCampaignClicked: () => void
}

export function CreatedCampaignSection({ data, loading, title, isAdmin, onCreateCampaignClicked }: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()
	const allCampaigns = [
		...getCampaignByStatus(data, CampaignStatus.ACTIVE),
		...getCampaignByStatus(data, CampaignStatus.INIT),
		...getCampaignByStatus(data, CampaignStatus.FINALIZING),
		...getCampaignByStatus(data, CampaignStatus.SUCCESS),
		...getCampaignByStatus(data, CampaignStatus.REVERTING),
		...getCampaignByStatus(data, CampaignStatus.FAILED),
		...getCampaignByStatus(data, CampaignStatus.PAUSED),
		...getCampaignByStatus(data, CampaignStatus.LOCKED),
	]

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
				{loading ? (
					[1, 2].map((x) => (
						<Grid item xs={4} key={x} sx={{ marginBottom: 5 }}>
							<LoadingCampaignCard />
						</Grid>
					))
				) : (
					<>
						{allCampaigns?.map((campaign: Campaign, index: number) => (
							<Grid item xs={4} key={index} sx={{ marginBottom: 5 }}>
								<CampaignCard campaign={campaign} />
							</Grid>
						))}
					</>
				)}
			</Grid>
		</Box>
	)
}
