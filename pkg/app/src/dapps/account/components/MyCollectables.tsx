import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { getKusamaAddressFromAccountState } from 'utils/accountUtils'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useCollectablesForUserLazyQuery } from 'src/queries'
import { CollectablesForUserQuery } from 'src/queries'

import { Card, CardContent, Typography } from '@mui/material'
import CollectablesList from './CollectablesList'

export function MyCollectables() {
	const { t } = useTranslation()

	const accountState = useCurrentAccountState()
	const [loadCollectables, { loading, data }] = useCollectablesForUserLazyQuery()

	useEffect(() => {
		if (accountState) {
			loadCollectables({ variables: { owner: getKusamaAddressFromAccountState(accountState) } })
		}
	}, [accountState])

	return (
		<Card variant={'glass'}>
			<CardContent>
				<Typography variant="h5">{t('label:my_collectables')}</Typography>
				<Typography variant="h6" py={2}>
					ZERO
				</Typography>
				{data?.rmrkNfts?.length === 0 ? (
					<Typography variant="body1">You do not own any collectables on this network yet.</Typography>
				) : (
					<CollectablesList loading={loading} items={data as CollectablesForUserQuery} />
				)}
				<Typography variant="h6" py={2}>
					Kusama
				</Typography>
				{data?.rmrkNfts.length === 0 ? (
					<Typography variant="body1">You do not own any collectables on this network yet.</Typography>
				) : (
					<CollectablesList loading={loading} items={data as CollectablesForUserQuery} />
				)}
				{/*				<Typography variant="h6" py={2}>Ethereum</Typography>
				{ ( data?.rmrkNfts.length === 0 )
					? (<Typography variant="body1">You do not own any collectables on this network yet.</Typography>)
					: <CollectablesList loading={loading} items={data} />
				}*/}
			</CardContent>
		</Card>
	)
}
