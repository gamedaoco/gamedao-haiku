import { Grid } from '@mui/material'
import { Item } from './item'
import LoadingTileCard from 'components/OrganisationCard/modules/loadingTileCard'
import type { Body } from '@gamedao-haiku/graphql/dist'

interface ComponentProps {
	items: Body[]
	loading: boolean
}

export function ItemList({ items, loading }: ComponentProps) {
	if (!Array.isArray(items) && !loading) return null

	return (
		<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
			{loading ? (
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
					<Grid item xs={4} sm={4} md={6} key={x}>
						<LoadingTileCard />
					</Grid>
				))
			) : (
				<>
					{items?.map((itemData, index) => (
						<Grid item xs={4} sm={4} md={6} key={index}>
							<Item item={itemData} />
						</Grid>
					))}
				</>
			)}
		</Grid>
	)
}
