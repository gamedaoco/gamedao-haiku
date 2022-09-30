// libs
import { Grid, Stack, Paper, Typography, alpha } from '@mui/material'
import React, { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'

// Subscriptions
import {
	getCurrentBalanceSubscription,
	getHistoricBalanceSubscription,
	HistoricBalanceItem,
} from '../modules/mock-data'

// Components
import { RadialChart } from 'components/Charts/radialBar'
import { AreaChart } from 'components/Charts/areaChart'
import { ChartLabel } from './chartLabel'
import moment from 'moment'

type CurrentData = {
	readonly incomePercentage?: number
	readonly outgoingPercentage?: number
	readonly total?: number
}

interface ComponentProps {
	address: string
}

export function Charts({ address }: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()

	const [currentData, setCurrentData] = useState<CurrentData>({})
	const [historicData, setHistoricData] = useState<HistoricBalanceItem[]>([])
	const historicMonths = Array.from({ length: 12 })
		.map((x, i) => moment().subtract(i, 'months').format('YYYY-MM-DD'))
		.reverse()

	useEffect(() => {
		const current = getCurrentBalanceSubscription()
		const processedCurrentData = {
			incomePercentage: (current.income / current.total) * 100,
			outgoingPercentage: (current.outgoing / current.total) * 100,
			total: current.income - current.outgoing,
		}
		setCurrentData(processedCurrentData)
	}, [])

	useEffect(() => {
		const historic = getHistoricBalanceSubscription()
		setHistoricData(historic)
	}, [])

	const chartOptions = {
		chart: {
			background: 'transparent',
			stacked: false,
			toolbar: {
				show: false,
			},
		},
		legend: {
			show: false,
		},
		colors: [theme.palette.success.main, theme.palette.warning.main],
		dataLabels: {
			enabled: false,
		},
		fill: {
			colors: [alpha(theme.palette.success.main, 0.3), alpha(theme.palette.warning.main, 0.3)],
		},
		grid: {
			show: true,
			borderColor: '#90A4AE',
			strokeDashArray: 2,
			position: 'back',
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},
			row: {
				colors: undefined,
				opacity: 0.5,
			},
			column: {
				colors: undefined,
				opacity: 0.2,
			},
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 10,
			},
		},
		stroke: {
			curve: 'smooth',
		},
		theme: {
			mode: theme.palette.mode,
		},
		xaxis: {
			type: 'datetime',
			axisTicks: {
				show: true,
			},
			categories: historicMonths,

			labels: {
				show: true,
				format: 'MMM',
			},
		},
		tooltip: {
			x: {
				format: 'dd/MM/yy',
			},
		},
		yaxis: {
			show: true,
		},
	}

	return (
		<Grid container spacing={3}>
			<Grid item xs={4}>
				<Stack component={Paper} padding={4} spacing={6} sx={{ boxShadow: 'none' }}>
					<Typography variant="h6">{t('page:organisations:treasury:treasury_balance')}</Typography>
					{currentData.incomePercentage && (
						<RadialChart
							height={320}
							colors={[theme.palette.success.main, theme.palette.warning.main]}
							series={[currentData.incomePercentage, currentData.outgoingPercentage]}
							labels={[
								t('page:organisations:treasury:income'),
								t('page:organisations:treasury:outgoing'),
							]}
							stroke={{ lineCap: 'round' }}
							plotOptions={{
								radialBar: {
									dataLabels: {
										value: {
											offsetY: 5,
											fontWeight: theme.typography.fontWeightBold,
											color: theme.palette.common.white,
											fontSize: '1.8rem',
											formatter: (x) => `${(Math.round(x * 100) / 100).toLocaleString()} %`,
										},
										total: {
											show: true,
											label: 'Total',
											formatter: () => currentData.total.toLocaleString(),
										},
									},
									hollow: {
										size: '60%',
									},
									track: {
										background: theme.palette.background.default,
									},
								},
							}}
						/>
					)}
					<hr style={{ width: '100%', marginTop: 0 }} />
					<Grid container spacing={3} style={{ marginTop: 0 }}>
						<Grid item xs={6}>
							<ChartLabel
								name={t('page:organisations:treasury:income')}
								color={theme.palette.success.main}
							></ChartLabel>
						</Grid>
						<Grid item xs={6}>
							<ChartLabel
								name={t('page:organisations:treasury:outgoing')}
								color={theme.palette.warning.main}
							></ChartLabel>
						</Grid>
					</Grid>
				</Stack>
			</Grid>
			<Grid item xs={8}>
				<Stack component={Paper} padding={4} spacing={6} sx={{ boxShadow: 'none' }}>
					<Typography variant="h6">{t('page:organisations:treasury:treasury_by_year')}</Typography>
					<Typography variant="body2" style={{ marginTop: 0 }}>
						(+43%) {t('page:organisations:treasury:than_last_year')}
					</Typography>
					<Grid container spacing={3} style={{ marginTop: 0 }}>
						<Grid item xs={6} />
						<Grid item xs={3}>
							<ChartLabel
								name={`${t('page:organisations:treasury:total')} ${t(
									'page:organisations:treasury:income',
								)}`}
								color={theme.palette.success.main}
							></ChartLabel>
						</Grid>
						<Grid item xs={3}>
							<ChartLabel
								name={`${t('page:organisations:treasury:total')} ${t(
									'page:organisations:treasury:outgoing',
								)}`}
								color={theme.palette.warning.main}
							></ChartLabel>
						</Grid>
					</Grid>
					<AreaChart categories={historicMonths} series={historicData} options={chartOptions} height={265} />
				</Stack>
			</Grid>
		</Grid>
	)
}
