import React from 'react'
import NextLink from 'next/link'

import useSettings from 'src/hooks/useSettings'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { FontIcons } from 'src/components/Icons/icons'

export function Header() {
	const { themeMode } = useSettings()
	return null
	return (
		<AppBar position="sticky" elevation={0}>
			<Toolbar
				sx={{
					zIndex: '9000',
					backgroundColor: 'background.default',
					width: '100%',
					height: '5rem',
					borderBottom: (theme) => '1px solid ' + theme.palette.grey[500_32],
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2, marginTop: 1 }}>
					<NextLink href="/">
						<FontIcons name={themeMode === 'light' ? 'logo-colored' : 'logo'} />
					</NextLink>
				</Box>
				<Stack
					direction="row"
					justifyContent="end"
					alignItems="right"
					sx={{
						width: '50%',
					}}
				>
					{/*<AccountSelector />*/}
				</Stack>
			</Toolbar>
		</AppBar>
	)
}
