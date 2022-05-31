import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/router'

import { Organization, OrganizationOrderByInput, useOrganizationsLazyQuery } from '@gamedao-haiku/graphql/dist'
import { ArrowDownward } from '@mui/icons-material'
import { Button, Container, Grid, createSvgIcon } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Layout } from 'src/components/Layouts/default/layout'

import { ItemList } from 'components/OrganisationCard/itemList'
import { FiltersSection } from 'components/OrganisationCard/modules/filtersSection'

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
const applyPagination = (data: Organization[], rowsPerPage: number): Organization[] =>
	data?.filter((x, index) => index < rowsPerPage)

interface SortOptionsInterface {
	name: String
	value: OrganizationOrderByInput
}

const sortOptions: SortOptionsInterface[] = [
	{ value: OrganizationOrderByInput.MemberLimitDesc, name: 'Member: High-Low' },
	{ value: OrganizationOrderByInput.MemberLimitAsc, name: 'Member: Low-High' },
	{ value: OrganizationOrderByInput.CreatedAtBlockDesc, name: 'Created: Newest first' },
	{ value: OrganizationOrderByInput.CreatedAtBlockAsc, name: 'Created: Oldest first' },
]

export function OrganisationPage() {
	// todo - ahmad - refactor the filters to an object for the query and other filters
	const [filters, setFilters] = useState('')
	const [bodyCount, setBodyCount] = useState<number>(15)
	const [sortOption, setSortOption] = useState<OrganizationOrderByInput>(sortOptions[0].value)
	const [fetchOrganizations, { loading, error, data }] = useOrganizationsLazyQuery()
	useEffect(() => {
		if (error) {
			console.error('There was an error querying the display values')
		}
	}, [error])

	useEffect(() => {
		fetchOrganizations({
			variables: { first: bodyCount, orderBy: sortOption, searchQuery: filters },
		})
	}, [bodyCount, fetchOrganizations, sortOption, filters])
	const paginatedData = applyPagination(data?.organizations?.slice() as Organization[], bodyCount)
	const { push } = useRouter()
	const buttonVisibility = useMemo(
		() => paginatedData?.length < data?.organizationsConnection?.totalCount,
		[paginatedData?.length, data?.organizationsConnection?.totalCount],
	)

	const handleClickCreate = useCallback(() => {
		push('/app/organisations/create')
	}, [push])

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
									onClick={handleClickCreate}
								>
									Create
								</Button>
							</Grid>
						</Grid>
						<FiltersSection
							filters={filters}
							setFilters={setFilters}
							sortOption={sortOption}
							setSortOption={setSortOption}
							sortOptions={sortOptions}
						/>
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
								>
									Load More Organisations
								</Button>
							)}
							<Typography>
								Showing {paginatedData?.length} of {data?.organizationsConnection?.totalCount}{' '}
								organisations
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Layout>
	)
}

export default OrganisationPage
