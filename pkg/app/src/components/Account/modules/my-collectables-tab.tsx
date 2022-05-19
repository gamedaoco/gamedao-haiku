import { Paper, Stack, Typography } from '@mui/material'
import React, { FC, memo, useEffect } from 'react'
import { AccountState } from 'src/@types/extension'
import Script from 'next/script'
import { useCollectablesForUserLazyQuery } from '@gamedao-haiku/graphql/dist'
import { getKusamaAddressFromAccountState } from 'src/utils/accountUtils'
import CollectablesList from './collectables-section/collectables-list'

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
			<Stack
				component={Paper}
				spacing={0.5}
				padding={3}
				borderRadius="16px"
				//TODO: Change the static color to fetch from theme once the last pull request is merged
				style={{ backgroundColor: '#212B36' }}
			>
				<Typography variant="h6">My Collectables </Typography>
				<CollectablesList loading={loading} items={data} />
			</Stack>
		</>
	)
}

export default memo(MyCollectablesTab)
