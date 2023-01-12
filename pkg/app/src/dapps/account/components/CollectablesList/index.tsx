import { FC, memo, Fragment } from 'react'
import Script from 'next/script'

import type { CollectablesForUserQuery } from 'src/queries'
import { Grid } from '@mui/material'
import type { Collectable as TCollectable } from 'src/@types/collectable'

import Collectable from 'components/Collectable/collectable'

import LoadingCollectableCard from './loadingCollectableCard'

interface Props {
	loading?: boolean
	items: CollectablesForUserQuery
}

export const CollectablesList: FC<Props> = ({ loading = false, items }) => {
	if (!Array.isArray(items?.rmrkNfts) && !loading) return null

	return (
		<Fragment>
			<Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
			<Grid container sx={{ pt: 3 }} spacing={{ xs: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
				{loading ? (
					[1, 2, 3].map((x) => (
						<Grid item xs={12 / 5} key={x}>
							<LoadingCollectableCard />
						</Grid>
					))
				) : (
					<>
						{items?.rmrkNfts.map((item: TCollectable) => (
							<Grid item xs={12 / 5} key={item.id}>
								<Collectable item={item} />
							</Grid>
						))}
					</>
				)}
			</Grid>
		</Fragment>
	)
}

export default memo(CollectablesList)
