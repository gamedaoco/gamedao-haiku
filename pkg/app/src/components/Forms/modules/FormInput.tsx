import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, MenuItem } from '@mui/material'

export interface FormInputProps {
	name: string
	control: any
	label: string
	setValue?: any
	options?: any
	selectable?: boolean
	minRows?: number
	placeholder?: string
	required?: boolean
	InputProps?: any
	InputLabelProps?: any
}

export const FormInput = ({
	name,
	control,
	label,
	options,
	selectable,
	minRows,
	placeholder,
	required,
	InputProps,
	InputLabelProps,
}: FormInputProps) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
				<TextField
					helperText={error ? error.message : null}
					size="small"
					error={!!error}
					onChange={onChange}
					value={value}
					fullWidth
					label={label}
					variant="outlined"
					select={selectable}
					multiline={minRows && true}
					minRows={minRows}
					placeholder={placeholder}
					defaultValue={options ? options[0].value : value}
					required={required}
					InputProps={InputProps}
					InputLabelProps={InputLabelProps}
				>
					{options &&
						options.map((item) => (
							<MenuItem key={item.key} value={item.value}>
								{item.text}
							</MenuItem>
						))}
				</TextField>
			)}
		/>
	)
}
