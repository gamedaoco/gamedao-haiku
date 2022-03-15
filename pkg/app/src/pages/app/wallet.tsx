import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { Layout } from 'src/layouts/default/layout'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'
import { useLazyQuery } from '@apollo/client'
import { GET_COLLECTABLES_FOR_USER } from 'graphql/queries/collectables'
import { getKusamaAddressFromAccountState } from 'src/utils/accountUtils'

export function WalletPage() {
	const accountState = useCurrentAccountState()
	const [loadCollectables, { loading, data }] = useLazyQuery(GET_COLLECTABLES_FOR_USER)

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
		<Layout showHeader showFooter showSidebar title="DAO">
			<Box sx={{ p: '4rem', height: '90vh' }}>
				<Typography variant="h3">Wallet</Typography>
				{loading && <Typography variant="h3">Loading</Typography>}
				{data && <Typography variant="h3">Data</Typography>}
			</Box>
		</Layout>
	)
}

export default WalletPage
