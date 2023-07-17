import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CampaignFiltersInterface } from 'src/@types/campaign'
import {
	Campaign,
	CampaignBoolExp,
	CampaignOrderBy,
	DisplayValueEntryString,
	useCampaignsPaginationCountSubscription,
	useCampaignsPaginationSubscription,
	useDisplayValuesQuery,
} from 'src/queries'

import { CampaignFiltersTab } from 'src/components/CampaignsSection/CampaignFilters/CampaignFiltersTab'
import { FiltersSection } from 'src/components/FiltersSections/filtersSection'

export function FilterBar() {
	const { t } = useTranslation()

	const { data: displayValuesData } = useDisplayValuesQuery()

	const [filters, setFilters] = useState<CampaignFiltersInterface>({
		query: '',
		sortOption: {},
		filters: [],
	})

	const filtersOptions = useMemo<DisplayValueEntryString[]>(
		() =>
			displayValuesData?.gamedao?.displayValues?.campaignFilters?.map((x) => ({
				...x,
				value: eval(`(${x?.value ?? 'null'})`),
			})),
		[displayValuesData],
	)

	useEffect(() => {
		if (filtersOptions) {
			setFilters((prev) => ({
				...prev,
				filters: filtersOptions
					?.filter((x) => x?.key !== 'state_failed')
					?.map((x) => JSON.parse(JSON.stringify(x?.value))),
			}))
		}
	}, [filtersOptions, setFilters])

	return (
		<FiltersSection
			setFilters={setFilters}
			filters={filters}
			sortOptions={displayValuesData?.gamedao?.displayValues?.campaignSortOptions?.concat([])}
			searchPlaceHolder={t('label:search_campaigns')}
			ListTab={CampaignFiltersTab}
			filtersOptions={filtersOptions}
			defaultOption={'time_left_desc'}
		/>
	)
}
