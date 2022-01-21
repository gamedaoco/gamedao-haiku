import React from 'react'
import useSettings from 'src/hooks/useSettings'

import { useTheme } from '@mui/material/styles'
import { Divider, Paper } from '@mui/material'
import { FontIcons } from 'src/components/Icons/icons'

export function ThemeSwitcher() {
	const theme = useTheme()
	const { themeMode, onChangeMode } = useSettings()
	return (
		<Paper
			sx={{
				display: 'flex',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				borderRadius: '1rem',
				border: '1px solid ' + theme.palette.grey[500_32],
				backgroundColor: 'transparent',
				margin: 'auto',
				height: '100%',
				p: '1rem',
				'*': { transitionTimingFunction: 'ease-in-out;', transitionDuration: '150ms' },
			}}
		>
			<FontIcons
				name="moon"
				sx={{
					cursor: 'pointer',
					color: theme.palette.text.primary,
				}}
				onClick={(e) => onChangeMode(e)}
			/>
			<Divider orientation="vertical" variant="middle" flexItem />
			<FontIcons
				name="sun"
				sx={{
					cursor: 'pointer',
					color: theme.palette.text.primary,
				}}
				onClick={(e) => onChangeMode(e)}
			/>
		</Paper>
	)
}
