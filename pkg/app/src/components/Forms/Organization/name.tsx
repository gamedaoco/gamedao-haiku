import { BaseForm } from 'components/Forms/baseForm'
import { useCallback, useState } from 'react'
import { TextField } from '@mui/material'
import * as Yup from 'yup'

interface ComponentProps {
	name: string
	setName: (name) => void
}

let validationSchema = Yup.string().required('* Organization Name is required')

export function Name({ name, setName }: ComponentProps) {
	const [errorState, setErrorState] = useState<string>()

	const handleNameChange = useCallback(
		(event) => {
			if (setName) {
				try {
					validationSchema.validateSync(event.target.value)
					setErrorState(null)
				} catch (err) {
					setErrorState(err.message)
				}

				setName(event.target.value)
			}
		},
		[setName, setErrorState],
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
		</BaseForm>
	)
}
