import React, { Fragment } from 'react'

import { Grid } from '@mui/material'
import { Organization } from 'src/queries'

import { LoadingTileCard } from 'dapps/unity/components/OrganizationCard/components/loadingTileCard'
import { TileCard } from 'dapps/unity/components/OrganizationCard/components/tileCard'

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
