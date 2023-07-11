import { InfoRounded } from '@mui/icons-material'
import {
	Box,
	Checkbox,
	FormControl,
	FormLabel,
	FormControlLabel,
	RadioGroup,
	Radio,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	TextField,
	Typography,
	Alert,
} from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import enLocale from 'date-fns/locale/en-US'
import moment from 'moment'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RadioItem } from 'src/components/Forms/modules/radioItem'
import { ContentPanel, ContentTitle, Section, SectionTitle, SectionDescription } from 'src/components/content'
import { useConfig } from 'src/hooks/useConfig'
import { useDisplayValues } from 'src/hooks/useDisplayValues'
import { useNetworkContext } from 'src/providers/network/modules/context'
import * as Yup from 'yup'

//

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
		startDate: Yup.date().required(),
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
	startDate: Date
	setStartDate: (startDate) => void
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
	startDate,
	setStartDate,
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

	const minStartDate = useMemo(
		() =>
			moment(new Date())
				.add(config?.CAMPAIGN_MIN_EXPIRY_IN_SECONDS ?? 0, 'seconds')
				.toDate(),
		[],
	)

	const minEndDate = useMemo(
		() =>
			moment(startDate ?? new Date())
				.add(config?.CAMPAIGN_MIN_EXPIRY_IN_SECONDS ?? 0, 'seconds')
				.toDate(),
		[startDate],
	)

	// TODO: add to graphql
	const maxEndDate = useMemo(
		() =>
			moment(startDate ?? new Date())
				.add(60, 'days')
				.toDate(),
		[startDate],
	)

	const handleTargetAmountChange = useCallback(
		(event) => {
			let value = event.target.value
			try {
				if (setTargetAmount) {
					setTargetAmount(value < 0 ? 0 : value)
				}
				validationTargetSchema?.validateSync(value)
			} catch (e) {}
		},
		[setTargetAmount, validationTargetSchema, t],
	)

	const handleDepositAmountChange = useCallback(
		(event) => {
			let value = event.target.value
			try {
				if (setDepositAmount) {
					setDepositAmount(value < 0 ? 0 : value)
				}
				validationDepositSchema?.validateSync(value)
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

	//
	return (
		<ContentPanel>
			<ContentTitle>Campaign Settings</ContentTitle>

			<Section
				direction={{ xs: 'column', md: 'row' }}
				title="Use of funds"
				description="Select a category how you want to spend the funds raised."
			>
				<FormControl sx={{ flex: 1 }}>
					<InputLabel id="usage-of-funds">Usage of funds*</InputLabel>
					<Select
						value={usageOfFunds}
						onChange={handleUsageOfFundsChanged}
						labelId="usage-of-funds"
						label="Use of funds*"
					>
						{displayValues?.campaignFundingCategories?.map((x) => (
							<MenuItem value={x.value} key={x.key}>
								{t(x.text)}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Section>

			<Section title="Protocol" direction={{ xs: 'column', md: 'row' }}>
				<RadioItem
					title={'Donation'}
					description={'Contributors donate to support your work without any obligations.'}
					value={0}
					selectedValue={flowProtocol}
					onChange={setFlowProtocol}
				/>
				<RadioItem
					title={'Presale'}
					description={'Contributors get rewards for contributing to the campaign.'}
					value={1}
					selectedValue={flowProtocol}
					onChange={setFlowProtocol}
				/>
			</Section>

			<Section title="Funds & Deposit" direction={{ xs: 'column', md: 'row' }}>
				<TextField
					fullWidth
					type="number"
					onChange={handleTargetAmountChange}
					value={targetAmount ?? ''}
					label="Funding target*"
					variant="outlined"
					sx={{ flex: 1 }}
				/>
				<FormControl sx={{ flex: 1 }}>
					<InputLabel id="currency">Currency*</InputLabel>
					<Select value={currencyId} onChange={handleCurrencyChanged} labelId="currency" label="Currency*">
						{currencies.map((x) => (
							<MenuItem value={x.value} key={x.key}>
								{t(x.text)}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<TextField
					fullWidth
					type="number"
					onChange={handleDepositAmountChange}
					value={depositAmount ?? ''}
					label="Deposit*"
					InputProps={{
						endAdornment: <Typography variant="body2">GAME</Typography>,
					}}
					variant="outlined"
					sx={{ flex: 1 }}
				/>
			</Section>

			{/* COMMUNITY GOVERNANCE */}
			{/*
				<FormControlLabel
					sx={{ display: 'block' }}
					control={<Checkbox checked={!!governance} onChange={handleGovernanceChecked} />}
					label="The community votes on spending proposals."
				/>
*/}

			{/*			<Section
				title="Treasury Governance"
				description={`
					Deposited token will be locked by the protocol at least for the full duration of the campaign.
					If a campaign is not successful, the deposit will be automatically returned in full to the organizations treasury.
					If the campaign is successful, the deposit will be returned in full to the organizations treasury upon all funds of the campaign have been spent.
				`}
				>
				<RadioGroup
					aria-labelledby="governance-radio"
					name="governance-radio-group"
					value={governance} onChange={handleGovernanceChecked}
					>
					<FormControlLabel value={true} control={<Radio />} label="Yes, I want the community to decide over our proposals to use our funds." />
					<FormControlLabel value={false} control={<Radio />} label="No, I do not want the community to decide over our spendings." />
				</RadioGroup>
			</Section>*/}

			<Section
				title="Campagin Duration"
				description={`
					Choose from one of the default campaign durations or set a custom duration.
					Campaigns will start immediately or around 1200 UCT of the selected date, depending on blocktime.
				`}
			>
				<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enLocale}>
					<Stack direction="row" spacing={1} justifyContent="space-between" width="100%">
						<MobileDatePicker
							label="Start date"
							minDate={minStartDate}
							value={startDate ?? minStartDate}
							onChange={setStartDate}
							renderInput={(params) => <TextField {...params} />}
							// ampm={false}
						/>
						<MobileDatePicker
							label="End date"
							minDate={minEndDate}
							maxDate={maxEndDate}
							value={endDate ?? minEndDate}
							onChange={setEndDate}
							renderInput={(params) => <TextField {...params} />}
							// ampm={false}
						/>
					</Stack>
				</LocalizationProvider>
			</Section>

			<Section
				title="Terms and Conditions"
				description={`
					GameDAO is a decentralized protocol, but usage of this website and interacting with the community is
					bound to the GameDAO Terms and Conditions maintaining a positive vibe for all.
				`}
			>
				<FormControlLabel
					sx={{ display: 'block' }}
					control={<Checkbox checked={termsConditionAccepted} onChange={handleTermsAndConditionChecked} />}
					label="I Accept the terms & conditions of GameDAO"
				/>
			</Section>
		</ContentPanel>
	)
}
