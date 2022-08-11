import React from 'react'

import { Stack, Typography } from '@mui/material'

import { RadialChart } from 'components/Charts/radialBar'

interface ComponentProps {
	color: string
	series: any
}

export function RadialChartContainer({ color, series }: ComponentProps) {
	return (
		<Stack direction={{ xs: 'column', md: 'row' }} width="50%">
			<Stack
				direction="row"
				width={{ md: '50%' }}
				justifyContent="flex-end"
				alignItems="center"
				position="relative"
				left={{ md: 20 }}
				bottom={{ xs: 15, md: 0 }}
			>
				<RadialChart color={color} series={series} />
			</Stack>
			<Stack
				direction="column"
				width={{ md: '50%' }}
				justifyContent="center"
				alignItems="center"
				position="relative"
				bottom={{ xs: 30, md: 0 }}
			>
				<Typography variant="h4">62</Typography>
				<Typography variant="body2">Funded</Typography>
			</Stack>
		</Stack>
	)
}
