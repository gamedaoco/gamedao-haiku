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
import { AccountSelector } from 'src/components/AccountSelector/accountSelector'
import Feedback from 'src/components/Feedback'
import Link from 'src/components/Link'
import { useExtensionContext } from 'src/providers/extension/modules/context'

// eslint-disable-next-line @next/next/no-img-element
const Logo = () => <img src="/v3/svg/gamedao-color-h-wht.svg" height="32px" />
// eslint-disable-next-line @next/next/no-img-element
const LogoSM = () => <img src="/v3/svg/gamedao-color.svg" height="32px" />

interface ComponentProps {
	onSidebarOpen: () => void
	sidebarOpen: boolean
}

const leftNav = [
	{
		name: 'Cases',
		path: '/cases',
		icon: <RiShieldLine />,
	},
	// {
	// 	name: 'Battlepass', //'button:navigation:quests',
	// 	path: '/battlepass',
	// 	icon: <RiSwordLine />,
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

export function Header({ onSidebarOpen, sidebarOpen }: ComponentProps) {
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

	const [showFeedback, setFeedback] = useState(false)
	const anchorRef = useRef(null)
	const openFeedback = () => setFeedback(true)
	const closeFeedback = () => setFeedback(false)

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
					// backgroundColor: `rgba(0,0,0,0.5)`,
					// backgroundColor: theme.palette.primary,
					borderBottom: `1px solid ${theme.palette.grey[500_32]}`,
					justifyContent: 'space-between',
					alignItems: 'center',
					height: '90px',
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
					{w3Enabled &&
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

					{/*					<Button ref={anchorRef} onClick={openFeedback}>
						<RiChat1Line />
						{isLg && <Typography sx={{ pl: 2, mr: 2 }}>Feedback</Typography>}
					</Button>
					{showFeedback && <Feedback anchorRef={anchorRef?.current} close={closeFeedback} />}
*/}
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
