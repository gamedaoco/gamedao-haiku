import React, { Fragment, useCallback, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { AccountSelector, FontIcons } from 'src/components'
import { useTheme } from '@mui/material/styles'
import { NavLink } from 'src/components/NavLink/navLink'
import MenuIcon from '@mui/icons-material/Menu'
import { Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { MoreVert, Menu } from '@mui/icons-material'
import { NavbarMobile } from 'layouts/default/modules/navbarMobile'

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

export function HeaderMobile({ onSidebarOpen }: ComponentProps) {
	const theme = useTheme()
	const [openMenu, setOpenMenu] = useState<boolean>(false)

	const handleMenuOpen = useCallback(() => {
		setOpenMenu(true)
	}, [setOpenMenu])

	const handleMenuClose = useCallback(() => {
		setOpenMenu(false)
	}, [setOpenMenu])

	return (
		<>
			<AppBar position="fixed" elevation={0}>
				<Toolbar
					sx={{
						backgroundColor: theme.palette.background.default,
						borderBottom: `1px solid ${theme.palette.grey[500_32]}`,
						justifyContent: 'space-between',
						alignItems: 'center',
						position: 'relative',
						height: '90px',
					}}
				>
					<Button
						onClick={() => onSidebarOpen()}
						aria-label="Menu"
						sx={{
							color: theme.palette.text.primary,
							borderRadius: 2,
							minWidth: 'auto',
							padding: 1,
						}}
					>
						<MoreVert />
					</Button>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							position: 'absolute',
							transform: 'translateX(-50%)',
							left: '50%',
						}}
					>
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
					<Button
						onClick={handleMenuOpen}
						aria-label="Menu"
						sx={{
							color: theme.palette.text.primary,
							borderRadius: 2,
							minWidth: 'auto',
							padding: 1,
						}}
					>
						<Menu />
					</Button>
				</Toolbar>
			</AppBar>
			<NavbarMobile onClose={handleMenuClose} open={openMenu} />
		</>
	)
}
