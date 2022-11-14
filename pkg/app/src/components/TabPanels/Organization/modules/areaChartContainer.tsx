import React from 'react'

import { NorthEast } from '@mui/icons-material'
import { Box, Paper, Stack, Typography } from '@mui/material'

import { AreaChart } from 'components/Charts/areaChart'

interface ComponentProps {
	title: string
	total: number | string
	increase: number
	series: any
	categories: any
}

export function AreaChartContainer({ title, total, increase, series, categories }: ComponentProps) {
	return (
		<Paper sx={{ maxHeight: '210px' }} variant={'glass'}>
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
					<AreaChart categories={categories} series={series} height={130} />
				</Stack>
			</Stack>
		</Paper>
	)
}
