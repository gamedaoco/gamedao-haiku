import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { useExtensionContext } from 'providers/extension/modules/context'
import { useOrganizationFeatures } from 'hooks/featureToggle/useOrganizationFeatures'
import {
	Organization,
	Organization_Order_By,
	useDisplayValuesQuery,
	useOrganizationsPaginationCountSubscription,
	useOrganizationsPaginationSubscription,
} from 'src/queries'

import { Layout } from 'layouts/v2'

import { Add, ArrowDownward } from '@mui/icons-material'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

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

	const [filters, setFilters] = useState<FiltersInterface>({
		query: '',
		sortOption: null,
		filters: {},
	})
	const [bodyCount, setBodyCount] = useState<number>(15)

	const enabledFeature = useOrganizationFeatures()
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
	const { w3Enabled, connectWallet, selectedAccount } = useExtensionContext()

	const buttonVisibility = useMemo(
		() => paginatedData?.length < organizationsCount?.data?.organization_aggregate?.aggregate?.count,
		[paginatedData?.length, organizationsCount?.data],
	)

	const handleClickCreate = useCallback(() => {
		if (w3Enabled === false) {
			connectWallet()
		} else if (selectedAccount) {
			push('/organizations/create')
		}
	}, [w3Enabled, connectWallet, selectedAccount, push])

	return (
		<Layout showHeader showFooter showSidebar title={t('page:organisations:title')}>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">{'Organizations'}</Typography>
					</Grid>
					<Grid item>
						<Button startIcon={<Add fontSize="small" />} variant="outlined" onClick={handleClickCreate}>
							{t('button:ui:create')}
						</Button>
					</Grid>
				</Grid>
				<Grid item>
					<Typography variant="body1" sx={{ maxWidth: { sx: '100%', md: '75%', lg: '50%' } }}>
						Join existing organizations to take part in their governance. Create an organization and operate
						it any way you want — as an individual or collective, with your company, team or community.
					</Typography>
				</Grid>
			</Box>

			{organizationsCount?.data?.organization_aggregate?.aggregate.count > 0 ? (
				<>
					<FiltersSection
						setFilters={setFilters}
						filters={filters.filters}
						sortOptions={data?.displayValues?.organizationSortOptions?.concat([])}
						showFilters={enabledFeature?.ORGANIZATION_PAGE_SHOW_FILTERS}
						showSearch={enabledFeature?.ORGANIZATION_PAGE_SHOW_SEARCH}
						showSort={enabledFeature?.ORGANIZATION_PAGE_SHOW_SORT}
						searchPlaceHolder={'Find Organizations'}
						ListTab={OrganizationFiltersListTab}
					/>

					{paginatedData?.length === 0 && !loading && (
						<Box sx={{ mb: 4 }}>
							<Typography fontWeight={700}>{t('page:organisations:no_organisations')}</Typography>
							<Typography>{t('page:organisations:no_result', { query: filters?.query })}</Typography>
						</Box>
					)}

					<Box sx={{ mb: 4 }}>
						<ItemList items={paginatedData} loading={loading} />
					</Box>

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
									{t('page:organisations:showing_results', {
										count1: paginatedData?.length,
										count2: organizationsCount?.data?.organization_aggregate?.aggregate.count,
									})}
								</Typography>
							</Box>
						</Box>
					</Box>
				</>
			) : (
				<>No Organisations yet — why not create one?</>
			)}
		</Layout>
	)
}

export default OrganisationPage
