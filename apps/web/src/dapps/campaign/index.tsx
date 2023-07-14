import { ArrowDownward } from '@mui/icons-material'
import { Box, Button, Container, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Loader } from 'components/Loader'
import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CampaignFiltersInterface } from 'src/@types/campaign'
import { CampaignsList } from 'src/components/CampaignsList/campaignsList'
import { CampaignFiltersTab } from 'src/components/CampaignsSection/CampaignFilters/CampaignFiltersTab'
import { FiltersSection } from 'src/components/FiltersSections/filtersSection'
import {
	Campaign,
	CampaignBoolExp,
	CampaignOrderBy,
	DisplayValueEntryString,
	useCampaignsPaginationCountSubscription,
	useCampaignsPaginationSubscription,
	useDisplayValuesQuery,
} from 'src/queries'

export function CampaignDApp() {
	const { t } = useTranslation()

	// const { data: displayValuesData } = useDisplayValuesQuery()
	const [limit, setLimit] = useState(15)
	const [filters, setFilters] = useState<CampaignFiltersInterface>({
		query: '',
		sortOption: {},
		filters: [],
	})

	// const filtersOptions = useMemo<DisplayValueEntryString[]>(
	// 	() =>
	// 		displayValuesData?.gamedao?.displayValues?.campaignFilters?.map((x) => ({
	// 			...x,
	// 			value: eval(`(${x?.value ?? 'null'})`),
	// 		})),
	// 	[displayValuesData],
	// )
	// // useEffect(() => {
	// // 	if (filtersOptions) {
	// // 		setFilters((prev) => ({
	// // 			...prev,
	// // 			filters: filtersOptions
	// // 				?.filter((x) => x?.key !== 'state_failed')
	// // 				?.map((x) => JSON.parse(JSON.stringify(x?.value))),
	// // 		}))
	// // 	}
	// // }, [filtersOptions, setFilters])

	const queryFilters = useMemo<CampaignBoolExp[]>(
		() => [
			{
				_and: [
					filters.filters.length ? { _or: [...filters.filters] as CampaignBoolExp[] } : {},
					{
						_or: [
							{
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
							{
								organization: {
									name: {
										_ilike: `%${filters.query ?? ''}%`,
									},
								},
							},
						],
					},
				],
			},
		],
		[filters.filters, filters.query],
	)

	const { data, loading } = useCampaignsPaginationSubscription({
		variables: {
			limit,
			filters: queryFilters,
			orderBy: filters.sortOption as CampaignOrderBy,
		},
	})
	const campaignsCount = useCampaignsPaginationCountSubscription({
		variables: { filters: queryFilters },
	})
	const paginatedData = useMemo<Campaign[]>(() => data?.campaign?.slice() as Campaign[], [data])

	const buttonVisibility = useMemo(
		() => paginatedData?.length < campaignsCount?.data?.campaignAggregate?.aggregate?.count,
		[paginatedData?.length, campaignsCount?.data],
	)

	if (loading) return <Loader />

	if (campaignsCount?.data?.campaignAggregate?.aggregate.count === 0)
		return <Fragment>No Campaigns yet — why not create one!</Fragment>

	// <FiltersSection
	// 	setFilters={setFilters}
	// 	filters={filters}
	// 	sortOptions={displayValuesData?.gamedao?.displayValues?.campaignSortOptions?.concat([])}
	// 	searchPlaceHolder={t('label:search_campaigns')}
	// 	ListTab={CampaignFiltersTab}
	// 	filtersOptions={filtersOptions}
	// 	defaultOption={'time_left_desc'}
	// />

	return (
		<Fragment>
			{paginatedData?.length === 0 && !loading && (
				<Box sx={{ mt: 2, mb: 4 }}>
					<Typography fontWeight={700}>{t('page:campaigns:no_campaigns')}</Typography>
					{filters.query && (
						<Typography>{t('page:campaigns:no_result', { query: filters.query })}</Typography>
					)}
				</Box>
			)}

			<Box sx={{ mt: 2, mb: 4 }}>
				<CampaignsList loading={loading} campaigns={paginatedData} />
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
								onClick={() => setLimit((p) => p + 30)}
								variant="outlined"
							>
								{t('button:ui:load_more')}
							</Button>
						)}
						<Typography>
							{t('page:campaigns:showing_results', {
								count1: paginatedData?.length,
								count2: campaignsCount?.data?.campaignAggregate?.aggregate.count,
							})}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Fragment>
	)
}
