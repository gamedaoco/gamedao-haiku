import { Fragment, useEffect } from 'react'

import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useExtensionContext } from 'provider/extension/modules/context'

import { BaseDialog } from 'components/BaseDialog/baseDialog'
import { WalletCard } from 'components/WalletDialog/modules/walletCard'

interface ComponentProps {
	callback: (extensionName: string) => {}
	open: boolean
	onClose: () => void
}

export function WalletDialog({ open, callback, onClose }: ComponentProps) {
	const { supportedWallets, allSupportedWallets } = useExtensionContext()
	const theme = useTheme()

	useEffect(() => {
		if (open && supportedWallets?.length === 1) {
			// Automatically use the 1st wallet if only one is available
			callback(supportedWallets[0].extensionName)
		}
	}, [supportedWallets, open])

	// No There is no wallet available
	if (!allSupportedWallets?.length) {
		return null
	}

	return (
		<BaseDialog title="Select wallet" open={open} onClose={onClose}>
			<Grid
				display={'grid'}
				gridTemplateColumns="repeat(auto-fit, minmax(300px, 500px))"
				justifyContent="space-around"
				gap={'1rem'}
				maxWidth={{ xs: 'auto', md: '50vw', lg: theme.breakpoints.values.lg }}
			>
				{allSupportedWallets.map((wallet) => {
					return (
						<Fragment key={wallet.extensionName}>
							<WalletCard
								imageSrc={wallet.logo?.src}
								name={wallet.title || wallet.extensionName}
								url={wallet.installUrl}
								callback={() => callback(wallet.extensionName)}
								connectable={wallet.installed}
							/>
						</Fragment>
					)
				})}
			</Grid>
		</BaseDialog>
	)
}
