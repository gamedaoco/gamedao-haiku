import { useTheme } from '@mui/material/styles'
import type { ApexOptions } from 'apexcharts'

import { Chart } from './chart'

interface ComponentProps {
	series: number[]
}

export function DonutChart({ series }: ComponentProps) {
	const theme = useTheme()

	const chartOptions: ApexOptions = {
		chart: {
			background: 'transparent',
			stacked: false,
			toolbar: {
				show: false,
			},
		},
		colors: [theme.palette.primary.main, theme.palette.warning.main, theme.palette.error.main],
		dataLabels: {
			enabled: false,
		},
		fill: {
			opacity: 1,
		},
		labels: ['General Proposal', 'Withdrawal Proposal', 'Spending Proposal'],
		legend: {
			labels: {
				colors: theme.palette.text.secondary,
			},
			show: true,
		},
		stroke: {
			width: 0,
		},
		theme: {
			mode: theme.palette.mode,
		},
	}

	return <Chart height={400} width={350} options={chartOptions} series={series} type="donut" />
}
