import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useCollectablesForUserLazyQuery as useCollectables } from 'src/queries'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { getKusamaAddressFromAccountState as getKusamaAddress } from 'src/utils/accountUtils'

import { Paper, Box } from '@mui/material'

import Loader from 'components/Loader'
import CollectablesGrid from './CollectablesGrid'

export function Collectables() {
	const { t } = useTranslation()
	const [loadCollectables, { loading, data }] = useCollectables()
	const account = useCurrentAccountState()
	useEffect(() => {
		if (account) {
			loadCollectables({ variables: { owner: getKusamaAddress(account) } })
		}
	}, [account, loadCollectables])

	return (
		<Paper variant="glass">
			<Box p={[2, 4]}>
				<CollectablesGrid loading={loading} items={data} />
			</Box>
		</Paper>
	)
}

export default Collectables
