import React, { FC } from 'react'

import { Campaign } from 'src/queries'
import { Avatar, Box, Card, CardContent, CardMedia, LinearProgress, Typography } from '@mui/material'
import Lineup from 'components/lineup'

import { getCampaignFunding, getCampaignProgress } from './campaignUtils'
import { useConfig } from 'hooks/useConfig'
import { parseIpfsHash } from 'src/utils/ipfs'
import { abbreviateNumber } from 'src/utils/globalUtils'

interface CampaignCardProps {
	campaign: Campaign
}
const CampaignCard: FC<CampaignCardProps> = ({ campaign }) => {
	const config = useConfig()

	return (
		<Card sx={{ maxHeight: 433 }}>
			<Box>
				<CardMedia
					component="img"
					src={parseIpfsHash(campaign?.campaign_metadata?.header, config.IPFS_GATEWAY)}
					alt="campaign_header"
					sx={{ maxHeight: 200 }}
				/>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Card sx={{ top: -35 }} variant="mask" />
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Avatar
						variant="primary"
						sx={{
							top: -115,
						}}
						src={parseIpfsHash(campaign?.campaign_metadata?.logo, config.IPFS_GATEWAY)}
						alt="campaign_logo"
					/>
				</Box>
			</Box>

			<CardContent sx={{ pt: 0, mt: -12 }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography variant="subtitle1">{campaign?.campaign_metadata?.name}</Typography>
					<Typography variant="body2">By {campaign?.organization?.organization_metadata?.name}</Typography>

					<LinearProgress
						variant="determinate"
						value={getCampaignProgress(campaign)}
						sx={{
							mt: 2.3,
							pt: 1.2,
							width: '90%',
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
