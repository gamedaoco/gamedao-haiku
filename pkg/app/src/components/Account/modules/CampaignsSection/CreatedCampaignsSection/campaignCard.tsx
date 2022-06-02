import React, { FC } from 'react'

import { Campaign } from '@gamedao-haiku/graphql/dist'
import { Box, Card, CardContent, CardMedia, LinearProgress, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import {
	getCampaignContributors,
	getCampaignFunding,
	getCampaignHeader,
	getCampaignLogo,
	getCampaignName,
	getCampaignProgress,
	getCampaignTarget,
	getCampaignTitle,
} from './campaignUtils'

const gateway = 'https://ipfs.gamedao.co/gateway/'

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
				src={`${gateway}${getCampaignHeader(campaign)}`}
				alt="campaign_poster"
			/>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<CardMedia
					component="img"
					sx={{
						width: '18%',
						borderRadius: '100%',
						position: 'relative',
						top: -35,
					}}
					src={`${gateway}${getCampaignLogo(campaign)}`}
					alt="campaign_poster"
				/>
			</Box>

			<CardContent sx={{ pt: 0, mt: -1 }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography fontWeight="600" variant="body1">
						{getCampaignTitle(campaign)}
					</Typography>
					<Typography variant="body2" color={theme.palette.grey[500]}>
						{getCampaignName(campaign)}
					</Typography>

					<LinearProgress
						variant="determinate"
						value={getCampaignProgress(campaign)}
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
						<Typography variant="body1">{getCampaignFunding(campaign)}</Typography>
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
						<Typography variant="body1">{getCampaignTarget(campaign)}</Typography>
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
						<Typography variant="body1">{getCampaignContributors(campaign)}</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	)
}

export default CampaignCard
