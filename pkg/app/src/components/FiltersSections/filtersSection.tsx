import React, { useCallback, useEffect, useState } from 'react'

import { Search } from '@mui/icons-material'
import FilterListIcon from '@mui/icons-material/FilterList'
import { Drawer, Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useDebouncedState } from 'hooks/useDebouncedState'
import { DisplayValueEntryString, Organization_Order_By } from 'src/queries'

import { SortOptionsTab } from 'components/FiltersSections/sortOptionsTab'

interface ComponentProps {
	setFilters: (x: string | Organization_Order_By | any) => void
	sortOptions: DisplayValueEntryString[]
	searchPlaceHolder: string
	showSearch?: boolean
	showSort?: boolean
	showFilters?: boolean
	ListTab: React.FC<{ handleDrawerNavigation: () => void } | any>
}

export function FiltersSection({
	setFilters,
	sortOptions,
	searchPlaceHolder,
	showSort = true,
	showFilters = true,
	showSearch = true,
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
										<ListTab handleDrawerNavigation={handleDrawerNavigation} />
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
										<FilterListIcon fontSize={'small'} />
									</IconButton>
								</Box>
							)}
							{showSort && <SortOptionsTab setFilters={setFilters} sortOptions={sortOptions} />}
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
