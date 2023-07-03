import MenuIcon from '@mui/icons-material/Menu'
import { Button, Typography, MenuItem, ListItemIcon, ListItemText, ListItemButton, useMediaQuery } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import { useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import React, { Fragment, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import {
	RiShieldLine,
	RiSwordLine,
	RiTreasureMapLine,
	RiVipDiamondLine,
	RiBookOpenLine,
	RiDropLine,
	RiAwardLine,
	RiChat1Line,
} from 'react-icons/ri'
import { RxDiscordLogo } from 'react-icons/rx'
import { AccountSelector } from 'src/components/AccountSelector/accountSelector'
import { BaseDialog } from 'src/components/BaseDialog/baseDialog'
import FeedbackButton from 'src/components/Feedback'
import Link from 'src/components/Link'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useExtensionContext } from 'src/providers/extension/modules/context'

// eslint-disable-next-line @next/next/no-img-element
// const Logo = () => <img src="/v3/svg/gamedao-color-h-wht.svg" height="32px" />
const Logo = () => <img src="/v3/svg/gamedao-mono-h-wht-scaled.svg" height="16px" />
// eslint-disable-next-line @next/next/no-img-element
// const LogoSM = () => <img src="/v3/svg/gamedao-color.svg" height="32px" />
const LogoSM = () => <img src="/v3/svg/gamedao-mono-wht.svg" height="32px" />

interface ComponentProps {
	onSidebarOpen: () => void
	sidebarOpen: boolean
	noContainer?: boolean
	hideDApps?: boolean
}

const leftNav = [
	{
		name: 'Organizations', // 'button:navigation:organizations',
		path: '/organizations',
		icon: <RiShieldLine />,
	},
	{
		name: 'Battlepass',
		path: '/battlepass',
		icon: <RiSwordLine />,
	},
	// {
	// 	name: 'Buy', // button:navigation:campaigns',
	// 	path: '/buy',
	// 	icon: <RiVipDiamondLine />,
	// },
	{
		name: 'Campaigns', // button:navigation:campaigns',
		path: '/campaigns',
		icon: <RiVipDiamondLine />,
	},
]

const rightNav = [
	{
		name: 'Loot', //'button:navigation:faucet',
		path: 'https://discord.com/channels/273529551483699200/772045307021885452',
		icon: <RiDropLine />,
	},
	// {
	// 	name: 'Docs', //'button:navigation:documentation',
	// 	path: 'https://docs.gamedao.co/',
	// 	icon: <RiBookOpenLine />,
	// },
]

export function Header({ onSidebarOpen, sidebarOpen, noContainer, hideDApps }: ComponentProps) {
	const { w3Enabled } = useExtensionContext()

	const theme = useTheme()
	const { t } = useTranslation()
	const router = useRouter()

	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
		defaultMatches: true,
	})
	const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
		defaultMatches: true,
	})

	const connected = useCurrentAccountAddress()

	const [showFeedback, setFeedback] = useState(false)
	const anchorRef = useRef(null)
	const openFeedback = () => setFeedback(true)
	const closeFeedback = () => setFeedback(false)

	return (
		<AppBar
			position="static"
			elevation={0}
			style={{
				boxShadow: 'none',
				borderRadius: 0,
				background: 'transparent',
			}}
		>
			{/*<AppBar position="fixed" elevation={0} sx={{ borderRadius: 0 }}>*/}
			<Toolbar
				sx={{
					// background: 'transparent',
					// backgroundColor: `rgba(0,0,0,0.01)`,
					// backgroundColor: theme.palette.primary,
					// backgroundColor: `#00000001`, //theme.palette.background.neutral,
					// backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))`,
					// backdropFilter: `blur(5px)`,
					// WebkitFilter: 'drop-shadow( 0 5px 10px rgba(0,0,0,0.5) )',
					// filter: 'drop-shadow( 0 5px 10px rgba(0,0,0,0.5) )',
					// backgroundBlendMode: 'multiply',
					'::after': {
						content: '""',
						position: 'absolute',
						inset: 0,
						zIndex: -1,
						mask: 'linear-gradient(to top, transparent, black 50%)',
						backdropFilter: 'blur(10px)',
					},
					borderBottom: 0, // noContainer ? 0 : `1px solid ${theme.palette.grey[500_32]}`,
					justifyContent: 'space-between',
					alignItems: 'center',
					height: '90px',
					zIndex: 9000,
				}}
			>
				<Stack direction="row" alignItems="center" spacing={2} minWidth="50%">
					<Box>
						<Link href="/">
							<MenuItem sx={{ p: 0, m: 0, mr: 2 }}>
								{/* <Typography sx={{ ml: 1, minWidth: 32 }}>{isLg ? <Logo /> : <LogoSM />}</Typography> */}
								<Typography sx={{ ml: 1, minWidth: 32 }}>
									<Logo />
								</Typography>
							</MenuItem>
						</Link>
					</Box>

					{!hideDApps &&
						leftNav.map((item) => {
							return (
								<Link
									key={item.name}
									href={item.path}
									target={item.path.includes('http') ? '_blank' : null}
								>
									<MenuItem
										selected={router.pathname.includes(item.path)}
										sx={{
											transitionDuration: '250ms',
											py: '32px',
											overflow: 'hidden',
											'* >, &::after, &::before': { transitionDuration: '250ms' },
											'&::after': {
												transitionDuration: '250ms',
												content: '""',
												position: 'absolute',
												borderRadius: '2px 0px 0px 2px',
												boxShadow: '0 0px 20px 2px #00ffcc99',
												// borderBottom: '2px solid #ffffff33',
												width: '0%',
												left: '50%',
												right: '50%',
												bottom: '-1px',
											},
											'&:hover': {
												'&::after': {
													width: '90%',
													left: '5%',
													right: '5%',
												},
											},
											'&.Mui-selected': {
												'&::after': {
													transitionDuration: '250ms',
													content: '""',
													position: 'absolute',
													// borderColor: '#ff00ff',
													borderRadius: '2px 0px 0px 2px',
													boxShadow: '0 0px 20px 2px #00ffcc',
													// borderBottom: '2px solid #ffffff66',
													width: '90%',
													left: '5%',
													right: '5%',
													bottom: '-1px',
												},
											},
										}}
									>
										{item.icon && <ListItemIcon sx={{ mx: 0 }}> {item.icon} </ListItemIcon>}
										{<ListItemText>{t(item.name)}</ListItemText>}
									</MenuItem>
								</Link>
							)
						})}
				</Stack>

				<Stack direction="row" justifyContent="end" alignItems="center">
					<Link href="#">
						<Button onClick={() => openFeedback()}>
							<RiChat1Line />
							{isXl && <Typography sx={{ pl: 2, mr: 2 }}>Feedback</Typography>}
						</Button>
					</Link>
					<Link href="https://discord.gg/gamedao">
						<Button>
							<RxDiscordLogo />
							{isXl && <Typography sx={{ pl: 2, mr: 2 }}>Discord</Typography>}
						</Button>
					</Link>

					{!connected &&
						w3Enabled &&
						rightNav.map((item) => {
							return (
								<Link
									key={item.name}
									href={item.path}
									target={item.path.includes('http') ? '_blank' : null}
								>
									<Button>
										{item.icon && item.icon}
										{isXl && <Typography sx={{ pl: 2, mr: 2 }}>{t(item.name)}</Typography>}
									</Button>
								</Link>
							)
						})}

					{showFeedback && (
						<BaseDialog open={true} onClose={closeFeedback} title="Send us some Feedback!">
							<Box ref={anchorRef}>
								<FeedbackButton anchorRef={anchorRef?.current} handleClose={closeFeedback} />
							</Box>
						</BaseDialog>
					)}

					{!hideDApps && <AccountSelector />}

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
