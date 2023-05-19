import React, { useCallback } from 'react'
import { Box, Grid, Card, Paper, Typography, Button, Stack } from '@mui/material'
import { styled } from '@mui/system'

import { GRADIENT } from '../styles'
import { coreteam } from '../content'

import { Item, Title, Headline } from '.'

export const Team = (openUrl) => (
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
			Our team is continuosly growing around the globe with professionals from gaming, esports, startups, finance
			and web3. Take the chance and Join us!
		</Typography>

		<Grid container>
			{coreteam.map((person, index) => (
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

		<Stack direction="row" justifyContent="end" spacing={4}>
			<Button size="small" variant="outlined">
				Join us
			</Button>
		</Stack>
	</Stack>
)
