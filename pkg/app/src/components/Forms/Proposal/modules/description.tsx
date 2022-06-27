import { useCallback, useState } from 'react'

import { InputAdornment, MenuItem, Stack, TextField, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { useCampaignByOrganisationIdSubscription } from 'src/queries'
import * as Yup from 'yup'

import { BaseForm } from 'components/Forms/baseForm'

interface ComponentProps {
	name: string
	setName: (name) => void
	description: string
	setDescription: (description) => void
	startDate: Date
	setStartDate: (date) => void
	endData: Date
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
export const validationSchema = Yup.object().shape({
	name: Yup.string().required(),
	description: Yup.string().required(),
	startDate: Yup.date().required(),
	endDate: Yup.date().required(),
})

export const validationSchemaWithdrawal = Yup.object().shape({
	name: Yup.string().required(),
	description: Yup.string().required(),
	startDate: Yup.date().required(),
	endDate: Yup.date().required(),
	campaignId: Yup.string().required(),
	amount: Yup.number().required(),
})

export function Description({
	name,
	setName,
	description,
	setDescription,
	startDate,
	setStartDate,
	endData,
	setEndDate,
	amount,
	setAmount,
	campaignId,
	setCampaignId,
	organizationId,
	isWithdrawal,
}: ComponentProps) {
	const [errorState, setErrorState] = useState<string>()
	const { data } = useCampaignByOrganisationIdSubscription({ variables: { orgId: organizationId } })

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

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
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
					<MobileDatePicker
						label="Start date"
						inputFormat="dd/MM/yyyy"
						minDate={new Date()}
						value={startDate}
						onChange={setStartDate}
						renderInput={(params) => <TextField {...params} />}
					/>
					<MobileDatePicker
						label="End date"
						inputFormat="dd/MM/yyyy"
						minDate={new Date()}
						value={endData}
						onChange={setEndDate}
						renderInput={(params) => <TextField {...params} />}
					/>
				</Stack>
			</BaseForm>
		</LocalizationProvider>
	)
}
