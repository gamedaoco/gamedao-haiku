import React, { Fragment } from 'react'

import { Grid } from '@mui/material'
import { Organization } from '@gamedao/graph'

import { LoadingTileCard } from 'src/components/OrganizationCard/modules/loadingTileCard'
import { TileCard } from 'src/components/OrganizationCard/modules/tileCard'

interface ComponentProps {
	items: Organization[]
	loading: boolean
}

export function ItemList({ items, loading }: ComponentProps) {
	return (
		<Grid
			sx={{
				display: 'grid',
				gap: ['1rem', '2rem'],
				gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
			}}
		>
			{items?.map((item) => (
				<Fragment key={item.id}>
					<TileCard item={item} />
				</Fragment>
			))}

			{(!items || loading) && <LoadingTileCard />}
		</Grid>
	)
}
