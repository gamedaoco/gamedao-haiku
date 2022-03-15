import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { styled, useTheme } from '@mui/material/styles'
import { Badge, ListItemButton, ListItemIcon, Stack, Typography, useMediaQuery, Drawer } from '@mui/material'
import { ThemeSwitch } from 'src/components/ThemeSwitcher/themeSwitch'
import { FontIcons } from 'src/components/Icons/icons'
import { NavLink } from 'src/components/NavLink/navLink'
import { NetworkSelector } from 'src/components'

// TODO:
// Fix error on page load!!
// theme switcher
// language switcher
// network selector
// import NetInfo from 'src/components/NetInfo'

// TODO: Create custom component with override etc
const SidebarButton = styled(ListItemButton)<{ active?: string }>(({ theme, active }) => ({
	p: theme.spacing(1),
	m: theme.spacing(1),
	borderRadius: '2rem',
	color: theme.palette.text.primary,
	backgroundColor: active === 'true' ? theme.palette.grey[500_16] : 'transparent',
}))

// TODO: Create custom component with override etc
const NavBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		color: theme.palette.background.default,
		borderRadius: '2rem',
		right: 'initial',
	},
}))

const SidebarNavItem = ({ href, name, children }) => {
	const { pathname } = useRouter()
	const isMobile = useMediaQuery('(max-width:640px)')
	const override = { fontSize: isMobile ? '2rem' : '3rem' }
	return (
		<NavLink href={href}>
			<SidebarButton active={(pathname === href).toString()}>
				<Stack direction="row" alignItems="center" px={2}>
					<ListItemIcon>{<FontIcons sx={{ ...override }} name={name} />}</ListItemIcon>
					<Typography>{children}</Typography>
				</Stack>
			</SidebarButton>
		</NavLink>
	)
}

interface ComponentProps {
	showHeader: boolean
	onClose: () => void
	open: boolean
	variant: 'permanent' | 'persistent' | 'temporary' | undefined
}

export function Sidebar({ showHeader, onClose, open, variant }: ComponentProps) {
	const theme = useTheme()

	// TODO: Replace with real values
	const [counter, updateCounter] = useState({
		cam: 2,
		gov: 2,
		dao: 1,
		tan: 0,
	})

	return (
		<Drawer
			anchor="left"
			onClose={onClose}
			open={open}
			variant={variant}
			sx={{
				'& .MuiPaper-root': {
					width: '100%',
					maxWidth: 300,
					top: { xs: 0, md: showHeader ? 64 : 0 },
					bottom: 0,
					height: 'auto',
					backgroundColor: theme.palette.background.default,
					borderRight: `1px solid ${theme.palette.grey[500_32]}`,
				},
			}}
		>
			<Stack flex={1} padding={2}>
				<Stack spacing={2}>
					<SidebarNavItem href="/app" name="dashboard">
						Dashboard
					</SidebarNavItem>
					<SidebarNavItem href="/app/governance" name="voting">
						Governance
						{counter.gov > 0 && (
							<NavBadge
								sx={{ ml: '0.5rem' }}
								badgeContent={counter.gov}
								color={'primary'}
								variant="dot"
							/>
						)}
					</SidebarNavItem>
					<SidebarNavItem href="/app/campaigns" name="campaign">
						Campaigns
						{counter.cam > 0 && (
							<NavBadge sx={{ ml: '0.5rem' }} badgeContent={counter.cam} color={'info'} variant="dot" />
						)}
					</SidebarNavItem>
					<SidebarNavItem href="/app/wallet" name="wallet">
						Wallet
						{counter.cam > 0 && <NavBadge sx={{ ml: '0.5rem' }} />}
					</SidebarNavItem>
				</Stack>

				<Stack direction="row" mt="auto" spacing={2} justifyContent="flex-end">
					<NetworkSelector />
					<ThemeSwitch />
				</Stack>
			</Stack>
		</Drawer>
	)
}
