import { Grid } from '@mui/material'
import { useExtensionContext } from 'provider/extension/modules/context'
import { Fragment, useEffect } from 'react'
import { BaseDialog } from 'components/BaseDialog/baseDialog'
import { WalletCard } from 'components/WalletDialog/modules/walletCard'
import { useTheme } from '@mui/material/styles'

interface ComponentProps {
	callback: (extensionName: string) => {}
	open: boolean
}

export function WalletDialog({ open, callback }: ComponentProps) {
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
		<BaseDialog title="Select wallet" open={open}>
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
								name={wallet.extensionName}
								url={wallet.installUrl}
								callback={() => callback(wallet.extensionName)}
								connectable={supportedWallets.indexOf(wallet) !== -1}
							/>
						</Fragment>
					)
				})}
			</Grid>
		</BaseDialog>
	)
}
