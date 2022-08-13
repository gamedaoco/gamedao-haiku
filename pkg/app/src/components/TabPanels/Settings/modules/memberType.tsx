import { useCallback, useEffect, useState } from 'react'

import { People, Person } from '@mui/icons-material'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

import { useNetworkContext } from 'provider/network/modules/context'
import { createWarningNotification } from 'src/utils/notificationUtils'
import { toUnit } from 'src/utils/token'
import { RadioItem } from 'components/Forms/modules/radioItem'

const validationFeeSchema = Yup.number()
	.min(1, 'notification:warning:min_1_game_fee')
	.max(1000000, 'notification:warning:max_1m_game_fee')

interface ComponentProps {
	feeType: string
	feeAmount: number
}

const feeTypes = {
	NoFees: '0',
	Reserve: '1',
}

export function MemberType({ feeType, feeAmount }: ComponentProps) {
	const [selectedFee, setSelectedFee] = useState<string>()
	const [feeAmountValue, setFeeAmountValue] = useState(feeAmount)
	const { selectedApiProvider } = useNetworkContext()
	const { t } = useTranslation()

	const handleFeeAmountChange = useCallback(
		(event) => {
			const value = event.target.value
			if (!value) {
				return
			}
			try {
				validationFeeSchema?.validateSync(value)
				if (setFeeAmountValue) {
					setFeeAmountValue(value < 0 ? 0 : value)
				}
			} catch (e) {
				createWarningNotification(t(e.message))
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

	console.log(selectedFee)

	return (
		<>
			<Stack>
				<Typography variant="h5">{t('page:organisations:settings:member_type:title')}</Typography>
				<Typography variant="h5" mt={3} textAlign="center">
					{t('page:organisations:settings:member_type:sub_title')}
				</Typography>
			</Stack>
			<RadioItem
				icon={<Person sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organisations:settings:member_type:radio_button_no_fee:title')}
				description={t('page:organisations:settings:member_type:radio_button_no_fee:description')}
				value={'0'}
				selectedValue={selectedFee || feeTypes[feeType]}
				onChange={setSelectedFee}
			/>
			<RadioItem
				icon={<People sx={{ width: '40px', height: '40px' }} />}
				title={t('page:organisations:settings:member_type:radio_button_fee:title')}
				description={t('page:organisations:settings:member_type:radio_button_fee:description')}
				value={'1'}
				selectedValue={selectedFee || feeTypes[feeType]}
				onChange={setSelectedFee}
			/>

			{(selectedFee || feeTypes[feeType]) === '1' && (
				<TextField
					fullWidth
					type="number"
					onChange={handleFeeAmountChange}
					value={feeAmountValue}
					label={t('page:organisations:settings:member_type:fee_amount')}
					InputLabelProps={{ shrink: Number.isInteger(+feeAmountValue) }}
					InputProps={{
						endAdornment: <Typography variant="body2">GAME</Typography>,
					}}
					variant="outlined"
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
					{t('page:organisations:settings:member_type:cta_button')}
				</Button>
			</Stack>
		</>
	)
}
