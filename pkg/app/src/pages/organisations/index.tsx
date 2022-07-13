import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/router'

import { Add, ArrowDownward } from '@mui/icons-material'
import { Button, Container, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useOrganizationFeatures } from 'hooks/featureToggle/useOrganizationFeatures'
import { useTranslation } from 'react-i18next'
import { Layout } from 'src/components/Layouts/default/layout'
import {
	Organization,
	Organization_Order_By,
	useDisplayValuesQuery,
	useOrganizationsPaginationCountSubscription,
	useOrganizationsPaginationSubscription,
} from 'src/queries'

import { ItemList } from 'components/OrganisationCard/itemList'
import { OrganizationFiltersListTab } from 'components/OrganisationCard/modules/listTab'
import { FiltersSection } from 'components/filtersSections/filtersSection'

const applyPagination = (data: Organization[], rowsPerPage: number): Organization[] =>
	data?.filter((x, index) => index < rowsPerPage)

interface FiltersInterface {
	query: string
	sortOption: Organization_Order_By
	filters: any
}
export function OrganisationPage() {
	const { t } = useTranslation()
	const enabledFeature = useOrganizationFeatures()
	const [filters, setFilters] = useState<FiltersInterface>({
		query: '',
		sortOption: null,
		filters: {},
	})
	const [bodyCount, setBodyCount] = useState<number>(15)
	const { data } = useDisplayValuesQuery()
	const organizationsCount = useOrganizationsPaginationCountSubscription({
		variables: { searchQuery: `%${filters ?? ''}%` },
	})
	const organizationsData = useOrganizationsPaginationSubscription({
		variables: { first: bodyCount, orderBy: filters.sortOption, searchQuery: `%${filters?.query ?? ''}%` },
	})
	const loading = organizationsCount?.loading || organizationsData?.loading

	useEffect(() => {
		if (organizationsCount?.error) {
			console.error('There was an error querying the display values')
		}
	}, [organizationsCount?.error])

	const paginatedData = applyPagination(organizationsData?.data?.organization?.slice() as Organization[], bodyCount)
	const { push } = useRouter()

	const buttonVisibility = useMemo(
		() => paginatedData?.length < organizationsCount?.data?.organization_aggregate?.aggregate?.count,
		[paginatedData?.length, organizationsCount?.data],
	)

	const handleClickCreate = useCallback(() => {
		push('/organisations/create')
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
									startIcon={<Add fontSize="small" />}
									variant="outlined"
									onClick={handleClickCreate}
								>
									Create
								</Button>
							</Grid>
						</Grid>
						<FiltersSection
							setFilters={setFilters}
							sortOptions={data?.displayValues?.sortOptions?.concat([])}
							showFilters={enabledFeature?.ORGANIZATION_PAGE_SHOW_FILTERS}
							showSearch={enabledFeature?.ORGANIZATION_PAGE_SHOW_SEARCH}
							showSort={enabledFeature?.ORGANIZATION_PAGE_SHOW_SORT}
							searchPlaceHolder={t('page:organisations:search_place_holder')}
							ListTab={OrganizationFiltersListTab}
						/>
					</Box>
					{paginatedData?.length === 0 && !loading && (
						<Box sx={{ mt: 2, mb: 4 }}>
							<Typography fontWeight={700}>No organisation found</Typography>
							<Typography>
								No results found for “{filters?.query}”. Try checking for typos or using a different
								term.
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
								Showing {paginatedData?.length} of{' '}
								{organizationsCount?.data?.organization_aggregate?.aggregate.count} organisations
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Layout>
	)
}

export default OrganisationPage
