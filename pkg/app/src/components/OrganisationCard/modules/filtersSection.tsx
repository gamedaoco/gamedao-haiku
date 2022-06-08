import React, { FC, useEffect, useMemo, useState } from 'react'

import { OrganizationOrderByInput, OrganizationPageFeatures } from '@gamedao-haiku/graphql/dist'
import { Search } from '@mui/icons-material'
import { Grid, InputAdornment, TextField } from '@mui/material'
import Box from '@mui/material/Box'

import FiltersTab from 'components/OrganisationCard/modules/filtersTab'
import SortOptionsTab from 'components/OrganisationCard/modules/sortOptionsTab'

interface SortOptionsInterface {
	name: String
	value: OrganizationOrderByInput
}
interface FiltersSectionPropsInterface {
	filters: string
	setFilters: (x: string) => void
	sortOption: OrganizationOrderByInput
	setSortOption: (x: OrganizationOrderByInput) => void
	sortOptions: SortOptionsInterface[]
	organizationPageFeatures: OrganizationPageFeatures
}

export const FiltersSection: FC<FiltersSectionPropsInterface> = ({
	filters,
	setFilters,
	sortOption,
	setSortOption,
	sortOptions,
	organizationPageFeatures,
}) => {
	const [features, setFeatures] = useState<OrganizationPageFeatures>({
		SHOW_SEARCH: true,
		SHOW_FILTERS: true,
		SHOW_SORT: true,
	})
	useEffect(() => {
		if (organizationPageFeatures) {
			setFeatures({ ...organizationPageFeatures })
		}
	}, [organizationPageFeatures])
	return (
		<Box
			sx={{
				m: -1,
				mt: 3,
			}}
		>
			<Box
				sx={{
					flexGrow: 1,
					m: 1.5,
				}}
			>
				<Grid container spacing={3}>
					<Grid item xs={12} md={4}>
						{features?.SHOW_SEARCH && (
							<TextField
								onChange={(e) => setFilters(e.target.value)}
								value={filters}
								id="outlined-basic"
								size="small"
								fullWidth
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<Search />
										</InputAdornment>
									),
								}}
								placeholder="Search Organisations…"
							/>
						)}
					</Grid>
					<Grid item xs={0} md={4}></Grid>
					<Grid item xs={12} md={4}>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								marginLeft: 1,
							}}
						>
							{features?.SHOW_FILTERS && <FiltersTab />}
							{features?.SHOW_SORT && (
								<SortOptionsTab
									sortOption={sortOption}
									setSortOption={setSortOption}
									sortOptions={sortOptions}
								/>
							)}
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
