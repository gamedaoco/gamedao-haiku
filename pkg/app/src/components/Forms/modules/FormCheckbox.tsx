import React from 'react'
import { Controller } from 'react-hook-form'
import { FormControlLabel, Checkbox, Typography, FormHelperText } from '@mui/material'

export interface FormCheckboxProps {
	name: string
	control: any
	label?: string
	setValue?: any
	required?: boolean
	error?: string
}

export const FormCheckbox = ({ name, control, label, required, error }: FormCheckboxProps) => {
	return (
		<>
			<FormControlLabel
				name={name}
				control={
					<Controller
						control={control}
						name={name}
						render={({ field: { onChange, value }, fieldState: { error }, formState: { errors } }) => (
							<Checkbox
								color="primary"
								checked={value}
								required={required}
								onChange={(e) => onChange(e.target.checked)}
							/>
						)}
					/>
				}
				label={<Typography color={error ? 'error' : 'inherit'}>{label}</Typography>}
			/>
			<FormHelperText color="red">{error}</FormHelperText>
		</>
	)
}
