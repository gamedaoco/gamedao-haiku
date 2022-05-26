import { Card, CardContent, CardMedia, Typography, Box, LinearProgress } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React, { FC } from 'react'

interface Campaign {
	id: number
	poster: string
	profile: string
	title: string
	progress: number
	funding: number
	target: number
	contributer: number
}

interface CampaignCardProps {
	campaign: Campaign
}
const CampaignCard: FC<CampaignCardProps> = ({ campaign }) => {
	const theme = useTheme()

	return (
		<Card>
			<CardMedia
				component="img"
				sx={{
					width: '100%',
					position: 'relative',
					bottom: 5,
				}}
				src={campaign.poster}
				alt="campaign_poster"
			/>
			<Box
				display="flex"
				justifyContent="center"
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
			>
				<CardMedia
					component="img"
					sx={{
						width: '18%',
						borderRadius: '100%',
						position: 'relative',
						top: -35,
					}}
					src={campaign.profile}
					alt="campaign_poster"
				/>
			</Box>

			<CardContent sx={{ pt: 0, mt: -1 }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography fontWeight="600" variant="body1">
						{campaign.title}
					</Typography>
					<Typography variant="body2" color={theme.palette.grey[500]}>
						By ExtremeDAO
					</Typography>

					<LinearProgress
						variant="determinate"
						value={campaign.progress}
						sx={{
							mt: 2.3,
							pt: 1.2,
							width: '100%',
						}}
					/>
				</Box>
				<Box
					sx={{
						display: 'flex',
						pt: 3,
						alignContent: 'center',
						justifyContent: 'center',
						gap: '20%',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyItems: 'center',
						}}
					>
						<Typography variant="caption" color={theme.palette.grey[500]}>
							Funded
						</Typography>
						<Typography variant="body1">{campaign.funding}k</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyItems: 'center',
						}}
					>
						<Typography variant="caption" color={theme.palette.grey[500]}>
							Target
						</Typography>
						<Typography variant="body1">{campaign.target}M</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyItems: 'center',
						}}
					>
						<Typography variant="caption" color={theme.palette.grey[500]}>
							Contributer
						</Typography>
						<Typography variant="body1">{campaign.contributer}M</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	)
}

export default CampaignCard
