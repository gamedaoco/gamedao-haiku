import React, { Fragment, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useExtensionContext } from 'src/providers/extension/modules/context'

import Link from 'components/Link'
import { AccountSelector } from 'components/AccountSelector/accountSelector'
import Feedback from 'components/Feedback'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
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

import { Button, Typography, MenuItem, ListItemIcon, ListItemText, ListItemButton, useMediaQuery } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'

// eslint-disable-next-line @next/next/no-img-element
// const Logo = () => <img src="/v3/svg/GameDAO-color-h-wht.svg" height="32px" />
const Logo = () => <img src="/v3/svg/GameDAO-mono-h-wht-scaled.svg" height="16px" />
// eslint-disable-next-line @next/next/no-img-element
// const LogoSM = () => <img src="/v3/svg/GameDAO-color.svg" height="32px" />
const LogoSM = () => <img src="/v3/svg/GameDAO-mono-wht.svg" height="32px" />

interface ComponentProps {
	onSidebarOpen: () => void
	sidebarOpen: boolean
	noContainer?: boolean
}

const leftNav = [
	{
		name: 'Organizations', // 'button:navigation:organisations',
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
	// {
	// 	name: 'Campaigns', // button:navigation:campaigns',
	// 	path: '/campaigns',
	// 	icon: <RiVipDiamondLine />,
	// },
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

export function Header({ onSidebarOpen, sidebarOpen, noContainer }: ComponentProps) {
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
					background: 'transparent',
					// backgroundColor: `rgba(0,0,0,0.5)`,
					// backgroundColor: theme.palette.primary,
					borderBottom: noContainer ? 0 : `1px solid ${theme.palette.grey[500_32]}`,
					justifyContent: 'space-between',
					alignItems: 'center',
					height: '90px',
					zIndex: 9000,
					WebkitFilter: 'drop-shadow( 0 5px 10px rgba(0,0,0,1) )',
					filter: 'drop-shadow( 0 5px 10px rgba(0,0,0,1) )',
					backgroundBlendMode: 'multiply',
				}}
			>
				<Stack direction="row" alignItems="center" spacing={2} minWidth="50%">
					<Box>
						<Link href="/">
							<MenuItem sx={{ p: 0, m: 0, mr: 2 }}>
								<Typography sx={{ ml: 1, minWidth: 32 }}>{isLg ? <Logo /> : <LogoSM />}</Typography>
							</MenuItem>
						</Link>
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
					<Link href="https://discord.gg/gamedao">
						<Button>
							<RxDiscordLogo />
							{isLg && <Typography sx={{ pl: 2, mr: 2 }}>Discord</Typography>}
						</Button>
					</Link>
					{connected &&
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
										{isLg && <Typography sx={{ pl: 2, mr: 2 }}>{t(item.name)}</Typography>}
									</Button>
								</Link>
							)
						})}

					{/*
					 */}
					{/* {showFeedback && <Feedback anchorRef={anchorRef?.current} close={closeFeedback} />} */}

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
