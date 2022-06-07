import React, { useEffect } from 'react'

import Script from 'next/script'

import { useCollectablesForUserLazyQuery } from '@gamedao-haiku/graphql/dist'
import { Box, CircularProgress, Paper, Stack, Typography } from '@mui/material'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import type { Collectable } from 'src/@types/collectable'
import { Layout } from 'src/components/Layouts/default/layout'
import { getKusamaAddressFromAccountState } from 'src/utils/accountUtils'

import { Collectable as CollectableComponent } from 'components/Collectable/collectable'
import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'

export function WalletPage() {
	const accountState = useCurrentAccountState()
	const [loadCollectables, { loading, data }] = useCollectablesForUserLazyQuery()

	useEffect(() => {
		if (accountState) {
			loadCollectables({ variables: { owner: getKusamaAddressFromAccountState(accountState) } })
		}
	}, [accountState])

	// Displayed when the wallet is not yet connected
	if (!accountState) {
		return <NoWalletConnected />
	}

	return (
		<>
			<Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />

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
							<Box
								sx={{
									display: 'grid',
									gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 300px))',
									justifyContent: 'space-evenly',
								}}
							>
								{data.nfts?.map((collectable: Collectable) => {
									return (
										<Box key={collectable.id} margin={4}>
											<CollectableComponent item={collectable} />
										</Box>
									)
								})}
							</Box>
						)}
					</Stack>
				</Stack>
			</Layout>
		</>
	)
}

export default WalletPage
