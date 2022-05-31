import { Dashboard, Folder, Logout, MoreVert, NotificationsNone, Settings, Topic } from '@mui/icons-material'
import { Box, Button, Divider, ListItemIcon, Menu, MenuItem, Stack } from '@mui/material'
import { useApiProvider } from 'hooks/useApiProvider'
import { useExtensionContext } from 'provider/extension/modules/context'

import { AccountCard } from 'components/AccountCard/accountCard'
import { BalanceCard } from 'components/BalanceCard/balanceCard'

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
					mt: 1.5,
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
						right: 14,
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
			<Stack p={{ xs: 1, sm: 3 }} spacing={{ xs: 1, sm: 3 }}>
				<Box
					minWidth={{
						xs: '310px',
						sm: '450px',
					}}
				>
					<AccountCard accountState={selectedAccount} callback={openAccountSelect} />
				</Box>
				<BalanceCard />
				<Stack spacing={{ xs: 0, sm: 1 }}>
					<Divider />
					<MenuItem>
						<ListItemIcon>
							<Dashboard fontSize="small" />
						</ListItemIcon>
						Dashboard
					</MenuItem>
					<MenuItem>
						<ListItemIcon>
							<Topic fontSize="small" />
						</ListItemIcon>
						My Campaigns
					</MenuItem>
					<MenuItem>
						<ListItemIcon>
							<Folder fontSize="small" />
						</ListItemIcon>
						My Organizations
					</MenuItem>
					<MenuItem>
						<ListItemIcon>
							<NotificationsNone fontSize="small" />
						</ListItemIcon>
						Updates
					</MenuItem>
					<MenuItem>
						<ListItemIcon>
							<Settings fontSize="small" />
						</ListItemIcon>
						Settings
					</MenuItem>

					<MenuItem onClick={disconnectWallet as any}>
						<ListItemIcon>
							<Logout fontSize="small" />
						</ListItemIcon>
						Logout
					</MenuItem>
					<Divider />
				</Stack>
				<Box display="flex" justifyContent="center" alignItems="center" gap={1}>
					{apiProvider?.chainName ?? ''}
					<Button onClick={openNetworkSelect}>
						<MoreVert fontSize="small" />
					</Button>
				</Box>
			</Stack>
		</Menu>
	)
}
