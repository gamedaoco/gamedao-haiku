import React, { useCallback, useState } from 'react'
import Link from 'next/link'

import { Menu, MoreVert } from '@mui/icons-material'
import { Button, Stack, MenuItem } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { useTheme } from '@mui/material/styles'
import { AccountSelector, FontIcons } from 'src/components'

import { NavbarMobile } from 'components/Layouts/default/modules/navbarMobile'
import { NavLink } from 'components/NavLink/navLink'

const Logo = () => <img src="/svg/g-col-wht-wide.svg" height="16px" />

interface ComponentProps {
	onSidebarOpen: () => void
}

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
			<AppBar position="fixed" elevation={0} sx={{ borderRadius: 0 }}>
				<Toolbar
					sx={{
						backgroundColor: `#00000099`,
						// backgroundColor: theme.palette.background.default,
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
						<MenuItem>
							<Link href="/">
								<Logo />
							</Link>
						</MenuItem>
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
				<Box
					sx={{
						display: 'flex',
						backgroundColor: theme.palette.background.default,
						textAlign: 'center',
						p: 2,
						flexGrow: 1,
						width: '100%',
					}}
				>
					<AccountSelector />
				</Box>
			</AppBar>
			<NavbarMobile onClose={handleMenuClose} open={openMenu} />
		</>
	)
}
