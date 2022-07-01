import React, { FC } from 'react'

import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { AccountState } from 'src/@types/extension'
import { Campaign, CampaignSubscription } from 'src/queries'
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
			<AddIcon sx={{ color: theme.palette.grey[300] }} />
		</Box>
	)
}

interface CreatedCampaignSectionProps {
	data: CampaignSubscription
	loading: boolean
	accountState: AccountState
}

const CreatedCampaignSection: FC<CreatedCampaignSectionProps> = ({ data, loading, accountState }) => {
	const theme = useTheme()

	return (
		<Box sx={{ pb: 4 }}>
			<Typography variant="body2" fontWeight={theme.typography.fontWeightBold}>
				Created Campaigns
			</Typography>
			<Grid container sx={{ pt: 4 }} spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 4, md: 12 }}>
				<Grid item style={{ marginBottom: 10, minHeight: 406 }} xs={4}>
					<Card
						sx={{
							height: '100%',
							border: 1,
							borderStyle: 'dashed',
							':hover': { opacity: 0.8 },
						}}
					>
						<Button sx={{ width: '100%', height: '100%' }}>
							<Box display="flex" flexDirection="column" justifyItems="center" alignItems="center">
								<PlusIcon />
								<Typography variant="body1" fontWeight={theme.typography.fontWeightBold} sx={{ mt: 2 }}>
									New Campaign
								</Typography>
								<Typography variant="body1">Click here to create a new campaign</Typography>
							</Box>
						</Button>
					</Card>
				</Grid>

				{loading ? (
					[1, 2].map((x) => (
						<Grid item xs={4} key={x} style={{ marginBottom: 10 }}>
							<LoadingCampaignCard />
						</Grid>
					))
				) : (
					<>
						{data?.campaign?.map((campaign: Campaign, index: number) => (
							<Grid item xs={4} key={index} style={{ marginBottom: 10 }}>
								<CampaignCard campaign={campaign} />
							</Grid>
						))}
					</>
				)}
			</Grid>
		</Box>
	)
}

export default CreatedCampaignSection
