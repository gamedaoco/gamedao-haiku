import React, { useCallback } from 'react'
import { GRADIENT } from '../styles'
import { intro } from '../content'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { Hero, Team, Partners, Supporters } from '.'

export const Intro = () => (
	<Container maxWidth="xl" disableGutters sx={{ mb: '2rem', backgroundColor: '#transparent', height: '100%' }}>
		{/* <Paper sx={{ mx: '2rem', backgroundColor: '#111', height: '100%' }} elevation={0}> */}
		<Grid container spacing={[0, 2, 4]} pt={[0, 2]}>
			{intro.map((item, i) => {
				return (
					<Grid key={i} container item xs={12} md={4} direction="column">
						<Typography variant={'h3'} py={2}>
							{' '}
							{item.header}{' '}
						</Typography>
						<Typography variant={'body1'} pb={2}>
							{' '}
							{item.text}{' '}
						</Typography>
					</Grid>
				)
			})}
		</Grid>
		{/* </Paper> */}
	</Container>
)
