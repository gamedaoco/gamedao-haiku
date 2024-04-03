import { NavbarMobile } from './NavbarMobile'
import { Close, Menu, MoreVert, Apps as Open } from '@mui/icons-material'
import { AppBar, Box, Toolbar, Button, Stack, MenuItem, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React, { useCallback, useState } from 'react'
import { AccountSelector, FontIcons } from 'src/components'
import Link from 'src/components/Link'

/* eslint-disable @next/next/no-img-element */
// const Logo = () => <img src="/v3/svg/gamedao-color-h-wht.svg" height="32px" alt="GameDAO" />
const Logo = () => <img src="/v3/svg/gamedao-mono-h-wht-scaled.svg" height="16px" />

interface ComponentProps {
	onSidebarOpen: () => void
	sidebarOpen: boolean
	noContainer?: boolean
	hideDApps?: boolean
}

export function HeaderMobile({ onSidebarOpen, sidebarOpen, noContainer, hideDApps }: ComponentProps) {
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
					border: 0,
					zIndex: (theme) => theme.zIndex.drawer + 1,
					boxShadow: 'none',
					background: 'transparent',
				}}
			>
				<Toolbar
					sx={{
						backgroundColor: 'transparent', //`#00000099`,
						// backgroundColor: theme.palette.background.default,
						// borderBottom: `1px solid ${theme.palette.grey[500_32]}`,
						borderBottom: noContainer ? 0 : `1px solid ${theme.palette.grey[500_32]}`,
						justifyContent: 'space-between',
						alignItems: 'center',
						position: 'relative',
						height: '90px',
						zIndex: 1000,
						// mb: '90px',
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
				{/* <Box
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
				</Box> */}
			</AppBar>
			{!hideDApps && <NavbarMobile onClose={handleMenuClose} open={openMenu} />}
		</>
	)
}
