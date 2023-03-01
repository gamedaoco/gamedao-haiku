import React, { useCallback } from 'react'
import { GRADIENT } from '../styles'
import { transform } from '../content'
import { Grid, Paper, Typography, Card } from '@mui/material'
import { List, ListItem, ListItemIcon } from '@mui/material'
import { Hero, Team, Partners, Supporters } from './'

export const Transform = () => (
	<Paper sx={{ p: [2, 4], my: 4, height: '100%' }} elevation={0} variant="glass">
		<Grid container spacing={[2, 4]}>
			<Grid key={'title'} container item xs={12} direction="row">
				<Typography variant={'hero1'}>{transform.title} </Typography>
			</Grid>
			{transform.content.map((item, i) => {
				return (
					<Grid key={i} container item xs={12} sm={6} lg={4} direction="column">
						<Card sx={{ border: 0, boxShadow: 0, p: 0, m: 0, background: 'none', height: '100%' }}>
							<Typography variant={'hero2'} pb={2}>
								{item.title}{' '}
							</Typography>
							<List>
								{item.content.map((listItem, j) => {
									return (
										<ListItem key={j} sx={{ p: 0 }}>
											<Typography variant={'body1'} pb={1}>
												· {`${listItem}`}{' '}
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
