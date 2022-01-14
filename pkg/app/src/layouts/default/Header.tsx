import React from 'react'
import NextLink from 'next/link'

import useSettings from 'src/hooks/useSettings'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

// import AccountSelector from 'src/components/AccountSelector'
import { Icons, ICON_MAPPING } from 'src/components/Icons'

function Main() {
	const { themeMode } = useSettings()

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
						<Icons
							src={themeMode === 'light' ? ICON_MAPPING.logo : ICON_MAPPING.logoWhite}
							alt={'GameDAO'}
							sx={{ height: '45.4px' }}
						/>
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

export default Main
