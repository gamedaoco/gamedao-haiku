import React from 'react'
import useSettings from 'src/hooks/useSettings'

import { useTheme } from '@mui/material/styles'
import { Divider, IconButton, Paper, Stack } from '@mui/material'
import { FontIcons } from 'src/components/Icons/icons'

export function ThemeSwitcher() {
	const theme = useTheme()
	const { themeMode, onChangeMode } = useSettings()
	return (
		<Stack component={Paper} direction="row" width="fit-content" padding={1} elevation={5}>
			<IconButton onClick={(e) => onChangeMode(null)}>
				<FontIcons
					name="moon"
					sx={{
						color: themeMode theme.palette.text.primary,
					}}
				/>
			</IconButton>
			<Divider orientation="vertical" variant="middle" flexItem />
			<IconButton onClick={(e) => onChangeMode(null)}>
				<FontIcons
					name="sun"
					sx={{
						color: theme.palette.text.primary,
					}}
				/>
			</IconButton>
		</Stack>
	)
}
