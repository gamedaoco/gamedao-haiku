import React, { Fragment } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { Button, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import { useTheme } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import { AccountSelector } from 'src/components'

import { NavLink } from 'components/NavLink/navLink'

const Logo = () => <img src="/svg/g-col-wht-wide.svg" height="16px" />

interface ComponentProps {
	onSidebarOpen: () => void
}

// TODO: Extract to features / graphql
const urls = [
	{
		name: 'button:navigation:organisations',
		path: '/organisations',
	},
	{
		name: 'button:navigation:campaigns',
		path: '/campaigns',
	},
	{
		name: 'button:navigation:documentation',
		path: 'https://docs.gamedao.co/',
		external: true,
	},
	{
		name: 'button:navigation:faucet',
		path: 'https://discord.com/channels/273529551483699200/772045307021885452',
		external: true,
	},
]

export function Header({ onSidebarOpen }: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<AppBar position="fixed" elevation={0} sx={{ borderRadius: 0 }}>
			<Toolbar
				sx={{
					backgroundColor:`#00000099`,
					// backgroundColor: `rgba(0,0,0,0.5)`,
					// backgroundColor: theme.palette.background.default,
					// borderBottom: `1px solid ${theme.palette.grey[500_32]}`,
					justifyContent: 'space-between',
					alignItems: 'center',
					height: '90px',
				}}
			>
				<Stack direction="row" alignItems="center" spacing={4} minWidth="60%">
					<Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
						<NavLink href="/">
							<Logo />
						</NavLink>
					</Box>

					{urls.map((navItem) => {
						return (
							<Fragment key={navItem.name}>
								<NavLink href={navItem.path} external={navItem.external}>
									<Typography sx={{ cursor: 'pointer' }}>{t(navItem.name)}</Typography>
								</NavLink>
							</Fragment>
						)
					})}
				</Stack>

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
