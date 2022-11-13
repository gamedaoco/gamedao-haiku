import React, { Fragment, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import Link from 'components/Link'

import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import {
	RiShieldLine, // trust
	RiHeart3Line, // rep
	RiVipCrownLine, // xp
	RiSwordLine, //
	RiAwardLine,
	RiTicketLine, // battlepass
	RiVipDiamondLine, // battlepass
	RiTreasureMapLine, // quests
	RiTrophyLine, // achievements
	RiBookOpenLine, // docs
	RiDropLine, // faucet
	RiExchangeFundsLine, // campaigns
	RiChat1Line, // feedback
	RiCopperCoinLine, // ZERO
	RiCopperDiamondLine, // GAME
	RiMoneyDollarCircleLine, // USD
	RiCheckboxBlankCircleLine as Dashboard,
	RiFingerprintLine as Identity,
	RiGamepadLine as Campaigns,
} from 'react-icons/ri'
import {
	// RiShieldLine as Guilds,
	// RiTreasureMapLine as Quests,
	// RiGamepadLine as Campaigns,
	// RiAwardLine as Achievements,
	RiVipDiamondLine as Store,
} from 'react-icons/ri'
import {
	CastleOutlined as Folder, // or AccountBalanceOutlined
	Logout,
	MoreVert,
	ExtensionOutlined as NotificationsNone, //or CategoryOultined
	SettingsOutlined as Settings,
	SportsEsportsOutlined as Topic,
} from '@mui/icons-material'

import { Button, Typography, MenuItem, ListItemIcon, ListItemText, ListItemButton, useMediaQuery } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'

interface ComponentProps {
	onSidebarOpen: () => void
	sidebarOpen: boolean
}

const lerp = (start, end) => Math.round(Math.max(start, end) - Math.min(start, end) / 2)

const left = [
	{
		name: 'Guilds', // 'button:navigation:organisations',
		path: '/organisations',
		icon: <RiShieldLine />,
	},
	{
		name: 'Quests', //'button:navigation:quests',
		path: '/quests',
		icon: <RiTreasureMapLine />,
	},
	/*	{
		name: 'Achievements', //'button:navigation:quests',
		path: '/achievements',
		icon: <RiTrophyLine />,
	},*/
	{
		name: 'Campaigns', // button:navigation:campaigns',
		path: '/campaigns',
		icon: <Campaigns />,
	},
	{
		name: 'Store',
		path: '/store',
		icon: <Store />,
	},
]

const fn = [
	{
		name: 'Feedback', //'button:navigation:faucet',
		path: '/service/feedback',
		icon: <RiChat1Line />,
		color: '#ffffff',
	},
	{
		name: 'Dashboard', //'button:navigation:faucet',
		path: '/account/overview',
		icon: <Dashboard />,
		color: '#ffffff',
	},
]

const mid = [
	{
		name: '9000', //'button:navigation:faucet',
		path: '/account/achievements',
		icon: <RiVipCrownLine />,
		color: '#ff00ff',
	},
	{
		name: '1337', //'button:navigation:documentation',
		path: '/account/achievements',
		icon: <RiHeart3Line />,
		color: '#ff00ff',
	},
	{
		name: '42', //'button:navigation:documentation',
		path: '/account/achievements',
		icon: <RiShieldLine />,
		color: '#ff00ff',
	},
]

const right = [
	{
		icon: <RiCopperCoinLine />,
		name: '1337', //'button:navigation:faucet',
		path: '/account/balances',
	},
	{
		icon: <RiCopperDiamondLine />,
		name: '9000', //'button:navigation:documentation',
		path: '/account/balances',
	},
	{
		icon: <RiMoneyDollarCircleLine />,
		name: '42.42', //'button:navigation:documentation',
		path: '/account/balances',
	},
]

const Items = ({ items }) => {
	return items.map((item) => (
		<Box>
			<Link key={item.name} href={item.path} target={item.path.includes('http') ? '_blank' : null}>
				<Button>
					<Typography
						pr={0.5}
						fontSize="10px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						sx={{ color: item.color || 'inherit' }}
					>
						{item.icon}
					</Typography>
					<Typography
						fontSize="10px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						sx={{ color: item.color || 'inherit' }}
					>
						{item.name}
					</Typography>
				</Button>
			</Link>
		</Box>
	))
}

export function TopBar({ onSidebarOpen, sidebarOpen }: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()
	const router = useRouter()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), { defaultMatches: true })
	const isLg = useMediaQuery(theme.breakpoints.up('lg'), { defaultMatches: true })

	return (
		<AppBar
			position="sticky"
			style={{ background: '#000', borderRadius: 0, p: 0, m: 0, boxShadow: '0px 5px 15px #00000099' }}
		>
			<Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', p: 0, m: -2 }}>
				<Stack ml={2} display="flex" direction="row" justifyContent="left" alignItems="center">
					<Items items={left} />
				</Stack>
				<Stack display="flex" direction="row" justifyContent="right" alignItems="center"></Stack>
				<Stack display="flex" direction="row" justifyContent="right" alignItems="center" mr={2}>
					<Items items={mid} />
					<Items items={right} />
					<Items items={fn} />
				</Stack>
			</Toolbar>
		</AppBar>
	)
}
