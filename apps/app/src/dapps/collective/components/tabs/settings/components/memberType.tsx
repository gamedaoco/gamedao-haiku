import { useCallback, useEffect, useState } from 'react'

import { People, Person } from '@mui/icons-material'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

import { useNetworkContext } from 'src/providers/network/components/context'
import { toUnit } from 'src/utils/token'
import { RadioItem } from 'components/organisms/forms/components/radioItem'

const validationFeeSchema = Yup.number()
	.min(1, 'notification:warning:min_1_game_fee')
	.max(1000000, 'notification:warning:max_1m_game_fee')
	.required()

interface ComponentProps {
	feeType: string
	feeAmount: number
}

const feeTypes = {
	NoFees: '0',
	Reserve: '1',
	Transfer: '2',
}

export function MemberType({ feeType, feeAmount }: ComponentProps) {
	const [selectedFee, setSelectedFee] = useState<string>()
	const [feeAmountValue, setFeeAmountValue] = useState(feeAmount)
	const { selectedApiProvider } = useNetworkContext()
	const { t } = useTranslation()

	const [feeAmountChangeError, setFeeAmountChangeError] = useState(null)
	const handleFeeAmountChange = useCallback(
		(event) => {
			const value = event.target.value
			try {
				if (setFeeAmountValue) setFeeAmountValue(value < 0 ? 0 : value)
				if (!value) return setFeeAmountChangeError(t('label:required'))
				validationFeeSchema?.validateSync(value)
				setFeeAmountChangeError(null)
			} catch (e) {
				setFeeAmountChangeError(t(e.message))
			}
		},
		[setFeeAmountValue, validationFeeSchema, t],
	)

	useEffect(() => {
		if (feeAmount) {
			setFeeAmountValue(
				+toUnit(
					`${feeAmount}`,
					selectedApiProvider?.systemProperties.tokenDecimals[
						selectedApiProvider?.systemProperties.governanceCurrency
					],
				),
			)
		}
	}, [feeAmount])

	return (
		<>
			<Stack>
				<Typography variant="h5">{t('page:organizations:settings:member_type:title')}</Typography>
				<Typography variant="h5" mt={3} textAlign="center">
					{t('page:organizations:settings:member_type:sub_title')}
				</Typography>
			</Stack>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organizations:settings:member_type:radio_button_no_fee:title')}
				description={t('page:organizations:settings:member_type:radio_button_no_fee:description')}
				value={'0'}
				selectedValue={selectedFee || feeTypes[feeType]}
				onChange={setSelectedFee}
			/>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organizations:settings:member_type:radio_button_reserve_fee:title')}
				description={t('page:organizations:settings:member_type:radio_button_reserve_fee:description')}
				value={'1'}
				selectedValue={selectedFee || feeTypes[feeType]}
				onChange={setSelectedFee}
			/>
			<RadioItem
				icon={<People sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organizations:settings:member_type:radio_button_transfer_fee:title')}
				description={t('page:organizations:settings:member_type:radio_button_transfer_fee:description')}
				value={'2'}
				selectedValue={selectedFee || feeTypes[feeType]}
				onChange={setSelectedFee}
			/>

			{(selectedFee || feeTypes[feeType]) === '1' && (
				<TextField
					fullWidth
					type="number"
					onChange={handleFeeAmountChange}
					value={feeAmountValue}
					label={t('page:organizations:settings:member_type:fee_amount')}
					InputLabelProps={{ shrink: Number.isInteger(+feeAmountValue) }}
					InputProps={{
						endAdornment: <Typography variant="body2">GAME</Typography>,
					}}
					variant="outlined"
					error={!!feeAmountChangeError}
					helperText={feeAmountChangeError}
				/>
			)}
			<Stack spacing={2} sx={{ justifyContent: { xs: 'space-between', sm: 'flex-end' } }} direction="row">
				<Button
					size="large"
					variant="outlined"
					color="primary"
					sx={{ display: 'block', flexGrow: { xs: 1, sm: 0 } }}
					disabled
				>
					{t('page:organizations:settings:member_type:cta_button')}
				</Button>
			</Stack>
		</>
	)
}
