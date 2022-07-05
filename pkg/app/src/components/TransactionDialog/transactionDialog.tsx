import { useCallback, useEffect, useState } from 'react'

import { Button, Stack, Typography } from '@mui/material'
import type { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import type { RuntimeDispatchInfo } from '@polkadot/types/interfaces'
import type { ISubmittableResult } from '@polkadot/types/types'
import { Balance } from 'hooks/useBalanceByAddress'
import { useBalanceByAddressAndBalanceId } from 'hooks/useBalanceByAddressAndBalanceId'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useSystemProperties } from 'hooks/useSystemProperties'
import { useTransaction } from 'hooks/useTransaction'
import type { PromiseMsg } from 'src/@types/promiseMsg'

import { BaseDialog } from 'components/BaseDialog/baseDialog'

interface ComponentProps {
	open: boolean
	onClose: () => void
	tx: SubmittableExtrinsic
	txMsg: PromiseMsg
	txCallback?: (state: boolean, result: ISubmittableResult) => void
}

// TODO?, Deposit?

export function TransactionDialog({ open, onClose, tx, txMsg, txCallback }: ComponentProps) {
	const [paymentInfo, setPaymentInfo] = useState<RuntimeDispatchInfo>(null)
	const signAndSend = useTransaction()
	const address = useCurrentAccountAddress()
	const systemProperties = useSystemProperties()
	const balance: Balance = useBalanceByAddressAndBalanceId(address, systemProperties?.networkCurrency)

	const handleProceed = useCallback(() => {
		signAndSend(tx, txMsg, txCallback)
		onClose()
	}, [signAndSend, onClose, tx, txMsg, txCallback])

	useEffect(() => {
		if (tx && address) {
			tx.paymentInfo(address).then(setPaymentInfo)
		}
	}, [tx, address])

	if (!tx || !txMsg || !balance) {
		return null
	}

	return (
		<BaseDialog title="Transaction overview" open={open} onClose={onClose}>
			<Stack spacing={{ xs: 3, sm: 5 }} minWidth="30vw">
				<Stack direction="row" justifyContent="space-between" spacing={{ xs: 2, sm: 4 }}>
					<Typography variant="body2">Your current balance</Typography>
					<Typography variant="body1">{`${balance.free} ${balance.tokenSymbol}`}</Typography>
				</Stack>

				<Stack direction="row" justifyContent="space-between" spacing={{ xs: 2, sm: 4 }}>
					<Typography variant="body2">Transaction fee</Typography>
					<Typography variant="body1">{`${paymentInfo?.partialFee?.toHuman()}`}</Typography>
				</Stack>

				<Button variant="contained" onClick={handleProceed}>
					Proceed
				</Button>
			</Stack>
		</BaseDialog>
	)
}
