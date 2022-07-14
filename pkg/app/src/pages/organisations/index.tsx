import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/router'

import { Add, ArrowDownward } from '@mui/icons-material'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
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

import { FiltersSection } from 'components/FiltersSections/filtersSection'
import { ItemList } from 'components/OrganisationCard/itemList'
import { OrganizationFiltersListTab } from 'components/OrganisationCard/modules/listTab'

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
		variables: { searchQuery: `%${filters.query ?? ''}%` },
	})
	const organizationsData = useOrganizationsPaginationSubscription({
		variables: { first: bodyCount, orderBy: filters.sortOption, searchQuery: `%${filters.query ?? ''}%` },
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
									{t('button:ui:create')}
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
							<Typography fontWeight={700}>{t('page:organisations:no_organisations')}</Typography>
							<Typography>
								{t('page:organisations:no_result')} “{filters?.query}”.
								{t('page:organisations:try_checking')}
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
									{t('page:organisations:load_more')}
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
