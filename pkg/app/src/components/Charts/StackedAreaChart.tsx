import { useMemo } from 'react'

import { alpha, useTheme } from '@mui/material/styles'
import { ApexOptions } from 'apexcharts'

import { Chart } from './chart'

interface ComponentProps {
	categories?: any
	series: any
	height: number
	width?: number
	options?: any
}

export function StackedAreaChart({ categories, series, height, options = null }: ComponentProps) {
	// console.log( categories, series )

	const theme = useTheme()

	const chartOptions: ApexOptions = {
		chart: {
			background: 'transparent',
			stacked: false,
			toolbar: { show: false },
		},
		// colors: [
		// 	theme.palette.info.main,
		// 	theme.palette.secondary.main,
		// 	theme.palette.primary.main,
		// ],
		dataLabels: { enabled: false },
		fill: {
			colors: [
				alpha(theme.palette.primary.main, 0.2),
				alpha(theme.palette.secondary.main, 0.2),
				alpha(theme.palette.info.main, 0.2),
			],
		},
		grid: { borderColor: 'transparent', strokeDashArray: 0 },
		stroke: { width: 1, curve: 'smooth' },
		theme: { mode: theme.palette.mode },
		xaxis: {
			type: 'number',
			axisBorder: { show: false },
			axisTicks: { show: true },
			categories: categories,
			labels: { show: false },
		},
		tooltip: { x: { format: 'dd/MM/yy' } },
		yaxis: [{ show: false }],
	}

	return <Chart options={chartOptions} series={series} type="area" height={250} />
}
