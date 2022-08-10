import React, { useCallback, useEffect, useMemo, useState } from 'react'

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
import { useConfig } from 'hooks/useConfig'
import { useDisplayValues } from 'hooks/useDisplayValues'
import moment from 'moment'
import { useNetworkContext } from 'provider/network/modules/context'
import { useTranslation } from 'react-i18next'
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

const getValidationEndDateSchema = (minExpiry) =>
	Yup.date()
		.required()
		.min(
			moment()
				.add(minExpiry ?? 0, 'seconds')
				.toDate(),
		)

const validationTermsConditionSchema = Yup.boolean().isTrue()

const validationCurrencyIdSchema = Yup.number().required().min(0)

const validationUsageOfFundsSchema = Yup.number().required()

export function getValidationSchema(minExpiry: number | string) {
	return Yup.object().shape({
		target: validationTargetSchema,
		deposit: validationDepositSchema,
		endDate: getValidationEndDateSchema(minExpiry),
		termsCondition: validationTermsConditionSchema,
		currencyId: validationCurrencyIdSchema,
		usageOfFunds: validationUsageOfFundsSchema,
	})
}

interface ComponentProps {
	flowProtocol: number
	setFlowProtocol: (number) => void
	targetAmount: number
	setTargetAmount: (number) => void
	depositAmount: number
	setDepositAmount: (number) => void
	currencyId: number
	setCurrencyId: (currencyId) => void
	usageOfFunds: string
	setUsageOfFunds: (usageOfFunds) => void
	endDate: Date
	setEndDate: (endDate) => void
	governance: number
	setGovernance: (governance) => void
	termsConditionAccepted: boolean
	setTermsConditionAccepted: (governance) => void
}

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
	currencyId,
	setCurrencyId,
	governance,
	setGovernance,
	termsConditionAccepted,
	setTermsConditionAccepted,
}: ComponentProps) {
	const { selectedApiProvider } = useNetworkContext()
	const displayValues = useDisplayValues()
	const config = useConfig()
	const { t } = useTranslation()
	const [currencies, setCurrencies] = useState([])
	const minDate = useMemo(
		() =>
			moment(new Date())
				.add(config?.CAMPAIGN_MIN_EXPIRY_IN_SECONDS ?? 0, 'seconds')
				.toDate(),
		[],
	)

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
			} catch (e) {}
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
			} catch (e) {}
		},
		[setDepositAmount, validationDepositSchema, t],
	)

	const handleCurrencyChanged = useCallback(
		(event) => {
			const value = event.target.value
			try {
				validationCurrencyIdSchema?.validateSync(value)
				if (setCurrencyId) {
					setCurrencyId(value)
				}
			} catch (e) {}
		},
		[setCurrencyId, validationCurrencyIdSchema, t],
	)

	const handleUsageOfFundsChanged = useCallback(
		(event) => {
			const value = event.target.value
			try {
				validationUsageOfFundsSchema?.validateSync(value)
				if (setUsageOfFunds) {
					setUsageOfFunds(value)
				}
			} catch (e) {}
		},
		[setUsageOfFunds, validationUsageOfFundsSchema, t],
	)

	const handleGovernanceChecked = useCallback(
		(event) => {
			const value = event.target.checked
			try {
				if (setGovernance) {
					setGovernance(value)
				}
			} catch (e) {}
		},
		[setGovernance, t],
	)

	const handleTermsAndConditionChecked = useCallback(
		(event) => {
			const value = event.target.checked
			try {
				if (setTermsConditionAccepted) {
					setTermsConditionAccepted(value)
				}
			} catch (e) {}
		},
		[setTermsConditionAccepted, t],
	)

	useEffect(() => {
		if (!selectedApiProvider || !selectedApiProvider.systemProperties) return

		const { paymentCurrencies, tokenSymbol } = selectedApiProvider.systemProperties
		const currencies = paymentCurrencies instanceof Array ? paymentCurrencies : [paymentCurrencies]
		setCurrencies(
			currencies.map((currencyIndex) => {
				return {
					key: tokenSymbol[currencyIndex],
					text: tokenSymbol[currencyIndex],
					value: currencyIndex,
				}
			}),
		)
	}, [selectedApiProvider])

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
						variant="outlined"
						sx={{ flex: 1 }}
					/>
					<FormControl sx={{ flex: 1 }}>
						<InputLabel id="currency">Currency*</InputLabel>
						<Select
							value={currencyId}
							onChange={handleCurrencyChanged}
							labelId="currency"
							label="Currency*"
						>
							{currencies.map((x) => (
								<MenuItem value={x.value} key={x.key}>
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
							{displayValues?.campaignFundingCategories?.map((x) => (
								<MenuItem value={x.value} key={x.key}>
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
					label="Handle collected funds by governance voting"
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
						minDate={minDate}
						value={endDate ?? minDate}
						onChange={setEndDate}
						renderInput={(params) => <TextField {...params} />}
						ampm={false}
					/>
				</LocalizationProvider>

				<FormControlLabel
					sx={{ display: 'block' }}
					control={<Checkbox checked={termsConditionAccepted} onChange={handleTermsAndConditionChecked} />}
					label="I Accept the terms & conditions of GameDAO"
				/>
			</Stack>
		</Stack>
	)
}
