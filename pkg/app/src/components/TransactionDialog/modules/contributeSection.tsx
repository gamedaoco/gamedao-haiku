import { useCallback } from 'react'

import { Info } from '@mui/icons-material'
import { Divider, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { useBalanceByAddressAndBalanceId } from 'hooks/useBalanceByAddressAndBalanceId'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTranslation } from 'react-i18next'

interface ComponentProps {
	currencyId: number
	deposit: number
	setDeposit: (number) => void
}

export function ContributeSection({ currencyId, deposit, setDeposit }: ComponentProps) {
	const { t } = useTranslation()
	const address = useCurrentAccountAddress()
	const currencyBalance = useBalanceByAddressAndBalanceId(address, currencyId ?? 0)

	const handleDepositChange = useCallback(
		(event) => {
			let value = event.target.value

			if (value < 1) {
				value = 1
			} else if (value > currencyBalance?.free) {
				value = currencyBalance?.free
			}

			setDeposit(value)
		},
		[setDeposit, currencyBalance],
	)

	if (!currencyBalance) {
		return null
	}

	return (
		<Stack spacing={{ xs: 1, sm: 2 }} width="100%">
			<Stack direction="row" justifyContent="space-between" spacing={{ xs: 2, sm: 4 }}>
				<Typography variant="subtitle1">{t('button:ui:transaction:your_balance')}</Typography>
				<Typography variant="subtitle1">{`${currencyBalance?.free} ${currencyBalance?.tokenSymbol}`}</Typography>
			</Stack>
			<Divider variant="dashed" />
			<TextField
				variant="outlined"
				label={t('label:amount')}
				type="number"
				InputProps={{
					endAdornment: <InputAdornment position="start">{currencyBalance?.tokenSymbol}</InputAdornment>,
				}}
				error={deposit > currencyBalance?.free}
				value={deposit}
				onChange={handleDepositChange}
			/>
			<Stack direction="row" alignItems={'center'} spacing={{ xs: 2, sm: 4 }}>
				<Info />
				<Typography variant="caption">{t('page:campaign_details:contribute_to_campaign_help_text')}</Typography>
			</Stack>
		</Stack>
	)
}
