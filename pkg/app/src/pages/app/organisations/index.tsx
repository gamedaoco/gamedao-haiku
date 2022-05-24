import React, { useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ItemList } from 'components/OrganisationCard/itemList'
import { Layout } from 'src/layouts/default/layout'
import { Organization, useOrganizationsQuery } from '@gamedao-haiku/graphql/dist'
import { Button, Container, createSvgIcon, Grid } from '@mui/material'
import { FiltersSection } from 'components/OrganisationCard/modules/filtersSection'
import { ArrowDownward } from '@mui/icons-material'

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
const applyFilters = (data: Organization[], filters: string): Organization[] =>
	data?.filter((x) => {
		if (filters) {
			let queryMatched = false
			const properties = ['name', 'description']

			properties.forEach((property) => {
				if (x?.metadata?.[property]?.toLowerCase().includes(filters.toLowerCase())) {
					queryMatched = true
				}
			})

			if (!queryMatched) {
				return false
			}
		}

		return true
	})
const applyPagination = (data: Organization[], rowsPerPage: number): Organization[] =>
	data?.filter((x, index) => index < rowsPerPage)

export function OrganisationPage() {
	const [filters, setFilters] = useState('')
	const { loading, error, data } = useOrganizationsQuery()
	useEffect(() => {
		if (error) {
			console.error('There was an error querying the display values')
		}
	}, [error])
	const [bodyCount, setBodyCount] = useState<number>(15)
	const filteredData = applyFilters(data?.organizations?.slice() as Organization[], filters)
	const paginatedData = applyPagination(filteredData, bodyCount)
	const buttonVisibility = useMemo(
		() => paginatedData?.length < filteredData?.length,
		[paginatedData?.length, filteredData?.length],
	)
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
									// sx={{ color: '#919EAB', borderColor: '#919EAB', borderRadius: 2 }}
									variant="outlined"
								>
									Create
								</Button>
							</Grid>
						</Grid>
						<FiltersSection filters={filters} setFilters={setFilters} />
					</Box>
					{paginatedData?.length === 0 && !loading && (
						<Box sx={{ mt: 2, mb: 4 }}>
							<Typography fontWeight={700}>No organisation found</Typography>
							<Typography>
								No results found for “{filters}”. Try checking for typos or using a different term.
							</Typography>
						</Box>
					)}
					<ItemList items={paginatedData} loading={loading} />
				</Container>

				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 3 }}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								gap: 1.5,
							}}
						>
							{buttonVisibility && (
								<Button
									endIcon={<ArrowDownward />}
									onClick={() => setBodyCount((p) => p + 30)}
									variant="outlined"
									sx={{ color: '#919EAB', border: '#919EAB 1px solid', borderRadius: 2 }}
								>
									Load 30 More Organisations
								</Button>
							)}
							<Typography>
								Showing {paginatedData?.length} of {filteredData?.length} organisations
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Layout>
	)
}

export default OrganisationPage
