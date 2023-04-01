import { useMemo } from 'react'

import { Button, LinearProgress, Stack, Typography } from '@mui/material'
import { useBlockNumber } from 'src/hooks/useBlockNumber'
import { useSystemProperties } from 'src/hooks/useSystemProperties'
import { useTranslation } from 'react-i18next'
import { getCampaignProgress, getTimeFromBlock } from 'src/utils/campaignUtils'
import { abbreviateNumber } from 'src/utils/globalUtils'
import { toUnit } from 'src/utils/token'

interface ComponentProps {
	title: string
	organizationName: string
	backers: number
	target: string
	contributed: string
	currencyId: number
	expiry: number
}

export function Content({ title, organizationName, backers, target, contributed, currencyId, expiry }: ComponentProps) {
	const { t } = useTranslation()
	const systemProperties = useSystemProperties()
	const blockNumber = useBlockNumber()
	const progress = useMemo(() => getCampaignProgress(target, contributed), [contributed, target])
	const duration = useMemo(
		() => getTimeFromBlock(blockNumber, expiry, systemProperties?.blockTargetTime),
		[blockNumber, expiry],
	)
	const funded = useMemo(
		() => abbreviateNumber(toUnit(contributed, systemProperties?.tokenDecimals?.[currencyId] ?? 18)),
		[contributed, systemProperties, currencyId],
	)

	return (
		<Stack spacing={3} padding={4} mt={3} width="100%">
			<Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
				<Stack>
					<Typography variant="subtitle1">{title}</Typography>
					<Typography variant="body2">
						{t('label:by_organization', { organizationName: organizationName })}
					</Typography>
				</Stack>
				{duration && (
					<Button variant="outlined" size="small" color="inherit" disabled>
						{duration}
					</Button>
				)}
			</Stack>

			<Stack width="100%" spacing={1}>
				<LinearProgress variant="determinate" color="inherit" value={progress} />

				<Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
					<Stack direction="row" spacing={1}>
						<Typography variant="body2">{t('label:backers')}</Typography>
						<Typography variant="body1">{abbreviateNumber(backers)}</Typography>
					</Stack>

					<Stack direction="row" spacing={1}>
						<Typography variant="body2">{t('label:funded')}</Typography>
						<Typography variant="body1">{`${funded} ${
							systemProperties?.tokenSymbol?.[currencyId] ?? ''
						} (${progress}%)`}</Typography>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	)
}
