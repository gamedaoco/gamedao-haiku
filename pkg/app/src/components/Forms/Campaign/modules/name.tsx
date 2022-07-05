import { useCallback, useState } from 'react'

import { TextField } from '@mui/material'
import * as Yup from 'yup'

import { BaseForm } from 'components/Forms/baseForm'

interface ComponentProps {
	name: string
	setName: (name) => void
	description: string
	setDescription: (description) => void
}

const validationNameSchema = Yup.string().required('* Campaign Name is required')
const validationDescriptionSchema = Yup.string().required('* Campaign Description is required')

export const validationSchema = Yup.object().shape({
	name: Yup.string().required(),
	description: Yup.string().required(),
})

export function Name({ name, setName, description, setDescription }: ComponentProps) {
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
		<BaseForm title={'What’s the name of your campaign?'} error={errorState}>
			<TextField
				fullWidth
				onChange={handleNameChange}
				value={name}
				label="Campaign Name"
				variant="outlined"
				error={!!errorState}
			/>
			<TextField
				fullWidth
				multiline
				minRows={4}
				onChange={handleDescriptionChange}
				value={description}
				label="Campaign Description"
				variant="outlined"
				error={!!errorState}
			/>
		</BaseForm>
	)
}
