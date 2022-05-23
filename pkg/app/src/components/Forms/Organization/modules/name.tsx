import { BaseForm } from 'components/Forms/baseForm'
import { useCallback, useState } from 'react'
import { TextField } from '@mui/material'
import * as Yup from 'yup'

interface ComponentProps {
	name: string
	setName: (name) => void
	description: string
	setDescription: (description) => void
}

const validationNameSchema = Yup.string().required('* Organization Name is required')
// Only temporary, the description will be entered later on another page
const validationDescriptionSchema = Yup.string().required('* Organization Description is required')
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
		<BaseForm title={'What’s the name of your organization?'} error={errorState}>
			<TextField
				fullWidth
				onChange={handleNameChange}
				value={name}
				label="Organization Name"
				variant="outlined"
				error={!!errorState}
			/>
			<TextField
				fullWidth
				multiline
				minRows={4}
				onChange={handleDescriptionChange}
				value={description}
				label="Organization Description"
				variant="outlined"
				error={!!errorState}
			/>
		</BaseForm>
	)
}
