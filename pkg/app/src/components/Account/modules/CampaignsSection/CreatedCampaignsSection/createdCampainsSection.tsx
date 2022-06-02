import React, { FC } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Campaign, useCampaignsQuery } from '@gamedao-haiku/graphql/dist'

import CampaignCard from './campaignCard'
import { AccountState } from 'src/@types/extension'

interface CreatedCampaignSectionProps {
	accountState: AccountState
}

const CreatedCampaignSection: FC<CreatedCampaignSectionProps> = ({ accountState }) => {
	const theme = useTheme()
	const { data } = useCampaignsQuery({ variables: { address: accountState?.account?.address } })

	return (
		<Box sx={{ pb: 4 }}>
			<Typography variant="body2" fontWeight="bold" sx={{ color: theme.palette.grey[500] }}>
				Created Campaigns
			</Typography>
			<Grid container sx={{ pt: 4 }} spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 4, md: 12 }}>
				<Grid item style={{ marginBottom: 10, minHeight: 406 }} xs={4}>
					<Card
						sx={{
							width: '100%',
							height: '100% ',
							border: 1,
							borderColor: theme.palette.grey[500],
							borderStyle: 'dashed',
							':hover': { opacity: 0.8 },
						}}
					>
						<Button sx={{ width: '100%', height: '100%' }}>
							<Box display="flex" flexDirection="column" justifyItems="center" alignItems="center">
								<Box
									sx={{
										borderRadius: '100%',
										maxWidth: 56,
										maxHeight: 56,
										padding: 2,
										backgroundColor: theme.palette.grey[900],
									}}
								>
									<AddIcon sx={{ color: theme.palette.grey[300] }} />
								</Box>
								<Typography
									variant="body1"
									color={theme.palette.primary.contrastText}
									fontWeight="600"
									sx={{ mt: 2 }}
								>
									New Campaign
								</Typography>
								<Typography variant="body1" color={theme.palette.primary.contrastText}>
									Click here to create anew campaign
								</Typography>
							</Box>
						</Button>
					</Card>
				</Grid>
				{data?.campaigns?.map((campaign: Campaign) => (
					<Grid item xs={4} style={{ marginBottom: 10 }} key={campaign?.id}>
						<CampaignCard campaign={campaign} />
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default CreatedCampaignSection
