import React, { useMemo } from 'react'

import { Box, Button, Card, CardContent, Divider, LinearProgress, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useBlockNumber } from 'hooks/useBlockNumber'
import { useSystemProperties } from 'hooks/useSystemProperties'
import { useTranslation } from 'react-i18next'
import { getCampaignProgress, getTimeFromBlock } from 'src/utils/campaignUtils'
import { abbreviateNumber } from 'src/utils/globalUtils'
import { toUnit } from 'src/utils/token'

import { Image } from 'components/Image/image'

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
		<Card sx={{ p: { sm: '1rem' } }}>
			<Stack direction={{ xs: 'column', sm: 'row' }} alignItems="stretch">
				<Box sx={{ width: { xs: '100%', sm: '50%' } }}>
					<Image
						src={header}
						alt="Campaign header"
						ratio="16/9"
						disabledEffect={true}
						sx={{ borderRadius: Number(theme.shape.borderRadius) * 20 }}
						onError={(event) => (event.target.style.display = 'none')}
					/>
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
							<Typography variant="overline">{t('page:campaign_details:time_left')}</Typography>
							<Typography variant="body1">{duration}</Typography>
						</Stack>
						<Stack direction="column" justifyContent="center" alignItems="center">
							<Typography variant="overline">{t('page:campaign_details:backers')}</Typography>
							<Typography variant="body1">{abbreviateNumber(backers)}</Typography>
						</Stack>
						<Stack direction="column" justifyContent="center" alignItems="center">
							<Typography variant="overline">{t('page:campaign_details:protocol')}</Typography>
							<Typography variant="body1">{protocol}</Typography>
						</Stack>
						<Stack direction="column" justifyContent="center" alignItems="center">
							<Typography variant="overline">{t('page:campaign_details:category')}</Typography>
							<Typography variant="body1">Gaming</Typography>
						</Stack>
					</Stack>

					<Stack direction="row" justifyContent="space-between" pt="2rem">
						<Stack direction="column">
							<Typography variant="overline">{t('page:campaign_details:raised')}</Typography>
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
							<Typography variant="overline">{t('page:campaign_details:target')}</Typography>
							<Typography variant="body1">{`${aim}  ${
								systemProperties?.tokenSymbol?.[currencyId] ?? ''
							}`}</Typography>
						</Stack>
					</Stack>
					<LinearProgress variant="determinate" color="inherit" value={progress} />
					{!isAdmin && duration !== 'Expired' && (
						<Stack mt="2rem" alignItems="center">
							<Button variant="contained" sx={{ width: { xs: '100%', sm: '50%' } }}>
								{t('button:ui:contribute_now')}
							</Button>
						</Stack>
					)}
				</CardContent>
			</Stack>
		</Card>
	)
}
