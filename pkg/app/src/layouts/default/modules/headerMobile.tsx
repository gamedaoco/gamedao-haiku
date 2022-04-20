import React, { useCallback, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { AccountSelector, FontIcons } from 'src/components'
import { useTheme } from '@mui/material/styles'
import { NavLink } from 'src/components/NavLink/navLink'
import { Button, Stack } from '@mui/material'
import { Menu, MoreVert } from '@mui/icons-material'
import { NavbarMobile } from 'layouts/default/modules/navbarMobile'

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
					<Stack direction="row" spacing={2} alignItems="center">
						<AccountSelector />
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
					</Stack>
				</Toolbar>
			</AppBar>
			<NavbarMobile onClose={handleMenuClose} open={openMenu} />
		</>
	)
}
