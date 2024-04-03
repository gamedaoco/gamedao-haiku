import React, { useCallback, useMemo, useState } from 'react'

import { Box, Button, Card, CardContent, Divider, LinearProgress, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useContributeTransaction } from 'hooks/tx/useContributeTransaction'
import { useBlockNumber } from 'src/hooks/useBlockNumber'
import { useConfig } from 'src/hooks/useConfig'
import { useSystemProperties } from 'src/hooks/useSystemProperties'
import { useTranslation } from 'react-i18next'
import { getCampaignProgress, getTimeFromBlock } from 'src/utils/campaignUtils'
import { abbreviateNumber } from 'src/utils/globalUtils'
import { parseIpfsHash } from 'src/utils/ipfs'
import { toUnit } from 'src/utils/token'

import { Image } from 'components/atoms/Image/image'
import { ContributeSection } from 'components/molecules/TransactionDialog/components/contributeSection'
import { TransactionDialog } from 'components/molecules/TransactionDialog/transactionDialog'

interface ComponentProps {
	id: string
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
	hasContributed: boolean
}

export function CampaignDetailsContent({
	id,
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
	hasContributed,
}: ComponentProps) {
	const { t } = useTranslation()
	const theme = useTheme()
	const systemProperties = useSystemProperties()
	const blockNumber = useBlockNumber()
	const progress = useMemo(() => getCampaignProgress(target, contributed), [contributed, target])
	const duration =
		useMemo(
			() => getTimeFromBlock(blockNumber, expiry, systemProperties?.blockTargetTime),
			[blockNumber, expiry],
		) ?? 'Expired'
	const [contributeState, setContributeState] = useState<number>(1)
	const [showTxModalState, setShowTxModalState] = useState<boolean>(false)

	const handleOpenTxModal = useCallback(() => {
		setShowTxModalState(true)
	}, [setShowTxModalState])
	const handleCloseTxModal = useCallback(() => {
		setShowTxModalState(false)
	}, [setShowTxModalState])

	const aim = useMemo(
		() => abbreviateNumber(toUnit(target, systemProperties?.tokenDecimals?.[currencyId] ?? 18)),
		[target, systemProperties, currencyId],
	)
	const funded = useMemo(
		() => abbreviateNumber(toUnit(contributed, systemProperties?.tokenDecimals?.[currencyId] ?? 18)),
		[contributed, systemProperties, currencyId],
	)
	const tx = useContributeTransaction(id, contributeState, currencyId)

	const config = useConfig()
	const campaignHeader = useMemo(
		() => (header?.length ? parseIpfsHash(header, config.IPFS_GATEWAY) : ''),
		[config.IPFS_GATEWAY, header],
	)
	return (
		<>
			<Card sx={{ p: { sm: '1rem' } }}>
				<Stack direction={{ xs: 'column', sm: 'row' }} alignItems="stretch">
					<Box sx={{ width: { xs: '100%', sm: '50%' } }}>
						<Image
							src={campaignHeader}
							alt="Campaign header"
							ratio="16/9"
							disabledEffect={true}
							sx={{ borderRadius: Number(theme.shape.borderRadius) * 20 }}
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
								<Button
									variant="contained"
									sx={{ width: { xs: '100%', sm: '50%' } }}
									onClick={handleOpenTxModal}
								>
									{t(`button:ui:${hasContributed ? 'contribute_again' : 'contribute_now'}`)}
								</Button>
							</Stack>
						)}
					</CardContent>
				</Stack>
			</Card>
			<TransactionDialog open={showTxModalState} onClose={handleCloseTxModal} txData={tx}>
				<ContributeSection currencyId={currencyId} deposit={contributeState} setDeposit={setContributeState} />
			</TransactionDialog>
		</>
	)
}
