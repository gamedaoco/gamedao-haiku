import { Fragment, useEffect } from 'react'
import { BaseDialog } from 'components/BaseDialog/baseDialog'
import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNetworkContext } from 'provider/network/modules/context'
import { NetworkCard } from 'components/SelectNetworkDialog/modules/networkCard'
import type { ApiProvider } from 'src/@types/network'

interface ComponentProps {
	open: boolean
	onClose: () => void
}

export function SelectNetworkDialog({ open, onClose }: ComponentProps) {
	const { selectedApiProvider, apiProviders } = useNetworkContext()
	const theme = useTheme()

	useEffect(() => {
		if (open && apiProviders?.length === 1) {
			// We do not have another network that we can use
			onClose()
		}
	}, [open, apiProviders, onClose])

	// There is no network available
	if (!apiProviders?.length) {
		return null
	}

	return (
		<BaseDialog title="Select wallet" open={open} onClose={onClose}>
			<Grid
				display={'grid'}
				gridTemplateColumns={{
					xs: 'repeat(auto-fit, minmax(310px, 500px))',
					md: 'repeat(auto-fit, minmax(400px, 500px))',
				}}
				justifyContent="space-around"
				gap={'1rem'}
				maxWidth={{ xs: 'auto', lg: theme.breakpoints.values.lg }}
			>
				{apiProviders.map((apiProvider: ApiProvider) => {
					return (
						<Fragment key={apiProvider.chainName}>
							<NetworkCard
								apiProvider={apiProvider}
								active={selectedApiProvider === apiProvider}
								callback={onClose}
							/>
						</Fragment>
					)
				})}
			</Grid>
		</BaseDialog>
	)
}
