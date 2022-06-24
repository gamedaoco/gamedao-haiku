import { ReactNode, useCallback } from 'react'

import { Radio, Stack, Typography, useTheme } from '@mui/material'

interface ComponentProps {
	icon?: ReactNode
	title: string
	description?: string
	value: any
	selectedValue
	onChange: (value) => void
	disabled?: boolean
}

export function RadioItem({ icon, title, description, value, selectedValue, onChange, disabled }: ComponentProps) {
	const theme = useTheme()

	const handleClick = useCallback(
		(event) => {
			event.stopPropagation()
			if (onChange && !disabled) {
				onChange(value)
			}
		},
		[onChange, value, disabled],
	)

	return (
		<Stack
			width="100%"
			p={{ xs: 1, sm: 4 }}
			spacing={{ xs: 1, sm: 3 }}
			direction="row"
			border={`1px solid ${theme.palette.grey['500']}`}
			borderRadius={5}
			alignItems="center"
			flexWrap={{ sx: 'wrap' }}
			onClick={handleClick}
			sx={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
		>
			<Radio checked={selectedValue === value} value={value} disabled={disabled} />
			{icon}
			<Stack spacing={1} width="100%">
				<Typography variant="subtitle2">{title}</Typography>
				{description && <Typography variant="body2">{description}</Typography>}
			</Stack>
		</Stack>
	)
}
