// libs
import { Grid, Stack, Paper, Typography, Box } from '@mui/material'
import React, { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'

// Subscriptions
import { getCurrentBalanceSubscription, getHistoricBalanceSubscription } from '../modules/mock-data'

// Components
import { RadialChart } from 'components/Charts/radialBar'
import { AreaChart } from 'components/Charts/areaChart'
import { ChartLabel } from './chartLabel'

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
	const [historicData, setHistoricData] = useState<number[][]>([])

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

	return (
		<Grid container spacing={3}>
			<Grid item xs={4}>
				<Stack component={Paper} padding={4} spacing={6} sx={{ boxShadow: 'none' }}>
					<Typography variant="h6">{t('page:organisations:treasury:treasury_balance')}</Typography>
					<RadialChart
						height={320}
						colors={[theme.palette.success.main, theme.palette.warning.main]}
						series={[currentData.incomePercentage, currentData.outgoingPercentage]}
						labels={[t('page:organisations:treasury:income'), t('page:organisations:treasury:outgoing')]}
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
					<AreaChart
						categories={['Income', 'Outgoing']}
						series={historicData}
						colors={[theme.palette.success.main, theme.palette.warning.main]}
						fills={[theme.palette.success.main, theme.palette.warning.main]}
						height={130}
					/>
				</Stack>
			</Grid>
		</Grid>
	)
}
