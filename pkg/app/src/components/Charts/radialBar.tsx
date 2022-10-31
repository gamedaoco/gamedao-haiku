import { useTheme } from '@mui/material/styles'
import type { ApexOptions } from 'apexcharts'

import { Chart } from './chart'

interface ComponentProps {
	colors: string[]
	labels?: string[]
	series: any
	height?: number
	plotOptions?: any
	stroke?: any
}

export function RadialChart({ colors, series, labels, height = 160, plotOptions = {}, stroke = {} }: ComponentProps) {
	const theme = useTheme()

	const chartOptions: ApexOptions = {
		chart: {
			background: 'transparent',
			stacked: false,
			toolbar: {
				show: false,
			},
		},
		colors: colors,
		fill: {
			opacity: 1,
		},
		stroke: stroke,
		labels: labels || [],
		plotOptions: {
			radialBar: {
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						offsetY: 5,
						fontWeight: theme.typography.fontWeightBold,
						color: theme.palette.common.white,
					},
				},
				hollow: {
					size: '55%',
				},
				track: {
					background: theme.palette.background.default,
				},
			},
			...plotOptions,
		},
		theme: {
			mode: theme.palette.mode,
		},
	}

	return <Chart height={height} options={chartOptions} series={series} type="radialBar" />
}
