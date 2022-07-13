import React, { useCallback, useEffect } from 'react'

import { Search } from '@mui/icons-material'
import { Grid, InputAdornment, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import { useDebouncedState } from 'hooks/useDebouncedState'
import { DisplayValueEntryString, Organization_Order_By } from 'src/queries'

import { FiltersTab } from 'components/filtersSections/filtersTab'
import { SortOptionsTab } from 'components/filtersSections/sortOptionsTab'

interface ComponentProps {
	setFilters: (x: string) => void
	setSortOption: (x: Organization_Order_By) => void
	sortOptions: DisplayValueEntryString[]
	searchPlaceHolder: string
	showSearch?: boolean
	showSort?: boolean
	showFilters?: boolean
}

export function FiltersSection({
	setFilters,
	setSortOption,
	sortOptions,
	searchPlaceHolder,
	showSort = true,
	showFilters = true,
	showSearch = true,
}: ComponentProps) {
	const [searchInput, searchInputDebounced, setSearchInput] = useDebouncedState<string>(500, '')

	const handleSearchInputChange = useCallback(
		(event) => {
			setSearchInput(event.target.value)
		},
		[setSearchInput],
	)

	useEffect(() => {
		setFilters(searchInputDebounced)
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
							{showFilters && <FiltersTab />}
							{showSort && <SortOptionsTab setSortOption={setSortOption} sortOptions={sortOptions} />}
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
