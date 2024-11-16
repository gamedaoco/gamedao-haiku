import { Chart } from './Chart'
import { useTheme } from '@mui/material/styles'
import type { ApexOptions } from 'apexcharts'
import { useTranslation } from 'react-i18next'

interface ComponentProps {
	series: number[]
}

export function DonutChart({ series }: ComponentProps) {
	const theme = useTheme()

	const { t } = useTranslation()

	const chartOptions: ApexOptions = {
		chart: {
			background: 'transparent',
			stacked: false,
			toolbar: {
				show: false,
			},
		},
		colors: [theme.palette.primary.main, theme.palette.success.main, theme.palette.error.main],
		dataLabels: {
			enabled: true,
		},
		fill: {
			opacity: 1,
		},

		labels: [
			t('page:organizations:general_proposal'),
			t('page:organizations:withdrawal_proposal'),
			t('page:organizations:spending_proposal'),
		],
		legend: {
			labels: {
				colors: theme.palette.text.secondary,
			},
			show: true,
		},
		plotOptions: {
			pie: {
				startAngle: 0,
				endAngle: 360,
				expandOnClick: true,
				offsetX: 0,
				offsetY: 0,
				customScale: 1,
				dataLabels: {
					offset: 0,
					minAngleToShowLabel: 10,
				},
				donut: {
					size: '65%',
					background: 'transparent',
					labels: {
						show: true,
						total: {
							show: true,
							showAlways: true,
							label: 'Total',
							fontSize: '22px',
							fontWeight: 600,
							color: theme.palette.text.primary,
							formatter: function (w) {
								return w.globals.seriesTotals.reduce((a, b) => {
									return a + b
								}, 0)
							},
						},
					},
				},
			},
		},
		stroke: {
			width: 0,
		},
		theme: {
			mode: theme.palette.mode,
		},
	}

	return <Chart height={450} width={350} options={chartOptions} series={series} type="donut" />
}
