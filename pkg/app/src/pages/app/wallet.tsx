import React, { Fragment, useEffect } from 'react'

import { Stack, Typography, Paper, CircularProgress, Box } from '@mui/material'

import { Layout } from 'src/layouts/default/layout'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'
import { useLazyQuery } from '@apollo/client'
import { GET_COLLECTABLES_FOR_USER } from 'graphql/queries/collectables'
import { getKusamaAddressFromAccountState } from 'src/utils/accountUtils'
import type { Collectable } from 'src/@types/collectable'
import { Collectable as CollectableComponent } from 'components/Collectable/collectable'

interface CollectableData {
	nfts: Collectable[]
}

export function WalletPage() {
	const accountState = useCurrentAccountState()
	const [loadCollectables, { loading, data }] = useLazyQuery<CollectableData>(GET_COLLECTABLES_FOR_USER)

	useEffect(() => {
		if (accountState) {
			loadCollectables({ variables: { owner: getKusamaAddressFromAccountState(accountState) } })
		}
	}, [accountState])

	// Displayed when the wallet is not yet connected
	if (!accountState) {
		return <NoWalletConnected />
	}
	console.log(data)
	return (
		<Layout showHeader showFooter showSidebar title="DAO">
			<Stack spacing={4} padding={4}>
				<Typography variant="h3">Wallet</Typography>

				<Stack component={Paper} elevation={10} padding={4} spacing={2}>
					<Typography variant="h4"> Collectables </Typography>
					{loading && (
						<Box display="flex" justifyContent="center">
							<CircularProgress />
						</Box>
					)}
					{data && (
						<Stack
							direction={'row'}
							flexWrap="wrap"
							justifyContent={data.nfts?.length > 1 ? 'space-evenly' : 'flex-start'}
						>
							{data.nfts?.map((collectable: Collectable) => {
								return (
									<Box key={collectable.id} margin={4}>
										<CollectableComponent item={collectable} />
									</Box>
								)
							})}
						</Stack>
					)}
				</Stack>
			</Stack>
		</Layout>
	)
}

export default WalletPage
