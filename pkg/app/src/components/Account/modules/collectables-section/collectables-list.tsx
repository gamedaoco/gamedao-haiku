import { Grid } from '@mui/material'
import React, { FC, memo } from 'react'

import CollectableCard from './collectables-card'
import LoadingCollectableCard from './loading-collectable-card'
import { CollectablesForUserQuery } from '@gamedao-haiku/graphql/dist'
import { Collectable } from 'src/@types/collectable'

interface CollectablesListProps {
	loading: boolean
	items: CollectablesForUserQuery
}

const CollectablesList: FC<CollectablesListProps> = ({ loading, items }) => {
	if (!Array.isArray(items?.nfts) && !loading) return null

	return (
		<Grid container sx={{ pt: 3 }} spacing={{ xs: 1, md: 0.5 }} columns={{ xs: 2, sm: 8, md: 12 }}>
			{loading ? (
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
					<Grid item xs={12 / 5} key={x}>
						<LoadingCollectableCard />
					</Grid>
				))
			) : (
				<>
					{items?.nfts.map((item: Collectable) => (
						<Grid item xs={12 / 5} style={{ marginBottom: 10 }} key={item.id}>
							<CollectableCard item={item} />
						</Grid>
					))}
				</>
			)}
		</Grid>
	)
}

export default memo(CollectablesList)
