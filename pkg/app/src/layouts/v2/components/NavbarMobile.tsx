import React, { Fragment, useCallback } from 'react'

import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import {
	RiShieldLine,
	RiSwordLine,
	RiTreasureMapLine,
	RiVipDiamondLine,
	RiBookOpenLine,
	RiDropLine,
	RiExchangeFundsLine,
	RiAwardLine,
} from 'react-icons/ri'
import { SiDiscord, SiGithub, SiLinkedin, SiTelegram, SiTwitter } from 'react-icons/si'

import { useTheme } from '@mui/material/styles'
import { Close } from '@mui/icons-material'

import {
	Box,
	Button,
	Drawer,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Link as MUILink,
	Stack,
	Typography,
	Toolbar,
	MenuItem,
} from '@mui/material'

import { FontIcons } from 'src/components'
import Link from 'components/Link'

/* eslint-disable @next/next/no-img-element */
const Logo = () => <img src="/v3/svg/GameDAO-color-h-wht.svg" height="32px" alt="GameDAO" />

interface ComponentProps {
	onClose: () => void
	open: boolean
}

// TODO: Extract to features / graphql
const leftNav = [
	{
		name: 'Organizations', // 'button:navigation:organisations',
		path: '/organizations',
		icon: <RiShieldLine />,
	},
	// {
	// 	name: 'Campaigns', // button:navigation:campaigns',
	// 	path: '/campaigns',
	// 	icon: <RiExchangeFundsLine />,
	// },
	{
		name: 'Battlepass', //'button:navigation:quests',
		path: '/battlepass',
		icon: <RiSwordLine />,
	},
	// {
	// 	name: 'Achievements', //'button:navigation:quests',
	// 	path: '/achievements',
	// 	icon: <RiAwardLine/>
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

// const Link = ({ href, children }) => (
// 	<Box>
// 		<MUILink variant="inherit" href={href} target="_blank" underline="none" rel="noreferrer" color="inherit">
// 			{children}
// 		</MUILink>
// 	</Box>
// )

export function NavbarMobile({ onClose, open }: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()
	const { push } = useRouter()

	const connected = useCurrentAccountAddress()

	const handleClick = useCallback(
		(url, external) => {
			if (external) {
				window.open(url, '_blank', 'noopener')
			} else {
				push(url)
			}
		},
		[push],
	)

	return (
		<Drawer
			anchor="right"
			// onClose={onClose}
			open={open}
			// variant="temporary"
			transitionDuration={0}
			hideBackdrop={true}
			sx={{
				'& .MuiPaper-root': {
					width: '100vw',
					bottom: 0,
					height: 'auto',
					backgroundColor: `#000000`, //theme.palette.background.paper,
				},
			}}
		>
			<Toolbar
				sx={{
					// backgroundColor: `#00000099`,
					// backgroundColor: theme.palette.background.default,
					// borderBottom: `1px solid ${theme.palette.grey[500_32]}`,
					justifyContent: 'space-between',
					alignItems: 'center',
					position: 'relative',
					height: '90px',
				}}
			>
				<Box></Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						position: 'absolute',
						transform: 'translateX(-50%)',
						left: '50%',
					}}
				>
					<MenuItem>
						<Link href="/">
							<Typography>
								<Logo />
							</Typography>
						</Link>
					</MenuItem>
				</Box>
				<Button
					onClick={onClose}
					aria-label="Menu"
					sx={{
						color: theme.palette.text.primary,
						borderRadius: 2,
						minWidth: 'auto',
						padding: 1,
					}}
				>
					<Close />
				</Button>
			</Toolbar>

			<Stack p={4} justifyContent="space-between" height="100%">
				<Stack spacing={2}>
					{leftNav.map((item) => {
						return (
							<Fragment key={item.name}>
								<Link href={item.path} target={item.path.includes('http') ? '_blank' : null}>
									<ListItemButton>
										{item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
										<ListItemText>{t(item.name)}</ListItemText>
									</ListItemButton>
								</Link>
							</Fragment>
						)
					})}
					<br />
					<br />
					{connected &&
						rightNav.map((item) => {
							return (
								<Fragment key={item.name}>
									<ListItemButton>
										{item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
										<Link href={item.path} target={item.path.includes('http') ? '_blank' : null}>
											<Typography>{t(item.name)}</Typography>
										</Link>
									</ListItemButton>
								</Fragment>
							)
						})}
				</Stack>

				<Stack alignItems="center" spacing={4}>
					{/*TODO: Should come from graphql and not be called like this + translations */}
					<Box alignItems="center">
						<Typography textAlign="center">Need help?</Typography>
						<Typography pb={2} textAlign="center">
							Read the docs!
						</Typography>
						<Button
							variant="outlined"
							// color="info"
							onClick={() => window.open('https://docs.gamedao.co').focus()}
						>
							Documentation
						</Button>
					</Box>

					{/*					<Stack direction="row" spacing={4}>
						<Link href="https://discord.gg/P7NHWGzJ7r">
							<SiDiscord size="25" />
						</Link>
						<Link href="https://t.me/gamedaoco">
							<SiTelegram size="25" />
						</Link>
						<Link href="https://twitter.com/gamedaoco">
							<SiTwitter size="25" />
						</Link>
						<Link href="https://github.com/gamedaoco">
							<SiGithub size="25" />
						</Link>
						<Link href="https://www.linkedin.com/company/gamedaoco">
							<SiLinkedin size="25" />
						</Link>
					</Stack>*/}
				</Stack>
			</Stack>
		</Drawer>
	)
}
