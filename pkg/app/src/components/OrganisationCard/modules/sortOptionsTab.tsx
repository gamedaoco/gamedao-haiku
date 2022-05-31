import React, { useCallback } from 'react'

import { OrganizationOrderByInput } from '@gamedao-haiku/graphql/dist'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const SortOptionsTab = ({ sortOption, sortOptions, setSortOption }) => {
	const handleChange = useCallback(
		(event: SelectChangeEvent) => {
			setSortOption(event.target.value as OrganizationOrderByInput)
		},
		[setSortOption],
	)
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				marginLeft: 2,
				minWidth: 400,
			}}
		>
			<Typography sx={{ fontWeight: '700' }} variant={'body2'}>
				Sort By:
			</Typography>
			<Box>
				<FormControl
					fullWidth
					sx={{
						m: 1,
						'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
							border: 'none',
						},
					}}
					size="small"
				>
					<Select value={sortOption} onChange={handleChange}>
						{sortOptions.map((x) => (
							<MenuItem value={x.value} key={x.value}>
								{x.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</Box>
	)
}

export default SortOptionsTab
