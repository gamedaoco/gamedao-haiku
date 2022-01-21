import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { FontIcons } from 'src/components/Icons/icons'
import { AccountSelector } from 'src/components/AccountSelector/accountSelector'
import { useTheme } from '@mui/material/styles'
import { Link } from '@mui/material'

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
					<Link href="/">
						<FontIcons name={'logo'} sx={{ color: theme.palette.text.primary }} />
					</Link>
				</Box>
				<Stack direction="row" justifyContent="end" alignItems="right">
					<AccountSelector />
				</Stack>
			</Toolbar>
		</AppBar>
	)
}
