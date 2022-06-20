import React, { FC } from 'react'

import { Campaign } from '@gamedao-haiku/graphql/dist'
import { Box, Card, CardContent, CardMedia, Container, LinearProgress, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import Lineup from 'components/lineup'

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
			<Box>
				<CardMedia component="img" src={`${gateway}${getCampaignHeader(campaign)}`} alt="campaign_poster" />
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Card variant="mask" />
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<CardMedia
						component="img"
						sx={{
							width: '4rem',
							height: '4rem',
							borderRadius: Number(theme.shape.borderRadius) * 40,
							top: -115,
						}}
						src={`${gateway}${getCampaignLogo(campaign)}`}
						alt="campaign_poster"
					/>
				</Box>
			</Box>

			<CardContent sx={{ pt: 0, mt: -10 }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography fontWeight={theme.typography.fontWeightBold} variant="body1">
						{getCampaignTitle(campaign)}
					</Typography>
					<Typography variant="body2">{getCampaignName(campaign)}</Typography>

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
				<Lineup
					firstTitle="Funded"
					secondTitle="Target"
					thirdTitle="Contributer"
					firstSubhead={getCampaignFunding(campaign)}
					secondSubhead={getCampaignTarget(campaign)}
					thirdSubhead={getCampaignContributors(campaign)}
					gap="20%"
				/>
			</CardContent>
		</Card>
	)
}

export default CampaignCard
