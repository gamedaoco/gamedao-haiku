import React, { Fragment, useState, useRef } from 'react'
import { useRouter } from 'next/router'

import { useTranslation } from 'react-i18next'

import Link from 'components/Link'
// import Image from 'components/Image'
import AccountSelector from 'components/AccountSelector/accountSelector'
import { Flyout } from 'components/AccountSelector/modules/flyout'
import Feedback from 'components/Feedback'

import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'

import {
	PanoramaFishEyeOutlined as Dashboard, // or DashboardOutlined
	CastleOutlined as Folder, // or AccountBalanceOutlined
	Logout,
	MoreVert,
	ExtensionOutlined as NotificationsNone, //or CategoryOultined
	Fingerprint as Identity,
	SettingsOutlined as Settings,
	SportsEsportsOutlined as Topic,
} from '@mui/icons-material'

import {
	RiShieldLine as Guilds,
	RiTreasureMapLine as Quests,
	RiGamepadLine as Campaigns,
	RiAwardLine as Achievements,
	RiVipDiamondLine as Store,
	RiSwordLine,
	RiBookOpenLine,
	RiDropLine,
	RiExchangeFundsLine,
	RiChat1Line,
} from 'react-icons/ri'

import { Button, Typography, MenuItem, ListItemIcon, ListItemText, ListItemButton, useMediaQuery } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'

/* eslint-disable @next/next/no-img-element */
const Logo = () => <img src="/v3/svg/GameDAO-mono-h-wht-scaled.svg" height="16px" alt="GameDAO" />
/* eslint-disable @next/next/no-img-element */
const LogoSM = () => <img src="/v3/svg/GameDAO-mono-wht.svg" height="16px" alt="GameDAO" />

interface ComponentProps {
	onSidebarOpen: () => void
	sidebarOpen: boolean
}

const leftNav = [
	{
		name: 'Guilds', // 'button:navigation:organisations',
		path: '/organisations',
		icon: <Guilds />,
	},
	// {
	// 	name: 'Quests', //'button:navigation:quests',
	// 	path: '/quests',
	// 	icon: <Quests />,
	// },
	{
		name: 'Campaigns', // button:navigation:campaigns',
		path: '/campaigns',
		icon: <Campaigns />,
	},
	// {
	// 	name: 'Achievements', //'button:navigation:quests',
	// 	path: '/achievements',
	// 	icon: <Achievements/>
	// },
	{
		name: 'Store',
		path: '/store',
		icon: <Store />,
	},
]

const rightNav = [
	{
		name: 'Loot', //'button:navigation:faucet',
		path: 'https://discord.com/channels/273529551483699200/772045307021885452',
		icon: <RiDropLine />,
	},
	{
		name: 'Docs', //'button:navigation:documentation',
		path: 'https://docs.gamedao.co/',
		icon: <RiBookOpenLine />,
	},
]

export function Header({ onSidebarOpen, sidebarOpen }: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()
	const router = useRouter()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
		defaultMatches: true,
	})

	const featureFeedback = false
	const featureAccount = false

	const [showFeedback, setFeedback] = useState(false)
	const [showAccount, setAccount] = useState(false)

	const anchorRef = useRef(null)
	const openFeedback = () => setFeedback(true)
	const closeFeedback = () => setFeedback(false)
	const accountAnchorRef = useRef(null)
	const openAccount = () => setAccount(true)
	const closeAccount = () => setAccount(false)

	return (
		<AppBar
			position="static"
			elevation={0}
			style={{
				background: 'transparent',
				boxShadow: 'none',
				borderRadius: 0,
				// zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
		>
			{/*<AppBar position="fixed" elevation={0} sx={{ borderRadius: 0 }}>*/}
			<Toolbar
				sx={{
					borderTop: `1px solid ${theme.palette.grey[500_32]}`,
					borderBottom: `1px solid ${theme.palette.grey[500_32]}`,
					justifyContent: 'space-between',
					alignItems: 'center',
					// height: '90px',
					// mt:'-10px'
					p: 0,
					m: 0,
				}}
			>
				<Stack direction="row" alignItems="center" spacing={2} minWidth="60%">
					<Box>
						<MenuItem sx={{ p: 0, m: 0, mr: 2 }}>
							<Link href="/">
								<Typography sx={{ ml: 1, minWidth: 32 }}>{isLg ? <Logo /> : <LogoSM />}</Typography>
							</Link>
						</MenuItem>
					</Box>

					{leftNav.map((item) => {
						return (
							<Link
								key={item.name}
								href={item.path}
								target={item.path.includes('http') ? '_blank' : null}
							>
								<MenuItem selected={router.pathname.includes(item.path)}>
									{item.icon && <ListItemIcon sx={{ mx: 0 }}> {item.icon} </ListItemIcon>}
									{<ListItemText>{t(item.name)}</ListItemText>}
								</MenuItem>
							</Link>
						)
					})}
				</Stack>

				<Stack direction="row" justifyContent="end" alignItems="center">
					{rightNav.map((item) => {
						return (
							<Link
								key={item.name}
								href={item.path}
								target={item.path.includes('http') ? '_blank' : null}
							>
								<Button>
									{item.icon && item.icon}
									{isLg && <Typography sx={{ pl: 2, mr: 2 }}>{t(item.name)}</Typography>}
								</Button>
							</Link>
						)
					})}

					{featureFeedback && (
						<Button ref={anchorRef} onClick={openFeedback}>
							<RiChat1Line />
							{isLg && <Typography sx={{ pl: 2, mr: 2 }}>Feedback</Typography>}
						</Button>
					)}
					{showFeedback && <Feedback anchorRef={anchorRef?.current} close={closeFeedback} />}

					{featureAccount && (
						<Button ref={accountAnchorRef} onClick={openAccount}>
							<Dashboard fontSize={'inherit'} />
							{/*isLg && <Typography sx={{ pl: 2, mr: 2 }}></Typography>*/}
						</Button>
					)}
					{showAccount && (
						<Flyout
							anchorEl={accountAnchorRef?.current}
							open={showAccount}
							handleClose={closeAccount}
							openAccountSelect={() => {}}
							openNetworkSelect={() => {}}
						/>
					)}

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
