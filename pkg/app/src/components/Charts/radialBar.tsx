import { useTheme } from '@mui/material/styles'
import type { ApexOptions } from 'apexcharts'

import { Chart } from './chart'

interface ComponentProps {
	color: string
	series: any
}

export function RadialChart({ color, series }: ComponentProps) {
	const theme = useTheme()

	const chartOptions: ApexOptions = {
		chart: {
			background: 'transparent',
			stacked: false,
			toolbar: {
				show: false,
			},
		},
		colors: [color],
		fill: {
			opacity: 1,
		},
		labels: [],
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
		},
		theme: {
			mode: theme.palette.mode,
		},
	}

	return <Chart height={160} options={chartOptions} series={series} type="radialBar" />
}
