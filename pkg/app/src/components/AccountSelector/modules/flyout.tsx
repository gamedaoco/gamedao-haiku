import {
	PanoramaFishEyeOutlined as Dashboard, // or DashboardOutlined
	CastleOutlined as Folder, // or AccountBalanceOutlined
	Logout,
	MoreVert,
	ExtensionOutlined as NotificationsNone, //or CategoryOultined
	Fingerprint as Settings,
	SportsEsportsOutlined as Topic,
} from '@mui/icons-material'
import { Box, Button, Divider, ListItemIcon, Menu, MenuItem, Stack, Typography } from '@mui/material'
import { useApiProvider } from 'hooks/useApiProvider'
import { useExtensionContext } from 'provider/extension/modules/context'
import { useNetworkContext } from 'provider/network/modules/context'

import { AccountCard } from 'components/AccountCard/accountCard'
import { BalanceCard } from 'components/BalanceCard/balanceCard'
import { NavLink } from 'components/NavLink/navLink'

interface ComponentProps {
	anchorEl: Element
	open: boolean
	handleClose: () => void
	openAccountSelect: () => void
	openNetworkSelect: (event) => void
}

export function Flyout({ anchorEl, open, handleClose, openAccountSelect, openNetworkSelect }: ComponentProps) {
	const { disconnectWallet, selectedAccount } = useExtensionContext()
	const { apiProviders } = useNetworkContext()
	const apiProvider = useApiProvider()
	return (
		<Menu
			anchorEl={anchorEl}
			id="account-menu"
			open={open}
			onClose={handleClose}
			onClick={handleClose}
			PaperProps={{
				elevation: 0,
				sx: {
					overflow: 'visible',
					filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
					mt: { xs: '1.25rem', sm: '1rem' },
					borderRadius: '1rem',
					'& .MuiAvatar-root': {
						width: 32,
						height: 32,
						ml: -0.5,
						mr: 1,
					},

					'&:before': {
						content: '""',
						display: 'block',
						position: 'absolute',
						top: 0,
						right: 60,
						width: 10,
						height: 10,
						bgcolor: 'background.paper',
						transform: 'translateY(-50%) rotate(45deg)',
						zIndex: 0,
					},
				},
			}}
			transformOrigin={{ horizontal: 'center', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
		>
			<Stack p={{ xs: 1, sm: 3 }} spacing={{ xs: 1, sm: 3 }}>
				<AccountCard accountState={selectedAccount} callback={openAccountSelect} />
				<BalanceCard />
				<Divider />
				<Stack>
					<NavLink href={'/account'}>
						<MenuItem>
							<ListItemIcon>
								<Dashboard fontSize="small" />
							</ListItemIcon>
							<Typography variant="body2">Dashboard</Typography>
						</MenuItem>
					</NavLink>
					<NavLink href={'/organisations'}>
						<MenuItem>
							<ListItemIcon>
								<Folder fontSize="small" />
							</ListItemIcon>
							<Typography variant="body2">Organizations</Typography>
						</MenuItem>
					</NavLink>
					<NavLink href={'/account/campaigns'}>
						<MenuItem>
							<ListItemIcon>
								<Topic fontSize="small" />
							</ListItemIcon>
							<Typography variant="body2">Campaigns</Typography>
						</MenuItem>
					</NavLink>
					<NavLink href={'/account/collectables'}>
						<MenuItem>
							<ListItemIcon>
								<NotificationsNone fontSize="small" />
							</ListItemIcon>
							<Typography variant="body2">Collectables</Typography>
						</MenuItem>
					</NavLink>
					<NavLink href={'/account/identity'}>
						<MenuItem>
							<ListItemIcon>
								<Settings fontSize="small" />
							</ListItemIcon>
							<Typography variant="body2">Identity</Typography>
						</MenuItem>
					</NavLink>
					<MenuItem onClick={disconnectWallet as any}>
						<ListItemIcon>
							<Logout fontSize="small" />
						</ListItemIcon>
						<Typography variant="body2">Disconnect</Typography>
					</MenuItem>
				</Stack>
				<Divider />
				<Box display="flex" justifyContent="center" alignItems="center" gap={1}>
					<Typography variant="body2" fontWeight="bold">
						{apiProvider?.chainName ?? ''}
						{apiProviders?.length > 1 && (
							<Button onClick={openNetworkSelect}>
								<MoreVert fontSize="small" />
							</Button>
						)}
					</Typography>
				</Box>
			</Stack>
		</Menu>
	)
}
