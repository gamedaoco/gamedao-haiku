import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { createSvgIcon, FormControl, Grid, InputAdornment, Select, SelectChangeEvent, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import FilterListIcon from '@mui/icons-material/FilterList'
import { makeStyles } from '@mui/styles'

const SearchIcon = createSvgIcon(
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
		={' '}
		<path
			fillRule="evenodd"
			d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
			clipRule="evenodd"
		/>
	</svg>,
	'Search',
)
const sortOptions = [
	{ value: 'low-hi', name: 'Member: High-Low' },
	{ value: 'hi-low', name: 'Member: Low-High' },
]

const FiltersSection = () => {
	const [sortOption, setSortOption] = useState(sortOptions[0].value)

	const handleChange = (event: SelectChangeEvent) => {
		console.log(event.target.value)
		setSortOption(event.target.value)
	}
	const useStyles = makeStyles({
		field: {
			'& fieldset': {
				borderRadius: 8,
			},
		},
		formControl: {
			m: 1,
			minWidth: 120,
			'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
				border: 'none',
			},
		},
	})
	const classes = useStyles()
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
						<TextField
							id="outlined-basic"
							size="small"
							className={classes.field}
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon fontSize="small" />
									</InputAdornment>
								),
							}}
							placeholder="Search Organisations…"
						/>
					</Grid>
					<Grid item xs={0} md={4}></Grid>
					<Grid item xs={12} md={4}>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
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
									<FormControl
										fullWidth
										className={classes.formControl}
										size="small"
										sx={{ m: 1, minWidth: 120 }}
									>
										<Select value={sortOption} onChange={handleChange}>
											{sortOptions.map((x) => (
												<option value={x.value} key={x.value}>
													{x.name}
												</option>
											))}
										</Select>
									</FormControl>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default FiltersSection
