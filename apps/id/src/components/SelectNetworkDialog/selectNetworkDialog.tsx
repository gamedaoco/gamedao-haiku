import { Grid } from '@mui/material'
import { Fragment, useEffect } from 'react'
import { Endpoint } from 'src/@types/graphql'
import { BaseDialog } from 'src/components/BaseDialog/baseDialog'
import { NetworkCard } from 'src/components/SelectNetworkDialog/modules/networkCard'
import { useGraphQlContext } from 'src/providers/graphQl/modules/context'

interface ComponentProps {
	open: boolean
	onClose: () => void
}

export function SelectNetworkDialog({ open, onClose }: ComponentProps) {
	const { endpoints, selectedEndpoint } = useGraphQlContext()

	useEffect(() => {
		if (open && endpoints?.length === 1) {
			// We do not have another network that we can use
			onClose()
		}
	}, [open, endpoints, onClose])

	// There are no networks available
	if (!endpoints?.length) {
		return null
	}

	return (
		<BaseDialog title="Select network" open={open} onClose={onClose}>
			<Grid
				display={'grid'}
				gridTemplateColumns={{
					xs: 'repeat(auto-fit, minmax(310px, 500px))',
					md: 'repeat(auto-fit, minmax(400px, 500px))',
				}}
				justifyContent="space-around"
				gap={'1rem'}
			>
				{endpoints.map((endpoint: Endpoint) => {
					return (
						<Fragment key={endpoint.url}>
							<NetworkCard
								endpoint={endpoint}
								active={selectedEndpoint === endpoint}
								callback={onClose}
							/>
						</Fragment>
					)
				})}
			</Grid>
		</BaseDialog>
	)
}
