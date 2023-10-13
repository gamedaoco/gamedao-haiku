import React, { useCallback, useEffect, useState } from 'react'

import { FilterList, Search } from '@mui/icons-material'
import { Box, Drawer, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useDebouncedState } from 'src/hooks/useDebouncedState'
import { CampaignFiltersInterface } from 'src/@types/campaign'
import { Campaign_Bool_Exp, DisplayValueEntryString, Organization_Order_By } from 'src/queries'

import { SortOptionsTab } from 'src/components/FiltersSections/sortOptionsTab'

interface ComponentProps {
	setFilters: (x: string | Organization_Order_By | any) => void
	sortOptions: DisplayValueEntryString[]
	filters?: CampaignFiltersInterface
	searchPlaceHolder: string
	showSearch?: boolean
	showSort?: boolean
	showFilters?: boolean
	filtersOptions?: DisplayValueEntryString[]
	ListTab: React.FC<{ handleDrawerNavigation: () => void; filters?: Campaign_Bool_Exp[] } | any>
	defaultOption?: string
}

export function FiltersSection({
	setFilters,
	sortOptions,
	filters,
	searchPlaceHolder,
	showSort = true,
	showFilters = true,
	showSearch = true,
	filtersOptions,
	defaultOption,
	ListTab,
}: ComponentProps) {
	const [searchInput, searchInputDebounced, setSearchInput] = useDebouncedState<string>(500, '')
	const [openDrawer, setOpenDrawer] = useState(false)
	const handleDrawerNavigation = () => setOpenDrawer((prevState) => !prevState)

	const handleSearchInputChange = useCallback(
		(event) => {
			setSearchInput(event.target.value)
		},
		[setSearchInput],
	)

	useEffect(() => {
		setFilters((prev) => ({ ...prev, query: searchInputDebounced }))
	}, [searchInputDebounced, setFilters])

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
						{showSearch && (
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
								placeholder={searchPlaceHolder}
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
							{showFilters && (
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-around',
										alignItems: 'center',
									}}
								>
									<Drawer anchor={'right'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
										<ListTab
											handleDrawerNavigation={handleDrawerNavigation}
											setFilters={setFilters}
											filters={filters.filters}
											filtersOptions={filtersOptions}
										/>
									</Drawer>
									<Typography sx={{ fontWeight: '700' }} variant={'body2'}>
										Filters
									</Typography>
									<IconButton
										aria-label="filters"
										onClick={handleDrawerNavigation}
										color="inherit"
										sx={{ ml: 1 }}
									>
										<FilterList fontSize={'small'} />
									</IconButton>
								</Box>
							)}
							{showSort && (
								<SortOptionsTab
									setFilters={setFilters}
									sortOptions={sortOptions}
									defaultOption={defaultOption}
								/>
							)}
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
