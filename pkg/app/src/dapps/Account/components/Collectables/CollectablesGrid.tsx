import React, { FC, memo } from 'react'
import type { Collectable as CollectableInterface } from 'src/@types/collectable'
import { CollectablesForUserQuery } from 'src/queries'

import { Grid, Paper, Typography } from '@mui/material'
import Collectable from 'components/Collectable/collectable'
import Loader from 'components/Loader'

interface CollectablesListProps {
	loading?: boolean
	items?: CollectablesForUserQuery
}

const CollectablesGrid: FC<CollectablesListProps> = ({ loading, items }) => {
	if (loading) return <Loader />
	if (items?.rmrkNfts.length === 0) return <Typography>Your collection is empty.</Typography>

	// 			: (
	// 				)
	// 		}
	// 	</Paper>

	return (
		<Grid container sx={{ pt: 3 }} spacing={{ xs: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
			{loading ? (
				// [1, 2, 3].map((x) => (
				<Grid item xs={12 / 5} key={x}>
					<Loader />
				</Grid>
			) : (
				// ))
				<>
					{items?.rmrkNfts.map((item: CollectableInterface) => (
						<Grid item xs={12 / 5} key={item.id}>
							<Collectable item={item} />
						</Grid>
					))}
				</>
			)}
		</Grid>
	)
}

export default memo(CollectablesGrid)
