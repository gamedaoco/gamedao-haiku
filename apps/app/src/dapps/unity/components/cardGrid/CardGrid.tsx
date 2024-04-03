import React, { Fragment } from 'react'

import { Grid } from '@mui/material'
import { Organization } from 'src/queries'

import { Loading } from 'dapps/unity/components/cardGrid/components/Loading'
import { Card } from 'dapps/unity/components/cardGrid/components/Card'

interface ComponentProps {
	items: Organization[]
	loading: boolean
}

export function CardGrid({ items, loading }: ComponentProps) {
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
					<Card item={item} />
				</Fragment>
			))}

			{(!items || loading) && <Loading />}
		</Grid>
	)
}
