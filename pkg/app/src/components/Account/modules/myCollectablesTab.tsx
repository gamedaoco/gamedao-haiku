import React, { FC, memo, useEffect } from 'react'

import Script from 'next/script'

import { useCollectablesForUserLazyQuery } from 'src/queries'
import { Card, Typography } from '@mui/material'
import { AccountState } from 'src/@types/extension'
import { getKusamaAddressFromAccountState } from 'src/utils/accountUtils'

import CollectablesList from './CollectablesSection/collectablesList'

interface MyCollectablesTabProps {
	accountState: AccountState
}

const MyCollectablesTab: FC<MyCollectablesTabProps> = ({ accountState }) => {
	const [loadCollectables, { loading, data }] = useCollectablesForUserLazyQuery()

	useEffect(() => {
		if (accountState) {
			loadCollectables({ variables: { owner: getKusamaAddressFromAccountState(accountState) } })
		}
	}, [accountState])

	return (
		<>
			<Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
			<Card sx={{ padding: 4 }}>
				<Typography variant="h6">My Collectables </Typography>
				<CollectablesList loading={loading} items={data} />
			</Card>
		</>
	)
}

export default memo(MyCollectablesTab)