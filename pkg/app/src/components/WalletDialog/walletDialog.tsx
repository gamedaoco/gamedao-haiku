import { Avatar, Dialog, DialogTitle, List, ListItem, ListItemText, ListItemAvatar } from '@mui/material'
import { useExtensionContext } from 'provider/extension/modules/context'
import { useEffect } from 'react'

interface ComponentProps {
	callback: (extensionName: string) => {}
	open: boolean
}

export function WalletDialog({ open, callback }: ComponentProps) {
	const { supportedWallets } = useExtensionContext()

	useEffect(() => {
		if (open && supportedWallets?.length === 1) {
			// Automatically use the 1st wallet if only one is available
			callback(supportedWallets[0].extensionName)
		}
	}, [supportedWallets, open])

	// No There is no wallet available
	if (!supportedWallets?.length) {
		return null
	}
	return (
		<Dialog open={open}>
			<DialogTitle>Select wallet extension</DialogTitle>
			<List sx={{ pt: 0 }}>
				{supportedWallets.map((wallet) => (
					<ListItem
						button
						onClick={() => {
							callback(wallet.extensionName)
						}}
						key={wallet.extensionName}
					>
						<ListItemAvatar>{wallet.logo?.src && <Avatar src={wallet.logo.src} />}</ListItemAvatar>
						<ListItemText primary={wallet.extensionName} />
					</ListItem>
				))}
			</List>
		</Dialog>
	)
}
