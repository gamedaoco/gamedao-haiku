import React, { useState } from 'react'
import NavLink from 'next/link'
import { useRouter } from 'next/router'
import useSettings from 'src/hooks/useSettings'

import { styled, useTheme } from '@mui/material/styles'
import {
	Badge,
	Box,
	Link,
	List,
	ListItemButton,
	ListItemIcon,
	ListSubheader,
	Typography,
	useMediaQuery,
} from '@mui/material'

// TODO:
// Fix error on page load!!
// theme switcher
// language switcher
// network selector
// import NetInfo from 'src/components/NetInfo'

interface ComponentProps {
	showNavigation?: boolean
}

const SidebarButton = styled(ListItemButton)<{ active?: string }>(({ theme, active }) => ({
	p: theme.spacing(1),
	m: theme.spacing(1),
	borderRadius: '2rem',
	color: active ? theme.palette.grey[500] : theme.palette.grey[500_48],
	backgroundColor: active ? theme.palette.grey[500_16] : 'transparent',
	'&:hover': {
		color: theme.palette.text.primary,
	},
}))

const NavHeader = styled(ListSubheader)(({ theme }) => ({
	backgroundColor: 'transparent',
	textTransform: 'uppercase',
	color: theme.palette.text.primary,
}))

const NavBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		color: theme.palette.background.default,
		borderRadius: '2rem',
		right: 'initial',
	},
}))

const SidebarNavItem = ({ href, pattern, name, children }) => {
	const { pathname } = useRouter()
	const isMobile = useMediaQuery('(max-width:640px)')
	const override = { fontSize: isMobile ? '2rem' : '3rem' }
	const active = href === pathname.match(pattern) ? 'true' : null

	return (
		<Link component={NavLink} href={href}>
			<SidebarButton active={active} sx={{ mx: 4, py: 0 }}>
				<ListItemIcon>{/*<FontIcon sx={{ ...override }} name={name} />*/}</ListItemIcon>
				<Typography sx={{ fontSize: '1rem' }}>{children}</Typography>
			</SidebarButton>
		</Link>
	)
}

export function Sidebar({ showNavigation }: ComponentProps) {
	const theme = useTheme()
	const { themeMode } = useSettings()
	const { pathname } = useRouter()

	const [counter, updateCounter] = useState({
		cam: 2,
		gov: 2,
		dao: 1,
		tan: 0,
	})

	const isMobile = useMediaQuery('(max-width:640px)')

	return (
		<Box
			sx={{
				position: 'sticky',
				top: 0,
				marginLeft: isMobile ? '-2rem' : 0,
				width: isMobile ? '5rem' : '20rem',
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				flex: 1,
				minHeight: '100%',
				borderRight: '1px solid ' + theme.palette.grey[500_32],
			}}
		>
			{/*TODO: Fix error on Page load */}
			{/*TODO: Remove styles and refactor*/}
			<List
				sx={{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: '1.5rem', justifyContent: 'start' }}
			>
				<SidebarNavItem href="/app" pattern={`/app`} name="dashboard">
					Dashboard
				</SidebarNavItem>
				<SidebarNavItem href="/app/governance" pattern={`/app/governance`} name="voting">
					Governance
					{counter.gov > 0 && (
						<NavBadge sx={{ ml: '0.5rem' }} badgeContent={counter.gov} color={'primary'} variant="dot" />
					)}
				</SidebarNavItem>
				<SidebarNavItem href="/app/campaigns" pattern={`/app/campaigns`} name="campaign">
					Campaigns
					{counter.cam > 0 && (
						<NavBadge sx={{ ml: '0.5rem' }} badgeContent={counter.cam} color={'info'} variant="dot" />
					)}
				</SidebarNavItem>
			</List>
			<Box sx={{ flex: 1 }} />
			{/*



				{false && (
					<Link component={NavLink} href="/app/tangram">
						<SidebarButton active={!!pathname.match(/tangram/gi)} sx={{ mx: 4, py: 0 }}>
							<ListItemIcon>
								<FontIcon sx={{ ...sideBar }} name="tangram" />
							</ListItemIcon>
							<Typography sx={{ fontSize: '1rem' }}>Tangram</Typography>
							{ counter.tangram > 0 && <NavBadge sx={{ ml: '0.5rem'}} badgeContent={ counter.tangram } color={'info'} variant='dot' /> }
						</SidebarButton>
					</Link>
				)}

				<Link component={NavLink} href="/app/wallet">
					<SidebarButton active={!!pathname.match(/wallet/gi)} sx={{ mx: 4, py: 0 }}>
						<ListItemIcon>
							<FontIcon sx={{ ...sideBar }} name="wallet" />
						</ListItemIcon>
						<Typography sx={{ fontSize: '1rem' }}>Wallet</Typography>
					</SidebarButton>
				</Link>

				<List
					sx={{ display: 'flex', flex: 1, flexDirection: 'column', margin: '2.5rem 0' }}
				>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://discord.gg/P7NHWGzJ7r"
						style={{
							color: 'transparent',
						}}
					>
						<SidebarButton sx={{ mx: 4, py: 0 }}>
							<ListItemIcon>
								<FontIcon sx={{ ...sideBar }} name="store" />
							</ListItemIcon>
							<Typography sx={{ fontSize: '1rem' }}>Faucet</Typography>
						</SidebarButton>
					</a>
					<Link href="https://docs.gamedao.co" target="_blank" rel="noreferrer">
						<SidebarButton sx={{ mx: 4, py: 0 }}>
							<ListItemIcon>
								<FontIcon sx={{ ...sideBar }} name="document" />
							</ListItemIcon>
							<Typography sx={{ fontSize: '1rem' }}>Documentation</Typography>
						</SidebarButton>
					</Link>
				</List>

				<Box sx={{ flex: 1 }} />

				{ !isMobile &&
					<Box sx={{ p: '2rem 0' }}>
						<NavHeader>Network Info</NavHeader>
						<Box sx={{ px: 2 }}>
							<NetInfo />
						</Box>
					</Box>
				}

				{ !isMobile &&
					<Box sx={{ display: 'flex', pb: '1rem', alignItems:'center' }}>
						<Box sx={{ flex: 1, px: '1rem' }}>
							<Select value={'en'} sx={{ borderRadius: '1rem' }}>
								<MenuItem value={'en'}>EN</MenuItem>
								<MenuItem disabled value={'de'}>DE</MenuItem>
								<MenuItem disabled value={'jp'}>JP</MenuItem>
								<MenuItem disabled value={'es'}>ES</MenuItem>
							</Select>
						</Box>
						<Box sx={{ flex: 1, px: '1rem' }}>
							<ThemeSwitcher />
						</Box>
					</Box>
				}*/}
		</Box>
	)
}
