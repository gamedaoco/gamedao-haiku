import React from 'react'
import { Controller } from 'react-hook-form'
import { FormControlLabel, Checkbox as MUICheckbox, Typography, FormHelperText } from '@mui/material'

interface ComponentProps {
	name: string
	control: any
	label?: string
	setValue?: any
	required?: boolean
	error?: string
}

export const Checkbox = ({ name, control, label, required, error }: ComponentProps) => {
	return (
		<>
			<FormControlLabel
				name={name}
				control={
					<Controller
						control={control}
						name={name}
						render={({ field: { onChange, value }, fieldState: { error }, formState: { errors } }) => (
							<MUICheckbox
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
