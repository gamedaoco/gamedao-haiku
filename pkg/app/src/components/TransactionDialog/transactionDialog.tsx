import { useCallback, useEffect, useState } from 'react'

import { Box, Button, Card, Divider, Link, Stack, Typography } from '@mui/material'
import type { RuntimeDispatchInfo } from '@polkadot/types/interfaces'
import type { ISubmittableResult } from '@polkadot/types/types'
import { Balance } from 'hooks/useBalanceByAddress'
import { useBalanceByAddressAndBalanceId } from 'hooks/useBalanceByAddressAndBalanceId'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useSystemProperties } from 'hooks/useSystemProperties'
import { useTransaction } from 'hooks/useTransaction'
import { useTranslation } from 'react-i18next'
import { TransactionData } from 'src/@types/transactionData'
import { formatBalanceString } from 'src/utils/balance'

import { BaseDialog } from 'components/BaseDialog/baseDialog'

interface ComponentProps {
	open: boolean
	onClose: () => void
	txData: TransactionData
	children?: React.ReactNode
	txCallback?: (state: boolean, result: ISubmittableResult) => void
}

export function TransactionDialog({ open, onClose, txData, txCallback, children }: ComponentProps) {
	const { t } = useTranslation()
	const [showDescription, setShowDescription] = useState<boolean>(false)
	const [paymentInfo, setPaymentInfo] = useState<RuntimeDispatchInfo>(null)
	const signAndSend = useTransaction()
	const address = useCurrentAccountAddress()
	const systemProperties = useSystemProperties()
	const networkBalance: Balance = useBalanceByAddressAndBalanceId(address, systemProperties?.networkCurrency)
	const depositBalance: Balance = useBalanceByAddressAndBalanceId(address, txData?.currencyId)

	const handleProceed = useCallback(() => {
		signAndSend(txData?.tx, txData?.txMsg, txCallback)
		onClose()
	}, [signAndSend, onClose, txData, txCallback])

	useEffect(() => {
		if (txData && address) {
			txData?.tx.paymentInfo(address).then(setPaymentInfo)
		}
	}, [txData])

	if (!txData || !networkBalance) {
		return null
	}

	return (
		<BaseDialog title={txData.title} open={open} onClose={onClose}>
			<Stack spacing={{ xs: 3, sm: 5 }} width={{ xs: 'auto', lg: '400px' }}>
				{children}

				<Stack spacing={{ xs: 1, sm: 2 }} width="100%">
					<Typography>{t('button:ui:transaction:transaction_fee')}</Typography>
					<Stack direction="row" justifyContent="space-between" spacing={{ xs: 2, sm: 4 }}>
						<Typography variant="body2">{t('button:ui:transaction:your_balance')}</Typography>
						<Typography variant="body1">{`${networkBalance.free} ${networkBalance.tokenSymbol}`}</Typography>
					</Stack>

					<Stack direction="row" justifyContent="space-between" spacing={{ xs: 2, sm: 4 }}>
						<Typography variant="body2">{t('button:ui:transaction:transaction_fee')}</Typography>
						<Typography variant="body1">{`-${formatBalanceString(
							paymentInfo?.partialFee?.toString() ?? '0',
							18,
						)} ${networkBalance.tokenSymbol}`}</Typography>
					</Stack>
					<Divider variant="dashed" />
				</Stack>

				<Stack spacing={{ xs: 1, sm: 2 }}>
					<Stack direction="row" justifyContent="space-between" spacing={{ xs: 2, sm: 4 }}>
						<Typography>{txData.actionSubTitle || ''}</Typography>
						{txData?.description && (
							<Link
								variant="body1"
								component="button"
								underline="always"
								onClick={() => setShowDescription(!showDescription)}
							>
								{t('button:ui:transaction:description_toggle')}
							</Link>
						)}
					</Stack>
					{showDescription && (
						<Card variant="primary">
							<Box padding={2}>
								<Typography variant="body2">{txData.description}</Typography>
							</Box>
						</Card>
					)}
				</Stack>

				{depositBalance && txData.deposit && (
					<Stack spacing={{ xs: 1, sm: 2 }} width="100%">
						<Stack direction="row" justifyContent="space-between" spacing={{ xs: 2, sm: 4 }}>
							<Typography variant="body2">{t('button:ui:transaction:your_balance')}</Typography>
							<Typography variant="body1">{`${depositBalance.free} ${depositBalance.tokenSymbol}`}</Typography>
						</Stack>

						<Stack direction="row" justifyContent="space-between" spacing={{ xs: 2, sm: 4 }}>
							<Typography variant="body2">{txData.actionSubLine || ''}</Typography>

							<Typography variant="body1">{`-${formatBalanceString(
								txData.deposit,
								depositBalance.tokenDecimals,
							)} ${depositBalance.tokenSymbol}`}</Typography>
						</Stack>
						<Divider variant="dashed" />
					</Stack>
				)}

				<Button variant="contained" onClick={handleProceed}>
					{t('button:ui:submit')}
				</Button>

				<Link
					textAlign="center"
					color="textPrimary"
					href="https://discord.com/channels/273529551483699200/772045307021885452"
					rel="noreferrer"
					target="_blank"
					underline="always"
					onClick={() => setShowDescription(!showDescription)}
				>
					{depositBalance
						? t('button:ui:transaction:get_token_a_b', {
								tokenA: networkBalance.tokenSymbol,
								tokenB: depositBalance.tokenSymbol,
						  })
						: t('button:ui:transaction:get_token', { token: networkBalance.tokenSymbol })}
				</Link>
			</Stack>
		</BaseDialog>
	)
}
