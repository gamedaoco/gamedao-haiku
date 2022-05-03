import React from 'react'
import Typography from '@mui/material/Typography'
import FilterListIcon from '@mui/icons-material/FilterList'
import Box from '@mui/material/Box'

const FiltersTab = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
			}}
		>
			<Typography sx={{ fontWeight: '700' }} variant={'body2'}>
				Filters
			</Typography>
			<FilterListIcon fontSize={'small'} sx={{ ml: 1 }} />
		</Box>
	)
}

export default FiltersTab
