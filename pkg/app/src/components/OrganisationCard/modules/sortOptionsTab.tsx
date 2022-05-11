import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'

const sortOptions = [
	{ value: 'hi-low', name: 'Member: High-Low' },
	{ value: 'featured', name: 'Featured' },
	{ value: 'newest', name: 'Newest' },
]
const SortOptionsTab = ({ classes }) => {
	const [sortOption, setSortOption] = useState(sortOptions[0].value)

	const handleChange = (event: SelectChangeEvent) => {
		console.log(event.target.value)
		setSortOption(event.target.value)
	}
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				marginLeft: 3,
			}}
		>
			<Typography sx={{ fontWeight: '700' }} variant={'body2'}>
				Sort By:
			</Typography>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth className={classes.formControl} size="small" sx={{ minWidth: 120 }}>
					<Select
						sx={{ fontSize: 14, color: '#919EAB' }}
						className={classes.menuItem}
						value={sortOption}
						onChange={handleChange}
					>
						{sortOptions.map((x) => (
							<MenuItem sx={{ color: '#919EAB', fontSize: 14, pl: 10 }} value={x.value} key={x.value}>
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
