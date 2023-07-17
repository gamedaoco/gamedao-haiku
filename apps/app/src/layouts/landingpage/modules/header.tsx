import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Avatar,
	Button,
	Tooltip,
	MenuItem,
} from '@mui/material'
import { Drawer, Fade } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import Link from 'src/components/Link'
import { features } from 'src/dapps/landingpage/features'

const pages = [
	['Cases', ''],
	['Join Discord', '//discord.gg/rhwtr7p'],
	['Blog', '//blog.gamedao.co'],
	['Contact', 'mailto:hey@gamedao.co'],
]
const settings = ['Profile', 'Account', 'Dashboard', 'Disconnect']

const Logo = () => <img src="/v3/svg/gamedao-mono-h-wht-scaled.svg" height="16px" />

export const Header = () => {
	const router = useRouter()

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

	// const openUrl = useCallback((url: string) => {
	// 	window.open(url, '_blank', 'noopener').focus()
	// }, [])

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}
	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}
	// const handleClickItem = (e) => {
	// 	if ( e[1].substr(0,2) === '//' ) openUrl(e[1])
	// 	else router.push( e[0].toLowerCase().replace(' ', '-') )
	// }

	// useEffect(()=>)

	return (
		<AppBar position="static" color="transparent" elevation={0} sx={{ zIndex: 9000 }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					{/* desktop logo */}
					<MenuItem sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Link href="/">
							<Typography variant="h5" noWrap component="div" sx={{ mr: 2 }}>
								<Logo />
							</Typography>
						</Link>
					</MenuItem>
					{/* mobile logo */}
					<MenuItem sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, p: 1 }}>
						<Link href="/">
							<Typography variant="h6" noWrap component="div" sx={{}}>
								<Logo />
							</Typography>
						</Link>
					</MenuItem>
					{/* mobile nav */}
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="appbar"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>

						<Drawer
							variant="temporary"
							transitionDuration={0}
							elevation={0}
							anchor="top"
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ zIndex: 9001 }}
						>
							<Box
								sx={{
									px: ['1rem', '3rem'],
									py: ['0.25rem', '0.5rem'],
									height: '100vh',
									backgroundColor: 'rgba(0,0,0)',
								}}
							>
								<Box
									sx={{
										flexGrow: 1,
									}}
								>
									<IconButton
										size="large"
										onClick={handleCloseNavMenu}
										color="inherit"
										aria-controls="close"
									>
										<CloseIcon />
									</IconButton>
								</Box>

								<MenuItem key={'GameDAO'} onClick={handleCloseNavMenu}>
									<Link href="/">
										<Typography variant="h4" textAlign="center">
											GameDAO
										</Typography>
									</Link>
								</MenuItem>

								{pages.map((page) => (
									<MenuItem key={page[0]} onClick={() => handleCloseNavMenu()}>
										{page[1].substr(0, 2) === '//' ? (
											<a href={page[1]} target="_blank" rel="noreferrer">
												<Typography variant="h4" textAlign="center">
													{page[0]}
												</Typography>
											</a>
										) : (
											<Link href={page[0].toLowerCase().replace(' ', '-')}>
												<Typography variant="h4" textAlign="center">
													{page[0]}
												</Typography>
											</Link>
										)}
									</MenuItem>
								))}
							</Box>
						</Drawer>
					</Box>
					{/* desktop nav */}
					<Box
						justifyContent="left"
						alignItems="center"
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{pages.map((page) => (
							<MenuItem key={page[0]} onClick={() => handleCloseNavMenu()}>
								{page[1].substr(0, 2) === '//' ? (
									<a href={page[1]} target="_blank" rel="noreferrer">
										<Typography textAlign="center">{page[0]}</Typography>
									</a>
								) : (
									<Link href={page[0].toLowerCase().replace(' ', '-')}>
										<Typography textAlign="center">{page[0]}</Typography>
									</Link>
								)}
							</MenuItem>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Link href="https://zeroio.notion.site/GameDAO-Ambassador-Program-23-a024bddb6be544688914fb9ca04e531e">
							<Button size="small" sx={{ mr: 2 }}>
								Edgerunner
							</Button>
						</Link>
						<Link href="https://dev.gamedao.co">
							<Button size="small" variant="outlined">
								Spy Mode™
							</Button>
						</Link>

						{/*
						<Tooltip title="Enter Beta">
						</Tooltip>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					*/}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
