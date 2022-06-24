import { Dashboard, Folder, Logout, MoreVert, NotificationsNone, Settings, Topic } from '@mui/icons-material'
import { Box, Button, Card, Divider, ListItemIcon, Menu, MenuItem, Stack, Typography } from '@mui/material'
import { useApiProvider } from 'hooks/useApiProvider'
import { useExtensionContext } from 'provider/extension/modules/context'

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
	const apiProvider = useApiProvider()
	return (
		<Menu
			anchorEl={anchorEl}
			id="account-menu"
			open={open}
			onClose={handleClose}
			onClick={handleClose}
			PaperProps={{
				elevation: 4,
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
			transformOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
		>
			<Stack width={343} p={{ xs: 1, sm: 2 }} spacing={{ xs: 1, sm: 2 }}>
				<AccountCard accountState={selectedAccount} callback={openAccountSelect} />
				<BalanceCard />
				<Stack spacing={{ xs: 0, sm: 1 }}>
					<Divider />
					<Typography variant="overline">Account</Typography>
					<NavLink href="/">
						<MenuItem>
							<ListItemIcon>
								<Dashboard fontSize="small" />
							</ListItemIcon>
							<Typography variant="body2">Dashboard</Typography>
						</MenuItem>
					</NavLink>
					<MenuItem>
						<ListItemIcon>
							<Topic fontSize="small" />
						</ListItemIcon>
						<Typography variant="body2">My Campaigns</Typography>
					</MenuItem>
					<MenuItem>
						<ListItemIcon>
							<Folder fontSize="small" />
						</ListItemIcon>
						<Typography variant="body2">My Organizations</Typography>
					</MenuItem>
					<MenuItem>
						<ListItemIcon>
							<NotificationsNone fontSize="small" />
						</ListItemIcon>
						<Typography variant="body2">Updates</Typography>
					</MenuItem>
					<MenuItem>
						<ListItemIcon>
							<Settings fontSize="small" />
						</ListItemIcon>
						<Typography variant="body2">Settings</Typography>
					</MenuItem>
					<MenuItem onClick={disconnectWallet as any}>
						<ListItemIcon>
							<Logout fontSize="small" />
						</ListItemIcon>
						<Typography variant="body2">Logout</Typography>
					</MenuItem>
					<Divider />
				</Stack>
				<Box display="flex" justifyContent="center" alignItems="center" gap={1}>
					<Typography variant="body2" fontWeight="bold">
						{' '}
						{apiProvider?.chainName ?? ''}
					</Typography>
					<Button onClick={openNetworkSelect}>
						<MoreVert fontSize="small" />
					</Button>
				</Box>
			</Stack>
		</Menu>
	)
}
