import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'

const sortOptions = [
	{ value: 'low-hi', name: 'Member: High-Low' },
	{ value: 'hi-low', name: 'Member: Low-High' },
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
				flexGrow: 1,
				display: 'flex',
				justifyContent: 'space-evenly',
				alignItems: 'center',
			}}
		>
			<Typography sx={{ fontWeight: '700' }} variant={'body2'}>
				Sort By:
			</Typography>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth className={classes.formControl} size="small" sx={{ m: 1, minWidth: 120 }}>
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
