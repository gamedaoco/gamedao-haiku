import { Box, CardMedia, LinearProgress, TableCell, TableRow, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React, { useMemo } from 'react'
import { StatusChip } from 'src/components/CampaignCard/modules/statusChip'
import { useBlockNumber } from 'src/hooks/useBlockNumber'
import { useConfig } from 'src/hooks/useConfig'
import { useSystemProperties } from 'src/hooks/useSystemProperties'
import { Campaign_Contributor } from 'src/queries'
import { getCampaignProgress, getTimeFromBlock } from 'src/utils/campaignUtils'
import { abbreviateNumber } from 'src/utils/globalUtils'
import { parseIpfsHash } from 'src/utils/ipfs'
import { toUnit } from 'src/utils/token'

interface ComponentProps {
	campaignContributor: Campaign_Contributor
}

export function TableItem({ campaignContributor }: ComponentProps) {
	const config = useConfig()
	const theme = useTheme()
	const systemProperties = useSystemProperties()
	const blockNumber = useBlockNumber()
	const currencyId = useMemo(
		() => systemProperties?.tokenSymbol?.indexOf(campaignContributor?.campaign?.token_symbol) ?? 0,
		[systemProperties, campaignContributor?.campaign?.token_symbol],
	)
	const progress = useMemo(
		() => getCampaignProgress(campaignContributor?.campaign?.target, campaignContributor?.contributed),
		[campaignContributor?.campaign?.target, campaignContributor?.contributed],
	)
	const duration = useMemo(
		() => getTimeFromBlock(blockNumber, campaignContributor?.campaign?.expiry, systemProperties?.blockTargetTime),
		[blockNumber, campaignContributor?.campaign?.expiry],
	)
	const target = useMemo(
		() =>
			abbreviateNumber(
				toUnit(
					campaignContributor?.campaign?.target ?? '0',
					systemProperties?.tokenDecimals?.[currencyId < 0 ? 0 : currencyId] ?? 18,
				),
			),
		[campaignContributor?.campaign?.target, systemProperties, currencyId],
	)
	const funded = useMemo(
		() =>
			abbreviateNumber(
				toUnit(
					campaignContributor?.campaign?.campaign_contributors_aggregate?.aggregate?.sum?.contributed ?? '0',
					systemProperties?.tokenDecimals?.[currencyId < 0 ? 0 : currencyId] ?? 18,
				),
			),
		[campaignContributor?.campaign?.campaign_contributors_aggregate?.aggregate?.sum, systemProperties, currencyId],
	)
	const contributed = useMemo(
		() =>
			abbreviateNumber(
				toUnit(
					campaignContributor?.contributed ?? '0',
					systemProperties?.tokenDecimals?.[currencyId < 0 ? 0 : currencyId] ?? 18,
				),
			),
		[campaignContributor?.contributed, systemProperties, currencyId],
	)
	return (
		<TableRow>
			<TableCell>
				<Box display="flex" gap={3} justifyItems="center" alignItems="center">
					<Box>
						<CardMedia
							component="img"
							sx={{
								width: 64,
								height: 64,
								borderRadius: Number(theme.shape.borderRadius) * 8,
							}}
							src={parseIpfsHash(campaignContributor?.campaign?.header, config.IPFS_GATEWAY)}
							alt="campaign_logo"
						/>
					</Box>
					<Box display="flex" flexDirection="column">
						<Typography>{campaignContributor?.campaign?.name}</Typography>
						<Typography variant="body2">{campaignContributor?.campaign?.organization?.name}</Typography>
					</Box>
				</Box>
			</TableCell>
			<TableCell>{campaignContributor?.campaign?.campaign_contributors_aggregate?.aggregate?.count}</TableCell>
			<TableCell>
				{contributed} {systemProperties?.tokenSymbol?.[currencyId] ?? ''}
			</TableCell>
			<TableCell>
				<Box display="flex" flexDirection="column" sx={{ mt: 2 }}>
					<LinearProgress variant="determinate" value={progress} sx={{ maxHeight: 6 }} />

					<Typography variant="body2" color={theme.palette.common.white}>
						{funded}/{target} {systemProperties?.tokenSymbol?.[currencyId] ?? ''}
					</Typography>
				</Box>
			</TableCell>
			<TableCell>{duration ?? 'Expired'}</TableCell>
			<TableCell>
				<StatusChip status={campaignContributor?.campaign?.state} variant="campaignState" />
			</TableCell>
		</TableRow>
	)
}
