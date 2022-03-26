import React from 'react'
import { Controller } from 'react-hook-form'
import { FormControlLabel, Checkbox, Typography } from '@mui/material'

export interface FormCheckboxProps {
	name: string
	control: any
	label?: string
	setValue?: any
	required?: boolean
}

export const FormCheckbox = ({ name, control, label, required }: FormCheckboxProps) => {
	return (
		<FormControlLabel
			name={name}
			label={label}
			control={
				<Controller
					control={control}
					name={name}
					defaultValue={false}
					render={({ field: { onChange, value }, fieldState: { error }, formState: { errors } }) => (
						<Checkbox
							color="primary"
							checked={value}
							required={required}
							onChange={(e) => onChange(e.target.checked)}
							{...label}
						/>
					)}
				/>
			}
		/>
	)
}
