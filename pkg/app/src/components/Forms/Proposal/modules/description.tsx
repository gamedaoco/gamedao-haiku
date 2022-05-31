import { useCallback, useState } from 'react'

import { Stack, TextField } from '@mui/material'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
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
}

const validationNameSchema = Yup.string().required('* Proposal name is required')
const validationDescriptionSchema = Yup.string().required('* Proposal description is required')
export const validationSchema = Yup.object().shape({
	name: Yup.string().required(),
	description: Yup.string().required(),
	startDate: Yup.date().required(),
	endDate: Yup.date().required(),
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
}: ComponentProps) {
	const [errorState, setErrorState] = useState<string>()

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

	return (
		<BaseForm title={'What’s the name of your proposal?'} error={errorState}>
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
			<Stack direction="row" spacing={1} justifyContent="space-between">
				<MobileDatePicker
					label="Start date"
					inputFormat="MM/dd/yyyy"
					minDate={new Date()}
					value={startDate}
					onChange={setStartDate}
					renderInput={(params) => <TextField {...params} />}
				/>
				<MobileDatePicker
					label="End date"
					inputFormat="MM/dd/yyyy"
					minDate={new Date()}
					value={endData}
					onChange={setEndDate}
					renderInput={(params) => <TextField {...params} />}
				/>
			</Stack>
		</BaseForm>
	)
}
