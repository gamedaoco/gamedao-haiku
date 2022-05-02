import { ReactNode, useCallback } from 'react'
import { Radio, Stack, Typography, useTheme } from '@mui/material'

interface ComponentProps {
	icon: ReactNode
	title: string
	description: string
	value: any
	selectedValue
	onChange: (value) => void
}

export function RadioItem({ icon, title, description, value, selectedValue, onChange }: ComponentProps) {
	const theme = useTheme()

	const handleClick = useCallback(
		(event) => {
			event.stopPropagation()
			if (onChange) {
				onChange(value)
			}
		},
		[onChange, value],
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
			sx={{ cursor: 'pointer' }}
		>
			<Radio checked={selectedValue === value} onChange={onChange} value={value} />
			{icon}
			<Stack spacing={1} width="100%">
				<Typography variant="subtitle2">{title}</Typography>
				<Typography variant="body2">{description}</Typography>
			</Stack>
		</Stack>
	)
}
