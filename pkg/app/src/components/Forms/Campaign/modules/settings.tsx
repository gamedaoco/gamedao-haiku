import React, { useCallback, useEffect, useState } from 'react'

import { InfoRounded } from '@mui/icons-material'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import enLocale from 'date-fns/locale/en-US'
import { useSystemProperties } from 'hooks/useSystemProperties'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { createWarningNotification } from 'src/utils/notificationUtils'
import * as Yup from 'yup'

import { RadioItem } from 'components/Forms/modules/radioItem'

const validationTargetSchema = Yup.number()
	.required()
	.min(1, 'notification:warning:min_1_game_fee')
	.max(1000000, 'notification:warning:max_1m_game_fee')

const validationDepositSchema = Yup.number()
	.required()
	.min(1, 'notification:warning:min_1_game_fee')
	.max(1000000, 'notification:warning:max_1m_game_fee')

const validationEmailSchema = Yup.string().email().required()

const validationEndDateSchema = Yup.date().required().min(moment().add(1, 'day').toDate())

export const validationSchema = Yup.object().shape({
	target: validationTargetSchema,
	deposit: validationDepositSchema,
	email: validationEmailSchema,
	endDate: validationEndDateSchema,
})

interface ComponentProps {
	flowProtocol: number
	setFlowProtocol: (number) => void
	targetAmount: number
	setTargetAmount: (number) => void
	depositAmount: number
	setDepositAmount: (number) => void
	currency: string
	setCurrency: (currency) => void
	usageOfFunds: string
	setUsageOfFunds: (usageOfFunds) => void
	endDate: Date
	setEndDate: (endDate) => void
	governance: number
	setGovernance: (governance) => void
}

const USAGE_OF_FUNDS = [
	{
		key: '0',
		text: 'Video Game',
	},
	{
		key: '1',
		text: 'Mobile Game',
	},
	{
		key: '2',
		text: 'Soundtrack',
	},
	{
		key: '3',
		text: '3D',
	},
	{
		key: '4',
		text: 'Artworks',
	},
	{
		key: '5',
		text: 'DLC',
	},
]

export function Settings({
	flowProtocol,
	setFlowProtocol,
	targetAmount,
	setTargetAmount,
	depositAmount,
	setDepositAmount,
	setUsageOfFunds,
	usageOfFunds,
	endDate,
	setEndDate,
	currency,
	setCurrency,
	governance,
	setGovernance,
}: ComponentProps) {
	const { paymentCurrencies, tokenDecimals, tokenSymbol } = useSystemProperties()
	const { t } = useTranslation()
	const [currencies, setCurrencies] = useState([])

	const handleTargetAmountChange = useCallback(
		(event) => {
			const value = event.target.value
			if (!value) {
				return
			}
			try {
				validationTargetSchema?.validateSync(value)
				if (setTargetAmount) {
					setTargetAmount(value < 0 ? 0 : value)
				}
			} catch (e) {
				createWarningNotification(t(e.message))
			}
		},
		[setTargetAmount, validationTargetSchema, t],
	)

	const handleDepositAmountChange = useCallback(
		(event) => {
			const value = event.target.value
			if (!value) {
				return
			}
			try {
				validationDepositSchema?.validateSync(value)
				if (setDepositAmount) {
					setDepositAmount(value < 0 ? 0 : value)
				}
			} catch (e) {
				createWarningNotification(t(e.message))
			}
		},
		[setDepositAmount, validationDepositSchema, t],
	)

	const handleCurrencyChanged = useCallback(
		(event) => {
			const value = event.target.value
			try {
				if (setCurrency) {
					setCurrency(value)
				}
			} catch (e) {}
		},
		[setCurrency, t],
	)

	const handleUsageOfFundsChanged = useCallback(
		(event) => {
			const value = event.target.value
			try {
				if (setUsageOfFunds) {
					setUsageOfFunds(value)
				}
			} catch (e) {}
		},
		[setUsageOfFunds, t],
	)

	const handleGovernanceChecked = useCallback(
		(event) => {
			const value = event.target.checked
			try {
				console.log(value)
				if (setGovernance) {
					setGovernance(value)
				}
			} catch (e) {}
		},
		[setGovernance, t],
	)

	useEffect(() => {
		setCurrencies(
			[paymentCurrencies].map((currencyIndex) => {
				return {
					key: tokenSymbol[currencyIndex],
					text: tokenSymbol[currencyIndex],
					value: currencyIndex,
				}
			}),
		)
	}, [paymentCurrencies, tokenDecimals, tokenSymbol])

	return (
		<Stack component={Paper} p={{ xs: 3, sm: 6 }} spacing={{ xs: 2, sm: 4 }} gap={2} width="100%" height="100%">
			<Typography variant={'h6'}>Additional Information</Typography>

			<Stack gap={4}>
				<Typography variant={'subtitle2'}>Protocol</Typography>
				<RadioItem
					title={'Grant'}
					description={'Choose when contributors donate only without being rewarded'}
					value={0}
					selectedValue={flowProtocol}
					onChange={setFlowProtocol}
				/>
				<RadioItem
					title={'Prepaid'}
					description={'Choose when contributors can select from rewards options'}
					value={1}
					selectedValue={flowProtocol}
					onChange={setFlowProtocol}
				/>
			</Stack>

			<Stack gap={4}>
				<Typography variant={'subtitle2'}>Funds & Deposit</Typography>
				<Stack display={'flex'} direction={'row'} gap={2}>
					<TextField
						fullWidth
						type="number"
						onChange={handleTargetAmountChange}
						value={targetAmount}
						label="Funding target*"
						InputProps={{
							endAdornment: <Typography variant="body2">GAME</Typography>,
						}}
						variant="outlined"
						sx={{ flex: 1 }}
					/>
					<FormControl sx={{ flex: 1 }}>
						<InputLabel id="currency">Currency*</InputLabel>
						<Select value={currency} onChange={handleCurrencyChanged} labelId="currency" label="Currency*">
							{currencies.map((x) => (
								<MenuItem value={x.key} key={x.key}>
									{t(x.text)}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Stack>
				<Stack display={'flex'} direction={'row'} gap={2}>
					<FormControl sx={{ flex: 1 }}>
						<InputLabel id="usage-of-funds">Usage of funds*</InputLabel>
						<Select
							value={usageOfFunds}
							onChange={handleUsageOfFundsChanged}
							labelId="usage-of-funds"
							label="Usage of funds*"
						>
							{USAGE_OF_FUNDS.map((x) => (
								<MenuItem value={x.key} key={x.key}>
									{t(x.text)}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Stack>
				<TextField
					fullWidth
					type="number"
					onChange={handleDepositAmountChange}
					value={depositAmount}
					label="Deposit*"
					InputProps={{
						endAdornment: <Typography variant="body2">GAME</Typography>,
					}}
					variant="outlined"
					sx={{ flex: 1 }}
				/>

				<FormControlLabel
					sx={{ display: 'block' }}
					control={<Checkbox checked={!!governance} onChange={handleGovernanceChecked} />}
					label="DAO Governance"
				/>

				<Stack display={'flex'} direction={'row'} alignItems={'center'} gap={1}>
					<InfoRounded />
					<Typography variant={'caption'}>
						We return the deposit to the treasury in case the campaign is not successful
					</Typography>
				</Stack>
			</Stack>

			<Stack gap={4}>
				<Typography variant={'subtitle2'}>Date</Typography>
				<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enLocale}>
					<DateTimePicker
						label="End date"
						minDate={moment(new Date()).add(30, 'day').toDate()}
						value={endDate}
						onChange={setEndDate}
						renderInput={(params) => <TextField {...params} />}
						ampm={false}
					/>
				</LocalizationProvider>
			</Stack>
		</Stack>
	)
}
