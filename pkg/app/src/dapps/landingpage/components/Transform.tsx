import React, { useCallback } from 'react'
import { GRADIENT } from '../styles'
import { transform } from '../content'
import { Grid, Paper, Typography, Card } from '@mui/material'
import { List, ListItem, ListItemIcon } from '@mui/material'
import { Hero, Team, Partners, Supporters } from './'

export const Transform = () => (
	<Paper sx={{ px: '2rem', backgroundColor: 'transparent', height: '100%' }} elevation={0}>
		<Grid container spacing={[0, 2, 4]} pt={[0, 2]}>
			<Grid key={'title'} container item xs={12} direction="row">
				<Typography variant={'h3'} py={2}>
					{transform.title}{' '}
				</Typography>
			</Grid>
			{transform.content.map((item, i) => {
				return (
					<Grid key={i} container item xs={12} sm={4} direction="column">
						<Card sx={{ boxShadow: 0, p: 0, m: 0, background: 'none', height: '100%' }}>
							<Typography variant={'h4'} pb={2}>
								{item.title}{' '}
							</Typography>
							<List>
								{item.content.map((listItem, j) => {
									return (
										<ListItem key={j} sx={{ p: 0 }}>
											<Typography variant={'body1'} pb={2}>
												{`${listItem}`}{' '}
											</Typography>
										</ListItem>
									)
								})}
							</List>
						</Card>
					</Grid>
				)
			})}
		</Grid>
	</Paper>
)
