import React from 'react'

import { NorthEast } from '@mui/icons-material'
import { Box, Paper, Stack, Typography } from '@mui/material'

import { AreaChart } from 'components/Charts/areaChart'

interface ComponentProps {
	title: string
	total: string
	increase: number
}
const series = [
	{
		name: 'members',
		data: [0, 7, 3, 8, 2],
	},
]

export function ChartContainer({ title, total, increase }: ComponentProps) {
	const chartSeries = series

	const categories = [
		'2022-07-19T00:00:00.000Z',
		'2022-07-20T01:30:00.000Z',
		'2022-07-21T02:30:00.000Z',
		'2022-07-22T03:30:00.000Z',
		'2022-07-23T04:30:00.000Z',
	]

	return (
		<Paper sx={{ maxHeight: '210px' }}>
			<Stack direction="row" justifyContent="space-between" p={3}>
				<Stack direction="column">
					<Typography variant="subtitle1">{title}</Typography>
					<Typography variant="h3">{total}</Typography>
					<Stack direction="row" spacing={1}>
						<Typography variant="subtitle2" color="white">
							{increase}%
						</Typography>
						<Typography variant="body2">in the last 30 days</Typography>
					</Stack>
				</Stack>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					sx={{ backgroundColor: '#A4D808' }}
					borderRadius={100}
					width={48}
					height={48}
				>
					<NorthEast sx={{ color: '#22201F' }} />
				</Box>
			</Stack>

			<Stack direction="row" position="relative" left="0.6rem" bottom={{ xs: '2.3rem', md: '3rem' }} height={80}>
				<Stack width="20%"></Stack>
				<Stack width="80%">
					<AreaChart categories={categories} series={chartSeries} height={130} />
				</Stack>
			</Stack>
		</Paper>
	)
}
