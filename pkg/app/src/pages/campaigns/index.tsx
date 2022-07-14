import React, { useMemo, useState } from 'react'

import { Add, ArrowDownward } from '@mui/icons-material'
import { Box, Button, Container, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { CampaignsSortOptions } from 'src/@types/campaign'
import {
	Campaign,
	Campaign_Bool_Exp,
	Campaign_Order_By,
	useCampaignsPaginationCountSubscription,
	useCampaignsPaginationSubscription,
} from 'src/queries'

import { CampaignsList } from 'components/CampaignsSection/CampaignsList/campaignsList'
import { FiltersSection } from 'components/FiltersSections/filtersSection'
import { Layout } from 'components/Layouts/default/layout'
import { OrganizationFiltersListTab } from 'components/OrganisationCard/modules/listTab'

interface FiltersInterface {
	query: string
	sortOption: Campaign_Order_By | string
	filters: any
}
export function Campaigns() {
	const sortOptions = useMemo<CampaignsSortOptions[]>(
		() => [
			{
				key: 'target_asc',
				text: 'Funding Target: asc',
				value: "{ target: 'asc' }",
			},
			{
				key: 'target_desc',
				text: 'Funding Target: desc',
				value: "{ target: 'desc' }",
			},
			{
				key: 'current_funding_asc',
				text: 'Current Funding: asc',
				value: "{'campaign_contributors_aggregate': {'count': 'asc'}}",
			},
			{
				key: 'current_funding_desc',
				text: 'Current Funding: desc',
				value: "{'campaign_contributors_aggregate': {'count': 'desc'}}",
			},
			{
				key: 'contributors_funding_asc',
				text: 'Contributors: low-high',
				value: "{'campaign_contributors_aggregate': {'sum': {'contributed': 'asc'}}}",
			},
			{
				key: 'contributors_funding_desc',
				text: 'Contributors: high-low',
				value: "{'campaign_contributors_aggregate': {'sum': {'contributed': 'desc'}}}",
			},
			{
				key: 'alphabetical_asc',
				text: 'Alphabetical: asc',
				value: "{ 'campaign_metadata': { 'name': 'asc' } }",
			},
			{
				key: 'alphabetical_desc',
				text: 'Alphabetical: desc',
				value: "{ 'campaign_metadata': { 'name': 'desc' } }",
			},
			{
				key: 'time_left_asc',
				text: 'Time Left: asc',
				value: "{'expiry': 'asc'}",
			},
			{
				key: 'time_left_desc',
				text: 'Time Left: desc',
				value: "{'expiry': 'desc'}",
			},
		],
		[],
	)
	const [limit, setLimit] = useState(15)
	const [filters, setFilters] = useState<FiltersInterface>({
		query: '',
		sortOption: {},
		filters: {},
	})

	const queryFilters = useMemo<Campaign_Bool_Exp[]>(
		() => [
			{
				campaign_metadata: {
					_or: [
						{
							name: {
								_ilike: `%${filters.query ?? ''}%`,
							},
						},
						{
							title: {
								_ilike: `%${filters.query ?? ''}%`,
							},
						},
					],
				},
			},
		],
		[filters.query],
	)
	const { data, loading } = useCampaignsPaginationSubscription({
		variables: {
			limit,
			filters: queryFilters,
			order_by: filters.sortOption as Campaign_Order_By,
		},
	})
	const campaignsCount = useCampaignsPaginationCountSubscription({
		variables: { filters: queryFilters },
	})
	const paginatedData = useMemo<Campaign[]>(() => data?.campaign?.slice() as Campaign[], [data])
	const { t } = useTranslation()
	const buttonVisibility = useMemo(
		() => paginatedData?.length < campaignsCount?.data?.campaign_aggregate?.aggregate?.count,
		[paginatedData?.length, campaignsCount?.data],
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
								<Typography variant="h3">Campaigns</Typography>
							</Grid>
							<Grid item>
								<Button startIcon={<Add fontSize="small" />} variant="outlined">
									{t('button:ui:create')}
								</Button>
							</Grid>
						</Grid>
					</Box>
					<FiltersSection
						setFilters={setFilters}
						sortOptions={sortOptions}
						searchPlaceHolder={'Search Campaigns'}
						ListTab={OrganizationFiltersListTab}
					/>
					{paginatedData?.length === 0 && !loading && (
						<Box sx={{ mt: 2, mb: 4 }}>
							<Typography fontWeight={700}>No campaigns found</Typography>
							<Typography>
								No results found for “{filters.query}”. Try checking for typos or using a different
								term.
							</Typography>
						</Box>
					)}
					<Box sx={{ mt: 2, mb: 4 }}>
						<CampaignsList data={paginatedData} loading={loading} isAdmin={false} title={false} />
					</Box>
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
									onClick={() => setLimit((p) => p + 30)}
									variant="outlined"
								>
									{t('button:ui:load_more')}
								</Button>
							)}
							<Typography>
								Showing {paginatedData?.length} of{' '}
								{campaignsCount?.data?.campaign_aggregate?.aggregate.count} campaigns
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Layout>
	)
}

export default Campaigns
