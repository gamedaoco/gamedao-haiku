import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { OrganizationOrderByInput } from '@gamedao-haiku/graphql/dist'
import { DisplaySettings } from '@mui/icons-material'

const SortOptionsTab = ({ classes, sortOption, sortOptions, setSortOption }) => {
	const handleChange = (event: SelectChangeEvent) => {
		setSortOption(event.target.value as OrganizationOrderByInput)
	}
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
				<FormControl fullWidth className={classes.formControl} size="small">
					<Select
						className={classes.PaperProps}
						value={sortOption}
						onChange={handleChange}
						MenuProps={{ classes: { paper: classes.dropdownStyle } }}
					>
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
