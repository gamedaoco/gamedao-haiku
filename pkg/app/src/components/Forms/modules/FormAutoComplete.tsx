import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Autocomplete } from '@mui/material'

export interface FormAutoCompleteProps {
	options: any
	name: string
	control: any
	label: string
	onChange?: any
	required?: boolean
}

export const FormAutoComplete = ({ name, control, label, options, onChange, required }: FormAutoCompleteProps) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { ref, ...field }, fieldState: { error } }) => (
				<Autocomplete
					{...field}
					freeSolo
					disableClearable
					options={options}
					fullWidth
					// getOptionDisabled={(option) => option.disabled}
					// getOptionLabel={(option) => option.label}
					onChange={(event, value) => field.onChange(value)}
					renderInput={(params) => (
						<TextField
							required={required}
							error={!!error}
							helperText={error?.message}
							fullWidth
							name={name}
							label={label}
							variant="outlined"
							type="search"
							inputRef={ref}
							{...params}
						/>
					)}
				/>
			)}
		/>
	)
}
