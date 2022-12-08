import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Inbox } from '@mui/icons-material'
import {
	Box,
	Button,
	FormControl,
	InputAdornment,
	InputLabel,
	MenuItem,
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
import moment from 'moment'
import { useNetworkContext } from 'providers/network/modules/context'
import { useTranslation } from 'react-i18next'
import { CREATE_PROPOSAL_TYPE_TITLES, PROPOSAL_KEYS } from 'src/constants/proposal'
import {
	Organization,
	useOrganizationByIdSubscription,
	useSuccessfulCampaignByOrganisationIdSubscription,
} from 'src/queries'
import { getCurrenciesForSelect } from 'src/utils/forms/currencyUtils'
import * as Yup from 'yup'

import { BaseForm } from 'components/Forms/baseForm'

interface ComponentProps {
	type: number
	name: string
	setName: (name) => void
	description: string
	setDescription: (description) => void
	startDate: Date
	setStartDate: (date) => void
	endDate: Date
	setEndDate: (date) => void
	amount: number
	setAmount: (number) => void
	campaignId: string
	setCampaignId: (campaignId) => void
	organizationId: string
	currencyId: number
	setCurrencyId: (currencyId) => void
	beneficiaryAddress: string
	setBeneficiaryAddress: (beneficiaryAddress) => void
}

const validationNameSchema = Yup.string().required('* Proposal name is required')
const validationDescriptionSchema = Yup.string().required('* Proposal description is required')
const validationCurrencyIdSchema = Yup.number().required().min(0)
const validationBeneficiaryAddressSchema = Yup.string().required()

const validationEndDateSchema = (minExpiry: number | string) =>
	Yup.date()
		.required()
		.when('startDate', (startDate, schema) => {
			return schema.min(
				moment(startDate ?? new Date())
					.add(minExpiry ?? 0, 'seconds')
					.toDate(),
			)
		})

export function getValidationSchema(minExpiry: number | string) {
	return Yup.object().shape({
		name: Yup.string().required(),
		description: Yup.string().required(),
		startDate: Yup.date().required(),
		endDate: validationEndDateSchema(minExpiry),
	})
}

export function getValidationSchemaWithdrawal(minExpiry: number | string) {
	return Yup.object().shape({
		name: Yup.string().required(),
		description: Yup.string().required(),
		startDate: Yup.date().required(),
		endDate: validationEndDateSchema(minExpiry),
		campaignId: Yup.string().required(),
		amount: Yup.number().required(),
	})
}

export function getDescriptionValidationSchemaSpending(minExpiry: number | string) {
	return Yup.object().shape({
		name: Yup.string().required(),
		description: Yup.string().required(),
		startDate: Yup.date().required(),
		endDate: validationEndDateSchema(minExpiry),
		amount: Yup.number().required(),
		beneficiaryAddress: Yup.string().required(),
	})
}

export function Description({
	type,
	name,
	setName,
	description,
	setDescription,
	startDate,
	setStartDate,
	endDate,
	setEndDate,
	amount,
	setAmount,
	campaignId,
	setCampaignId,
	organizationId,
	currencyId,
	setCurrencyId,
	beneficiaryAddress,
	setBeneficiaryAddress,
}: ComponentProps) {
	const { selectedApiProvider } = useNetworkContext()
	const [errorState, setErrorState] = useState<string>()
	const { data } = useSuccessfulCampaignByOrganisationIdSubscription({ variables: { orgId: organizationId } })
	const { data: organizationData } = useOrganizationByIdSubscription({ variables: { orgId: organizationId } })
	const [organization, setOrganization] = useState<Organization>(null)
	const isWithdrawal = useMemo(() => type === PROPOSAL_KEYS.Withdrawal, [type])
	const isSpending = useMemo(() => type === PROPOSAL_KEYS.Spending, [type])
	const config = useConfig()
	const [currencies, setCurrencies] = useState([])
	const { t } = useTranslation()

	const handleNameChange = useCallback(
		(event) => {
			if (setName) {
				try {
					validationNameSchema.validateSync(event.target.value)
					setErrorState(null)
				} catch (err) {
					setErrorState(err.message)
				}

				setName(event.target.value)
			}
		},
		[setName, setErrorState],
	)

	const handleDescriptionChange = useCallback(
		(event) => {
			if (setDescription) {
				try {
					validationDescriptionSchema.validateSync(event.target.value)
					setErrorState(null)
				} catch (err) {
					setErrorState(err.message)
				}

				setDescription(event.target.value)
			}
		},
		[setDescription, setErrorState],
	)

	const handleAmountChange = useCallback(
		(event) => {
			const value = event.target.value
			setAmount(value < 0 ? 0 : value)
		},
		[setAmount],
	)

	const handleBeneficiaryAddressChanged = useCallback(
		(event) => {
			if (setBeneficiaryAddress) {
				try {
					validationBeneficiaryAddressSchema.validateSync(event.target.value)
					setErrorState(null)
				} catch (err) {
					setErrorState(err.message)
				}

				setBeneficiaryAddress(event.target.value)
			}
		},
		[setBeneficiaryAddress, setErrorState],
	)

	const handleStartDateChanged = useCallback(
		(event) => {
			if (isNaN(event)) {
				return
			}

			if (setStartDate) {
				setStartDate(event)
			}
		},
		[setStartDate],
	)

	const handleEndDateChanged = useCallback(
		(event) => {
			if (isNaN(event)) {
				return
			}

			if (setEndDate) {
				setEndDate(event)
			}
		},
		[setEndDate],
	)

	const handleCampaignChange = useCallback(
		(event) => {
			const value = event.target.value
			setCampaignId(value)
		},
		[setCampaignId],
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
		[setCurrencyId],
	)

	useEffect(() => {
		setStartDate(new Date())
		setEndDate(moment(new Date()).add(1, 'day').toDate())
	}, [setStartDate, setEndDate])

	useEffect(() => {
		return () => {
			if (startDate) setEndDate(moment(startDate).add(1, 'day').toDate())
		}
	}, [startDate, setEndDate])

	useEffect(() => {
		setCurrencies(getCurrenciesForSelect(selectedApiProvider))
	}, [selectedApiProvider])

	useEffect(() => {
		if (
			!organizationData ||
			!(organizationData.organization instanceof Array) ||
			organizationData.organization.length === 0
		)
			return

		// setOrganization(organizationData.organization[0])
	}, [organizationData])

	// console.log( 'organizationData.organization[0]', organizationData?.organization[0] )

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enLocale}>
			<BaseForm title={CREATE_PROPOSAL_TYPE_TITLES[type]} error={errorState}>
				{isWithdrawal && (
					<>
						<TextField
							fullWidth
							variant="outlined"
							label="Campaign"
							placeholder="Campaign name"
							select
							value={campaignId}
							onChange={handleCampaignChange}
						>
							{data?.campaign?.length === 0 && <MenuItem>No campaign available</MenuItem>}
							{data?.campaign?.map((campaign) => {
								return (
									<MenuItem key={campaign.id} value={campaign.id}>
										{campaign?.name}
									</MenuItem>
								)
							})}
						</TextField>
						<TextField
							fullWidth
							variant="outlined"
							label="Amount"
							type="number"
							InputProps={{
								endAdornment: <InputAdornment position="start">GAME</InputAdornment>,
							}}
							value={amount}
							onChange={handleAmountChange}
						/>
						<Typography variant="h5" textAlign="center">
							What’s the title of your proposal?
						</Typography>
					</>
				)}

				{isSpending && (
					<Stack width={'100%'} gap={4}>
						<Stack display={'flex'} direction={'row'} gap={2}>
							<FormControl sx={{ flex: 1 }}>
								<TextField
									fullWidth
									variant="outlined"
									label="Amount*"
									type="number"
									value={amount}
									// ToDo: We need treasury balance for the Max button
									// InputProps={{
									// 	endAdornment: (
									// 		<Button variant={'outlined'} color={'secondary'}>
									// 			Max
									// 		</Button>
									// 	),
									// }}
									onChange={handleAmountChange}
								/>
							</FormControl>
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
						{organization && (
							<TextField
								disabled={true}
								InputProps={{
									startAdornment: (
										<Stack direction={'row'} flexShrink={0} alignItems={'center'} gap={1}>
											<Inbox />
											{`${organization?.name} Treasury`}
										</Stack>
									),
									endAdornment: <>{organization?.treasury}</>,
								}}
							/>
						)}
						<TextField
							fullWidth
							variant="outlined"
							label={'send to address'}
							value={beneficiaryAddress}
							onChange={handleBeneficiaryAddressChanged}
						/>
						<Typography variant={'subtitle2'}>Add a description to your proposal</Typography>
					</Stack>
				)}

				<TextField
					fullWidth
					onChange={handleNameChange}
					value={name}
					label="Proposal Name"
					variant="outlined"
					error={!!errorState}
				/>
				<TextField
					fullWidth
					multiline
					minRows={4}
					onChange={handleDescriptionChange}
					value={description}
					label="Proposal Description"
					variant="outlined"
					error={!!errorState}
				/>
				<Stack direction="row" spacing={1} justifyContent="space-between" width="100%">
					<DateTimePicker
						label="Start date"
						minDate={new Date()}
						value={startDate}
						onChange={handleStartDateChanged}
						renderInput={(params) => <TextField {...params} />}
						ampm={false}
					/>
					<DateTimePicker
						label="End date"
						minDate={moment(startDate ?? new Date())
							.add(config?.PROPOSAL_MIN_EXPIRY_IN_SECONDS ?? 0, 'seconds')
							.toDate()}
						value={endDate}
						onChange={handleEndDateChanged}
						renderInput={(params) => <TextField {...params} />}
						ampm={false}
					/>
				</Stack>
			</BaseForm>
		</LocalizationProvider>
	)
}
