import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { AccountSelector, FontIcons } from 'src/components'
import { useTheme } from '@mui/material/styles'
import { NavLink } from 'src/components/NavLink/navLink'

export function Header() {
	const theme = useTheme()

	return (
		<AppBar position="sticky" elevation={0}>
			<Toolbar
				sx={{
					backgroundColor: theme.palette.background.default,
					borderBottom: `1px solid ${theme.palette.grey[500_32]}`,
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2, marginTop: 1 }}>
					<NavLink href="/">
						<FontIcons name={'logo'} sx={{ color: theme.palette.text.primary }} />
					</NavLink>
				</Box>
				<Stack direction="row" justifyContent="end" alignItems="right">
					<AccountSelector />
				</Stack>
			</Toolbar>
		</AppBar>
	)
}
