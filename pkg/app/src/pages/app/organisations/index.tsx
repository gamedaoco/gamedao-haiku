import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ItemList } from 'components/OrganisationCard/itemList'
import { Layout } from 'src/layouts/default/layout'
import { Body, useBodiesQuery } from '@gamedao-haiku/graphql/dist'
import { Button, Container, createSvgIcon, Grid, InputAdornment, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import FilterListIcon from '@mui/icons-material/FilterList'

const PlusIcon = createSvgIcon(
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
		<path
			fillRule="evenodd"
			d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
			clipRule="evenodd"
		/>
	</svg>,
	'Plus',
)

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

export function OrganisationPage() {
	const useStyles = makeStyles({
		field: {
			'& fieldset': {
				borderRadius: 8,
			},
		},
	})
	const classes = useStyles()
	const { loading, error, data } = useBodiesQuery()
	useEffect(() => {
		if (error) {
			console.error('There is an error when querying the display values')
		}
	}, [error])

	return (
		<Layout showHeader showFooter showSidebar title="Organisation">
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<Container maxWidth="xl">
					<Box sx={{ mb: 4 }}>
						<Grid container justifyContent="space-between" spacing={3}>
							<Grid item>
								<Typography variant="h3">Organisations</Typography>
							</Grid>
							<Grid item>
								<Button
									startIcon={<PlusIcon fontSize="small" />}
									sx={{ color: '#919EAB', borderColor: '#919EAB', borderRadius: 2 }}
									variant="outlined"
								>
									Create
								</Button>
							</Grid>
						</Grid>
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
									<Grid item xs={0} md={5}></Grid>
									<Grid item xs={12} md={3}>
										<Box
											sx={{
												display: 'flex',
												justifyContent: 'space-evenly',
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
													display: 'flex',
													justifyContent: 'space-between',
													alignItems: 'center',
												}}
											>
												{/*	TODO Sort Options*/}
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Box>
					<ItemList items={data?.bodies?.slice() as Body[]} loading={loading}></ItemList>
				</Container>
			</Box>
		</Layout>
	)
}

export default OrganisationPage
