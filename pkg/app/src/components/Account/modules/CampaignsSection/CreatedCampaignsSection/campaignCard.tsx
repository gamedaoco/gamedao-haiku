import React, { FC } from 'react'

import { Campaign } from 'src/queries'
import { Box, Card, CardContent, CardMedia, LinearProgress, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import Lineup from 'components/lineup'

import { getCampaignFunding, getCampaignProgress } from './campaignUtils'
import { useConfig } from 'hooks/useConfig'
import { parseIpfsHash } from 'src/utils/ipfs'
import { abbreviateNumber } from 'src/utils/globalUtils'

interface CampaignCardProps {
	campaign: Campaign
}
const CampaignCard: FC<CampaignCardProps> = ({ campaign }) => {
	const theme = useTheme()
	const config = useConfig()

	return (
		<Card>
			<Box>
				<CardMedia
					component="img"
					src={parseIpfsHash(campaign?.campaign_metadata?.header, config.IPFS_GATEWAY)}
					alt="campaign_poster"
				/>
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
						src={parseIpfsHash(campaign?.campaign_metadata?.logo, config.IPFS_GATEWAY)}
						alt="campaign_poster"
					/>
				</Box>
			</Box>

			<CardContent sx={{ pt: 0, mt: -10 }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography fontWeight={theme.typography.fontWeightBold} variant="body1">
						{campaign?.campaign_metadata?.title}
					</Typography>
					<Typography variant="body2">{campaign?.organization?.organization_metadata?.name}</Typography>

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
					thirdTitle="Contributor"
					firstSubhead={abbreviateNumber(getCampaignFunding(campaign))}
					secondSubhead={abbreviateNumber(campaign?.target)}
					thirdSubhead={abbreviateNumber(campaign?.campaign_contributors?.length)}
					gap="20%"
				/>
			</CardContent>
		</Card>
	)
}

export default CampaignCard
