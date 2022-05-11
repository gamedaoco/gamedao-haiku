import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Grid, InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import FiltersTab from 'components/OrganisationCard/modules/filtersTab'
import SortOptionsTab from 'components/OrganisationCard/modules/sortOptionsTab'

interface FiltersSectionPropsInterface {
	filters: string
	setFilters: (x: string) => void
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
			color: 'white',
		},
		'& .MuiSvgIcon-root': {
			color: 'white',
		},
	},
})

export const FiltersSection: FC<FiltersSectionPropsInterface> = ({ filters, setFilters }) => {
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
							onChange={(e) => setFilters(e.target.value)}
							value={filters}
							id="outlined-basic"
							size="small"
							className={classes.field}
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
					</Grid>
					<Grid item xs={0} md={4}></Grid>
					<Grid item xs={12} md={4}>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								marginLeft: 2,
							}}
						>
							<FiltersTab />
							<SortOptionsTab classes={classes} />
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
