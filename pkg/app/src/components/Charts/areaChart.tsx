import { useMemo } from 'react'

import { alpha, useTheme } from '@mui/material/styles'
import { ApexOptions } from 'apexcharts'

import { Chart } from './chart'

interface ComponentProps {
	categories: any
	series: any
	height: number
	width?: number
	options?: any
}

export function AreaChart({ categories, series, height, options = null }: ComponentProps) {
	const theme = useTheme()

	const chartOptions: ApexOptions = useMemo(
		() =>
			options || {
				chart: {
					background: 'transparent',
					stacked: false,
					toolbar: {
						show: false,
					},
				},
				colors: [theme.palette.primary.main],
				dataLabels: {
					enabled: false,
				},
				fill: {
					colors: [alpha(theme.palette.primary.main, 0.2)],
				},
				grid: {
					borderColor: 'transparent',
					strokeDashArray: 0,
				},
				stroke: {
					curve: 'smooth',
				},
				theme: {
					mode: theme.palette.mode,
				},
				xaxis: {
					type: 'datetime',
					axisBorder: {
						show: false,
					},
					axisTicks: {
						show: false,
					},
					categories: categories,

					labels: {
						show: false,
					},
				},
				tooltip: {
					x: {
						format: 'dd/MM/yy',
					},
				},
				yaxis: {
					show: false,
				},
			},
		[categories],
	)

	return <Chart options={chartOptions} height={height} series={series} type="area" />
}
