import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField, Autocomplete as MUIAutocomplete } from '@mui/material'

interface ComponentProps {
	options: any
	name: string
	control: any
	label: string
	required?: boolean
}

export const Autocomplete = ({ name, control, label, options, required }: ComponentProps) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { ref, ...field }, fieldState: { error } }) => (
				<MUIAutocomplete
					{...field}
					freeSolo
					disableClearable
					options={options}
					fullWidth
					onChange={(event, value) => field.onChange(value)}
					renderInput={(params) => (
						<TextField
							required={required}
							error={!!error}
							helperText={error?.message}
							fullWidth
							name={name}
							onChange={field.onChange}
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
