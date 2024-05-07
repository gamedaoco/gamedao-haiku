import React, { useCallback } from 'react'
import { GRADIENT } from '../styles'
import { intro } from '../content'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { Hero, Team, Partners, Supporters } from '.'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export const Introcordion = () => (
	<Container maxWidth="lg" sx={{ my: '2rem', backgroundColor: '#transparent', height: '100%' }}>
		{/* <Paper sx={{ mx: '2rem', backgroundColor: '#111', height: '100%' }} elevation={0}> */}
		<Grid container spacing={[0, 2, 4]} pt={[0, 2]}>
			{/* <Grid container item xs={12} md={6} direction="column"> */}
			{intro.map((item, i) => {
				return (
					<Accordion key={i}>
						<AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="intro-content" id="intro-header">
							<Typography>{item.header}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>{item.text}</Typography>
						</AccordionDetails>
					</Accordion>
				)
			})}
			{/* </Grid> */}
			{/* <Grid container item xs={12} md={6} direction="column"> */}
			{/* <Typography variant={'body1'} sx={{ mt: 2 }}>
					By reinforcing the foundation of GameDAO with these principles, we establish ourselves as a pioneering, community-driven publisher for new
					and experienced content creators in the gaming industry.
				</Typography> */}
			{/* </Grid> */}
		</Grid>
		{/* </Paper> */}
	</Container>
)
