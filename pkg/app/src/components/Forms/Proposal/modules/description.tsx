import { useCallback, useEffect, useState } from 'react'

import { InputAdornment, MenuItem, Stack, TextField, Typography } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import enLocale from 'date-fns/locale/en-US'
import { useConfig } from 'hooks/useConfig'
import moment from 'moment'
import { useSuccessfulCampaignByOrganisationIdSubscription } from 'src/queries'
import * as Yup from 'yup'

import { BaseForm } from 'components/Forms/baseForm'

interface ComponentProps {
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
	isWithdrawal?: boolean
}

const validationNameSchema = Yup.string().required('* Proposal name is required')
const validationDescriptionSchema = Yup.string().required('* Proposal description is required')

export function getValidationSchema(minExpiry: number | string) {
	return Yup.object().shape({
		name: Yup.string().required(),
		description: Yup.string().required(),
		startDate: Yup.date().required(),
		endDate: Yup.date()
			.required()
			.when('startDate', (startDate, schema) => {
				return schema.min(
					moment(startDate ?? new Date())
						.add(minExpiry ?? 0, 'seconds')
						.toDate(),
				)
			}),
	})
}

export function getValidationSchemaWithdrawal(minExpiry: number | string) {
	return Yup.object().shape({
		name: Yup.string().required(),
		description: Yup.string().required(),
		startDate: Yup.date().required(),
		endDate: Yup.date()
			.required()
			.when('startDate', (startDate, schema) => {
				return schema.min(
					moment(startDate ?? new Date())
						.add(minExpiry ?? 0, 'seconds')
						.toDate(),
				)
			}),
		campaignId: Yup.string().required(),
		amount: Yup.number().required(),
	})
}

export function Description({
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
	isWithdrawal,
}: ComponentProps) {
	const [errorState, setErrorState] = useState<string>()
	const { data } = useSuccessfulCampaignByOrganisationIdSubscription({ variables: { orgId: organizationId } })
	const config = useConfig()

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

	const handleCampaignChange = useCallback(
		(event) => {
			const value = event.target.value
			setCampaignId(value)
		},
		[setCampaignId],
	)
	useEffect(() => {
		setStartDate(new Date())
		setEndDate(moment(new Date()).add(1, 'day').toDate())
	}, [])

	useEffect(() => {
		return () => {
			if (startDate) setEndDate(moment(startDate).add(1, 'day').toDate())
		}
	}, [startDate])

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enLocale}>
			<BaseForm
				title={isWithdrawal ? 'Withdrawal Proposal' : 'What’s the name of your proposal?'}
				error={errorState}
			>
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
										{campaign?.campaign_metadata?.name}
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
							What’s the name of your proposal?
						</Typography>
					</>
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
						onChange={setStartDate}
						renderInput={(params) => <TextField {...params} />}
						ampm={false}
					/>
					<DateTimePicker
						label="End date"
						minDate={moment(startDate ?? new Date())
							.add(config?.PROPOSAL_MIN_EXPIRY_IN_SECONDS ?? 0, 'seconds')
							.toDate()}
						value={endDate}
						onChange={setEndDate}
						renderInput={(params) => <TextField {...params} />}
						ampm={false}
					/>
				</Stack>
			</BaseForm>
		</LocalizationProvider>
	)
}
