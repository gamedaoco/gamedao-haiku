import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

import Link from 'components/Link'
import { AccountSelector } from 'components/AccountSelector/accountSelector'
import { NavLink } from 'components/NavLink/navLink'

import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'

import { Button, Typography, MenuItem, useMediaQuery } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'

const Logo = () => <img src="/svg/g-col-wht-wide.svg" height="16px" />
const LogoSM = () => <img src="/svg/g-col.svg" height="16px" />

interface ComponentProps {
	onSidebarOpen: () => void
	sidebarOpen: boolean
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

export function Header({ onSidebarOpen, sidebarOpen }: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()
	const router = useRouter()
	const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
		defaultMatches: true,
	})

	return (
		<AppBar
			position="static"
			elevation={0}
			style={{
				background: 'transparent',
				boxShadow: 'none',
				// zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
		>
			{/*<AppBar position="fixed" elevation={0} sx={{ borderRadius: 0 }}>*/}
			<Toolbar
				sx={{
					backgroundColor: `#00000099`,
					// backgroundColor: `rgba(0,0,0,0.5)`,
					// backgroundColor: theme.palette.background.default,
					// borderBottom: `1px solid ${theme.palette.grey[500_32]}`,
					justifyContent: 'space-between',
					alignItems: 'center',
					height: '90px',
				}}
			>
				<Stack direction="row" alignItems="center" spacing={2} minWidth="60%">
					<Box>
						<MenuItem sx={{ p: 0, m: 0 }}>
							<Link href="/">
								<Typography sx={{ mx: 2 }}>{isLg ? <Logo /> : <LogoSM />}</Typography>
							</Link>
						</MenuItem>
					</Box>

					{urls.map((navItem) => {
						return (
							<MenuItem key={navItem.name} selected={router.pathname.includes(navItem.path)}>
								<Link href={navItem.path} target={navItem.path.includes('http') ? '_blank' : null}>
									<Typography>{t(navItem.name)}</Typography>
								</Link>
							</MenuItem>
						)
					})}
				</Stack>

				<Stack direction="row" justifyContent="end" alignItems="center">
					<MenuItem>
						<AccountSelector />
					</MenuItem>

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
