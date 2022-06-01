import React, { useEffect, useState } from 'react'

import type { Organization } from '@gamedao-haiku/graphql/dist'
import { Grid } from '@mui/material'

import LoadingTileCard from 'components/OrganisationCard/modules/loadingTileCard'
import { TileCard } from 'components/OrganisationCard/modules/tileCard'

interface ComponentProps {
	items: Organization[]
	loading: boolean
}

export function ItemList({ items, loading }: ComponentProps) {
	const [allData, setAllData] = useState<Organization[]>(items)
	useEffect(() => {
		if (items) {
			setAllData(items)
		}
	}, [items])
	if (!Array.isArray(items) && !loading) return null

	return (
		<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
			{allData?.map((item, index) => (
				<Grid item xs={4} key={index}>
					<TileCard item={item} />
				</Grid>
			))}

			{loading &&
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
					<Grid item xs={4} key={x}>
						<LoadingTileCard />
					</Grid>
				))}
		</Grid>
	)
}
