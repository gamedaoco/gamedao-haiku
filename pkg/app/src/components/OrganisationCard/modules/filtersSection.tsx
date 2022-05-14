import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Grid, InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import FiltersTab from 'components/OrganisationCard/modules/filtersTab'
import SortOptionsTab from 'components/OrganisationCard/modules/sortOptionsTab'
import { OrganizationOrderByInput } from '@gamedao-haiku/graphql/dist'

interface SortOptionsInterface {
	name: String
	value: OrganizationOrderByInput
}
interface FiltersSectionPropsInterface {
	filters: string
	setFilters: (x: string) => void
	sortOption: OrganizationOrderByInput
	setSortOption: (x: OrganizationOrderByInput) => void
	sortOptions: SortOptionsInterface[]
}

const useStyles = makeStyles({
	field: {
		'& fieldset': {
			borderRadius: 8,
		},
	},
	dropdownStyle: {
		// '&::before': {
		// 	content: '',
		// 	display: 'block',
		// 	position: 'absolute',
		// 	left: 140,
		// 	bottom: '100%',
		// 	width: 0,
		// 	height: 0,
		// 	border: '10px solid transparent',
		// 	borderBottomColor: 'black',
		// },

		// '&::after': {
		// 	content: '',
		// 	position: 'absolute',
		// 	left: 0,
		// 	right: 0,
		// 	margin: '0 auto',
		// 	width: 0,
		// 	height: 0,
		// 	borderTop: '25px solid #6A0136',
		// 	borderLeft: '50px solid transparent',
		// 	borderRight: '50px solid transparent',
		// },
		borderRadius: '7%',
		backgroundColor: '#212B36',
		width: 150,
		padding: 1,
		fontSize: 14,
		color: '#919EAB',

		'& .MuiMenuItem-root': {
			paddingBottom: 20,
			fontSize: 14,
			width: 200,
			color: '#919EAB',
		},
	},
	formControl: {
		m: 1,

		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			border: 'none',
			color: 'white',
		},
		'& .MuiSvgIcon-root': {
			color: 'white',
		},
	},
})

export const FiltersSection: FC<FiltersSectionPropsInterface> = ({
	filters,
	setFilters,
	sortOption,
	setSortOption,
	sortOptions,
}) => {
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
								marginLeft: 1,
							}}
						>
							<FiltersTab />
							<SortOptionsTab
								classes={classes}
								sortOption={sortOption}
								setSortOption={setSortOption}
								sortOptions={sortOptions}
							/>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
