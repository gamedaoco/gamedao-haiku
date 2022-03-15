import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { AccountSelector, FontIcons } from 'src/components'
import { useTheme } from '@mui/material/styles'
import { NavLink } from 'src/components/NavLink/navLink'
import MenuIcon from '@mui/icons-material/Menu'
import { Button } from '@mui/material'

interface ComponentProps {
	onSidebarOpen: () => void
}

export function Header({ onSidebarOpen }: ComponentProps) {
	const theme = useTheme()

	return (
		<AppBar position="fixed" elevation={0}>
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

				<Stack direction="row" justifyContent="end" alignItems="center">
					<AccountSelector />
					<Box sx={{ display: { xs: 'block', md: 'none' } }} marginLeft={4}>
						<Button
							onClick={() => onSidebarOpen()}
							aria-label="Menu"
							variant={'outlined'}
							sx={{
								borderRadius: 2,
								minWidth: 'auto',
								padding: 1,
							}}
						>
							<MenuIcon />
						</Button>
					</Box>
				</Stack>
			</Toolbar>
		</AppBar>
	)
}
