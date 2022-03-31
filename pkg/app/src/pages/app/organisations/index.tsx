import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { ItemList } from 'components/OrganisationCard/itemList'
import { Layout } from 'src/layouts/default/layout'
import { useBodiesQuery } from '@gamedao-haiku/graphql/dist'
import { CircularProgress } from '@mui/material'

export function OrganisationPage() {
	const { loading, error, data } = useBodiesQuery()
	if (error) {
		console.error(error)
		return <div>Error!</div>
	}
	return (
		<Layout showHeader showFooter showSidebar title="Organisation">
			<Box sx={{ p: '4rem', minHeight: '90vh' }}>
				<Paper sx={{ p: '4rem', height: '100%', borderRadius: '.5rem' }} elevation={10}>
					<Typography sx={{ fontWeight: '800' }} variant={'h2'}>
						Hello. Bodies count: {loading ? <CircularProgress /> : data?.bodies.length}
					</Typography>
					{<ItemList data={data?.bodies}></ItemList>}
				</Paper>
			</Box>
		</Layout>
	)
}

export default OrganisationPage
