import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ItemList } from 'components/OrganisationCard/itemList'
import { Layout } from 'src/layouts/default/layout'
import { Body, useBodiesQuery } from '@gamedao-haiku/graphql/dist'
import { Button, Container, createSvgIcon, Grid } from '@mui/material'
import FiltersSection from 'components/OrganisationCard/modules/filtersSection'

const PlusIcon = createSvgIcon(
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
		<path
			fillRule="evenodd"
			d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
			clipRule="evenodd"
		/>
	</svg>,
	'Plus',
)

export function OrganisationPage() {
	const { loading, error, data } = useBodiesQuery()
	useEffect(() => {
		if (error) {
			console.error('There is an error when querying the display values')
		}
	}, [error])

	return (
		<Layout showHeader showFooter showSidebar title="Organisation">
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<Container maxWidth="xl">
					<Box sx={{ mb: 4 }}>
						<Grid container justifyContent="space-between" spacing={3}>
							<Grid item>
								<Typography variant="h3">Organisations</Typography>
							</Grid>
							<Grid item>
								<Button
									startIcon={<PlusIcon fontSize="small" />}
									sx={{ color: '#919EAB', borderColor: '#919EAB', borderRadius: 2 }}
									variant="outlined"
								>
									Create
								</Button>
							</Grid>
						</Grid>
						<FiltersSection />
					</Box>
					<ItemList items={data?.bodies?.slice() as Body[]} loading={loading} />
				</Container>
			</Box>
		</Layout>
	)
}

export default OrganisationPage
