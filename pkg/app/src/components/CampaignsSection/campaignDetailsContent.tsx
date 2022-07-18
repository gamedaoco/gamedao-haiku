import React, { useMemo } from 'react'

import { Box, Button, Card, CardContent, CardMedia, Divider, LinearProgress, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useBlockNumber } from 'hooks/useBlockNumber'
import { useSystemProperties } from 'hooks/useSystemProperties'
import { useTranslation } from 'react-i18next'
import { getCampaignProgress, getTimeFromBlock } from 'src/utils/campaignUtils'
import { abbreviateNumber } from 'src/utils/globalUtils'
import { parseIpfsHash } from 'src/utils/ipfs'
import { toUnit } from 'src/utils/token'

interface ComponentProps {
	title: string
	header: string
	description: string
	backers: number
	target: string
	contributed: string
	currencyId: number
	expiry: number
	protocol: string
	isAdmin: boolean
}

export function CampaignDetailsContent({
	title,
	header,
	description,
	backers,
	target,
	contributed,
	currencyId,
	expiry,
	protocol,
	isAdmin,
}: ComponentProps) {
	const { t } = useTranslation()
	const theme = useTheme()
	const systemProperties = useSystemProperties()
	const blockNumber = useBlockNumber()
	const progress = useMemo(() => getCampaignProgress(target, contributed), [contributed, target])
	const duration = useMemo(() => getTimeFromBlock(blockNumber, expiry), [blockNumber, expiry]) ?? 'Expired'
	const aim = useMemo(
		() => abbreviateNumber(toUnit(target, systemProperties?.tokenDecimals?.[currencyId] ?? 18)),
		[target, systemProperties, currencyId],
	)
	const funded = useMemo(
		() => abbreviateNumber(toUnit(contributed, systemProperties?.tokenDecimals?.[currencyId] ?? 18)),
		[contributed, systemProperties, currencyId],
	)

	return (
		<Card sx={{ p: { sm: '1rem' }, height: '100%' }}>
			<Stack direction={{ xs: 'column', sm: 'row' }} height="100%" alignItems="stretch">
				<Box height="30vh" sx={{ width: { xs: '100%', sm: '50%' }, height: '100%' }}>
					<CardMedia component="img" src={header} alt="logo" />
				</Box>
				<CardContent sx={{ pt: '0.5rem', width: { xs: '100%', sm: '50%' } }}>
					<Typography variant="h4">{title}</Typography>
					<Typography pt="2rem" variant="body2" color={theme.palette.common.white}>
						{description}
					</Typography>
					<Stack
						direction="row"
						divider={<Divider orientation="vertical" flexItem />}
						pt="2rem"
						justifyContent="space-between"
					>
						<Stack direction="column" justifyContent="center" alignItems="center">
							<Typography variant="overline">{t('campaign_details:time_left')}</Typography>
							<Typography variant="body1">{duration}</Typography>
						</Stack>
						<Stack direction="column" justifyContent="center" alignItems="center">
							<Typography variant="overline">{t('campaign_details:backers')}</Typography>
							<Typography variant="body1">{abbreviateNumber(backers)}</Typography>
						</Stack>
						<Stack direction="column" justifyContent="center" alignItems="center">
							<Typography variant="overline">{t('campaign_details:protocol')}</Typography>
							<Typography variant="body1">{protocol}</Typography>
						</Stack>
						<Stack direction="column" justifyContent="center" alignItems="center">
							<Typography variant="overline">{t('campaign_details:category')}</Typography>
							<Typography variant="body1">Gaming</Typography>
						</Stack>
					</Stack>

					<Stack direction="row" justifyContent="space-between" pt="2rem">
						<Stack direction="column">
							<Typography variant="overline">Raised</Typography>
							<Box>
								<Typography display="inline-block" variant="body1">
									{`${funded} ${systemProperties?.tokenSymbol?.[currencyId] ?? ''}`}
								</Typography>
							</Box>
						</Stack>
						<Stack direction="column" justifyContent="flex-end">
							<Typography variant="body2">{progress ?? 18}%</Typography>
						</Stack>
						<Stack direction="column" alignItems="flex-end">
							<Typography variant="overline">Target</Typography>
							<Typography variant="body1">{`${aim}  ${
								systemProperties?.tokenSymbol?.[currencyId] ?? ''
							}`}</Typography>
						</Stack>
					</Stack>
					<LinearProgress variant="determinate" color="inherit" value={progress} />
					{!isAdmin && (
						<Stack direction="column" mt="2rem">
							<Button variant="contained" sx={{ width: { xs: '100%', sm: '50%' } }}>
								Contribute now
							</Button>
						</Stack>
					)}
				</CardContent>
			</Stack>
		</Card>
	)
}
