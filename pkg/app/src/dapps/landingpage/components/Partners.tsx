import React, { useCallback } from 'react'
import { Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'

import { GRADIENT } from '../styles'
import { partners } from '../content'

import { Item } from './Item'

export const Partners = (openUrl) => (
	<Stack component={Paper} elevation={0} spacing={4} padding={4} marginY={4} sx={{ backgroundColor: 'transparent' }}>
		<Typography
			variant="h3"
			sx={{
				background: GRADIENT.blue,
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				fontWeight: 800,
				lineHeight: '100%',
			}}
		>
			Supported by bleeding edge innovators in gaming, esports and the decentralized web.
		</Typography>

		<Grid container>
			{partners.map((person, index) => (
				<Grid item xs={6} sm={4} md={3} lg={2} pt={2} key={index}>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: { xl: '1fr 1fr' },
						}}
					>
						<Item>
							{' '}
							{person[0]} <br /> {person[1]}{' '}
						</Item>
					</Box>
				</Grid>
			))}
		</Grid>
	</Stack>
)
