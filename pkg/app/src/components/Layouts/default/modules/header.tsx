import React, { Fragment } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { AccountSelector, FontIcons } from 'src/components'
import { useTheme } from '@mui/material/styles'
import { NavLink } from 'components/NavLink/navLink'
import MenuIcon from '@mui/icons-material/Menu'
import { Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface ComponentProps {
	onSidebarOpen: () => void
}

// TODO: Extract to features / graphql
const urls = [
	{
		name: 'button:navigation:organisations',
		path: '/app/organisations',
	},
	{
		name: 'button:navigation:campaigns',
		path: '/app/campaigns',
	},
	{
		name: 'button:navigation:wallet',
		path: '/app/wallet',
	},
]

export function Header({ onSidebarOpen }: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<AppBar position="fixed" elevation={0}>
			<Toolbar
				sx={{
					backgroundColor: theme.palette.background.default,
					borderBottom: `1px solid ${theme.palette.grey[500_32]}`,
					justifyContent: 'space-between',
					alignItems: 'center',
					height: '90px',
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
					<NavLink href="/">
						<FontIcons
							name={'logo'}
							sx={{
								color: theme.palette.text.primary,
								fontSize: '3rem',
								lineHeight: 0,
								display: 'block',
							}}
						/>
					</NavLink>
				</Box>

				<Stack direction="row" alignItems="center" spacing={4} minWidth="60%">
					{urls.map((navItem) => {
						return (
							<Fragment key={navItem.name}>
								<NavLink href={navItem.path}>
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