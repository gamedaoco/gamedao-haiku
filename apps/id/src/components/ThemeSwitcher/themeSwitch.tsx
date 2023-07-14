import { Divider, IconButton, Paper, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import { FontIcons } from 'src/components/Icons/icons'
import { useSettings } from 'src/hooks/useSettings'

export function ThemeSwitch() {
	const theme = useTheme()
	const { themeMode, changeThemeMode } = useSettings()
	return (
		<Stack component={Paper} direction="row" width="fit-content" padding={1} elevation={5}>
			<IconButton onClick={() => changeThemeMode('dark')}>
				<FontIcons
					name="moon"
					sx={{
						color: themeMode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary,
					}}
				/>
			</IconButton>
			<Divider orientation="vertical" variant="middle" flexItem />
			<IconButton onClick={() => changeThemeMode('light')}>
				<FontIcons
					name="sun"
					sx={{
						color: themeMode === 'light' ? theme.palette.text.primary : theme.palette.text.secondary,
					}}
				/>
			</IconButton>
		</Stack>
	)
}
