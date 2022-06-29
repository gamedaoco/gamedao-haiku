import React, { useCallback, useEffect } from 'react'

import { Search } from '@mui/icons-material'
import { Grid, InputAdornment, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import { useOrganizationFeatures } from 'hooks/featureToggle/useOrganizationFeatures'
import { useDebouncedState } from 'hooks/useDebouncedState'
import { DisplayValueEntryString, Organization_Order_By } from 'src/queries'

import { FiltersTab } from 'components/OrganisationCard/modules/filtersTab'
import { SortOptionsTab } from 'components/OrganisationCard/modules/sortOptionsTab'

interface ComponentProps {
	setFilters: (x: string) => void
	setSortOption: (x: Organization_Order_By) => void
	sortOptions: DisplayValueEntryString[]
}

export function FiltersSection({ setFilters, setSortOption, sortOptions }: ComponentProps) {
	const enabledFeature = useOrganizationFeatures()
	const [searchInput, searchInputDebounced, setSearchInput] = useDebouncedState<string>(500, '')

	const handleSearchInputChange = useCallback(
		(event) => {
			setSearchInput(event.target.value)
		},
		[setSearchInput],
	)

	useEffect(() => {
		setFilters(searchInputDebounced)
	}, [searchInputDebounced])

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
						{enabledFeature.ORGANIZATION_PAGE_SHOW_SEARCH && (
							<TextField
								onChange={handleSearchInputChange}
								value={searchInput}
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
							{enabledFeature?.ORGANIZATION_PAGE_SHOW_FILTERS && <FiltersTab />}
							{enabledFeature?.ORGANIZATION_PAGE_SHOW_SORT && (
								<SortOptionsTab setSortOption={setSortOption} sortOptions={sortOptions} />
							)}
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
