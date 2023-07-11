import { Autocomplete as MUIAutocomplete, TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { useAddresses } from 'src/hooks/useAddresses'

interface ComponentProps {
	name: string
	control: any
	label: string
	required?: boolean
}

export const Autocomplete = ({ name, control, label, required }: ComponentProps) => {
	const options = useAddresses()
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
