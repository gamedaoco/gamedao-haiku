import { Fragment, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { getKusamaAddressFromAccountState } from 'src/utils/accountUtils'
import { useCurrentAccountState } from '@gamedao/core/hooks/useCurrentAccountState'
import { useCollectablesForUserLazyQuery } from '@gamedao/graph'
import { CollectablesForUserQuery } from '@gamedao/graph'

import { Card, CardContent, Typography } from '@mui/material'
import CollectablesList from './CollectablesList'

export function MyCollectables() {
	const { t } = useTranslation()
	const accountState = useCurrentAccountState()

	const [loadKusamaCollectables, { loading: loadingKusama, data: kusamaNFT }] = useCollectablesForUserLazyQuery()
	useEffect(() => {
		if (loadingKusama || !accountState) return
		loadKusamaCollectables({ variables: { owner: getKusamaAddressFromAccountState(accountState) } })
	}, [accountState])

	const [loadLocalCollectables, { loading, data: zeroNFT }] = useCollectablesForUserLazyQuery()
	useEffect(() => {
		if (loading || !accountState) return
		loadLocalCollectables({ variables: { owner: getKusamaAddressFromAccountState(accountState) } })
	}, [accountState])

	return (
		<Card variant={'glass'}>
			<CardContent>
				<Typography variant="h5">{'Collectables' || t('label:my_collectables')}</Typography>

				{zeroNFT && (
					<Fragment>
						<Typography variant="h6" py={2}>
							ZERO
						</Typography>
						{zeroNFT?.rmrkNfts?.length === 0 ? (
							<Typography variant="body1">You do not own any collectables on this network.</Typography>
						) : (
							<CollectablesList loading={loading} items={zeroNFT as CollectablesForUserQuery} />
						)}
					</Fragment>
				)}

				{kusamaNFT?.rmrkNfts && (
					<Fragment>
						<Typography variant="h6" py={2}>
							Kusama
						</Typography>
						{kusamaNFT?.rmrkNfts.length === 0 ? (
							<Typography variant="body1">You do not own any collectables on this network.</Typography>
						) : (
							<CollectablesList loading={loadingKusama} items={kusamaNFT as CollectablesForUserQuery} />
						)}
					</Fragment>
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
