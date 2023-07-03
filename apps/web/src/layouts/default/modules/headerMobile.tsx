import { Menu, MoreVert } from '@mui/icons-material'
import Open from '@mui/icons-material/Apps'
import Close from '@mui/icons-material/Close'
import { Button, Stack, MenuItem, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { useTheme } from '@mui/material/styles'
import React, { useCallback, useState } from 'react'
import { AccountSelector, FontIcons } from 'src/components'
import Link from 'src/components/Link'
import { NavLink } from 'src/components/NavLink/navLink'
import { NavbarMobile } from 'src/layouts/default/modules/navbarMobile'

// eslint-disable-next-line @next/next/no-img-element
const Logo = () => <img src="/v3/svg/gamedao-color-h-wht.svg" height="32px" />

interface ComponentProps {
	onSidebarOpen: () => void
	sidebarOpen: boolean
}

export function HeaderMobile({ onSidebarOpen, sidebarOpen }: ComponentProps) {
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
			<AppBar
				position="static"
				elevation={0}
				sx={{
					borderRadius: 0,
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
			>
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
						{sidebarOpen ? <Close /> : <Open />}
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
								<Typography>
									<Logo />
								</Typography>
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
