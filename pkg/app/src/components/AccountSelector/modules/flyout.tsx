import { useAppContext } from 'providers/app/modules/context'
import { useSession, signIn, signOut } from 'next-auth/react'
import { RxDiscordLogo, RxTwitterLogo, RxExit, RxCircle } from 'react-icons/rx'
import { MdFingerprint, MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { useTheme } from '@mui/material/styles'

import { ListItemIcon, Menu, MenuItem, Stack, Typography, useMediaQuery } from '@mui/material'
import { useExtensionContext } from 'providers/extension/modules/context'
import { useGraphQlContext } from 'providers/graphQl/modules/context'

import Link from 'components/Link'

interface ComponentProps {
	anchorEl: Element
	open: boolean
	handleClose: () => void
	openAccountSelect?: () => void
	openNetworkSelect?: (event) => void
	connectWallet: () => void
}

export function Flyout({
	anchorEl,
	open,
	handleClose,
	openAccountSelect,
	openNetworkSelect,
	connectWallet,
}: ComponentProps) {
	const { disconnectWallet, selectedAccount } = useExtensionContext()
	const { endpoints, selectedEndpoint } = useGraphQlContext()
	const { data: session } = useSession()
	const { user } = useAppContext()

	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), { defaultMatches: true })

	async function handleDisconnect() {
		const disconnect = async () => {
			console.log('disconnect wallet')
			await disconnectWallet()
			console.log('kill session')
			await signOut({ callbackUrl: '/' })
		}
		disconnect()
	}

	return (
		<Menu
			anchorEl={anchorEl}
			id="account-menu"
			open={open}
			onClose={handleClose}
			onClick={handleClose}
			PaperProps={{
				variant: 'glass',
				elevation: 0,
				sx: {
					width: !isMd ? '100%' : '320px',
					px: 3,
					zIndex: 2000,
					overflow: 'visible',
					filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
					mt: { xs: '1.25rem', sm: '1.5 rem' },
					'& .MuiAvatar-root': {
						width: 32,
						height: 32,
						ml: -0.5,
						mr: 1,
					},

					// '&:before': isMd ? {
					// 	content: '""',
					// 	display: 'block',
					// 	position: 'absolute',
					// 	top: 0,
					// 	right: 60,
					// 	width: 10,
					// 	height: 10,
					// 	bgcolor: 'background.paper',
					// 	transform: 'translateY(-50%) rotate(45deg)',
					// 	zIndex: 0,
					// } : {},
				},
			}}
			transformOrigin={{ horizontal: 'center', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
		>
			<Stack p={{ xs: 1, sm: 3 }} spacing={{ xs: 1, sm: 3 }}>
				<Stack sx={{ '&': { p: 0, m: 0 } }} spacing={2}>
					<Link href={'/account'}>
						<MenuItem sx={{ p: 0 }}>
							<ListItemIcon>
								<RxCircle fontSize="inherit" />
							</ListItemIcon>
							<Typography variant="body2">Dashboard</Typography>
						</MenuItem>
					</Link>
					{/*					<Link href={'/organizations'}>
						<MenuItem sx={{ p: 0 }}>
							<ListItemIcon>
								<Folder fontSize="small" />
							</ListItemIcon>
							<Typography variant="body2">Organizations</Typography>
						</MenuItem>
					</Link>
					<Link href={'/account/campaigns'}>
						<MenuItem sx={{ p: 0 }}>
							<ListItemIcon>
								<Topic fontSize="small" />
							</ListItemIcon>
							<Typography variant="body2">Campaigns</Typography>
						</MenuItem>
					</Link>
					<Link href={'/account/collectables'}>
						<MenuItem sx={{ p: 0 }}>
							<ListItemIcon>
								<NotificationsNone fontSize="inherit" />
							</ListItemIcon>
							<Typography variant="body2">Collectables</Typography>
						</MenuItem>
					</Link>*/}

					<Link href={'/account/identity'}>
						<MenuItem sx={{ p: 0 }}>
							<ListItemIcon>
								<MdFingerprint fontSize="inherit" />
							</ListItemIcon>
							<Typography variant="body2">Identity</Typography>
						</MenuItem>
					</Link>

					{!user.discord && (
						<MenuItem sx={{ p: 0 }} onClick={() => signIn('discord')}>
							<ListItemIcon>
								<RxDiscordLogo fontSize="inherit" />
							</ListItemIcon>
							<Typography variant="body2">Connect Discord</Typography>
						</MenuItem>
					)}

					{/*
					{user.uuid && (
						<MenuItem sx={{ p: 0 }} onClick={connectWallet}>
							<ListItemIcon>
								<RxTwitterLogo fontSize="inherit" />
							</ListItemIcon>
							<Typography variant="body2">Authorize Twitter</Typography>
						</MenuItem>
					)}
					 */}

					{!selectedAccount && (
						<MenuItem sx={{ p: 0 }} onClick={connectWallet}>
							<ListItemIcon>
								<MdOutlineAccountBalanceWallet fontSize="inherit" />
							</ListItemIcon>
							<Typography variant="body2">Connect Wallet</Typography>
						</MenuItem>
					)}

					<MenuItem onClick={handleDisconnect} sx={{ p: 0 }}>
						<ListItemIcon>
							<RxExit fontSize="inherit" />
						</ListItemIcon>
						<Typography variant="body2">Disconnect</Typography>
					</MenuItem>
				</Stack>
			</Stack>
		</Menu>
	)
}
