import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { toUnit } from 'src/utils/token'
import { useHistoricalBalanceSubscription } from 'src/queries'
import { useSystemProperties } from 'src/hooks/useSystemProperties'
import { useTheme } from '@mui/material/styles'
import { Card, CardContent, Typography } from '@mui/material'
import { StackedAreaChart } from 'src/components/Charts/StackedAreaChart'

const getTotal = (balance) => balance.frozen + balance.free + balance.reserved

interface IBalancesChart {
	address: string
	symbol?: string
}

export function TreasuryChart({ address, symbol = 'ZERO' }: IBalancesChart) {
	const theme = useTheme()
	const { t } = useTranslation()

	const systemProperties = useSystemProperties()
	const tokenDecimals = systemProperties.tokenDecimals?.[systemProperties.networkCurrency]

	// const address = useCurrentAccountAddress()
	const { loading, data } = useHistoricalBalanceSubscription({
		variables: { address: address, symbol: symbol },
	})

	// console.log('treasury', address, symbol)

	const [series, setSeries] = useState([])
	const [categories, setCategories] = useState([])

	useEffect(() => {
		if (loading) return
		if (!data || !address) return

		const _symbol = symbol
		// const _total = data.historical_balance.map((balance) => toUnit(balance.total, tokenDecimals))
		const _free = data.historical_balance.map((balance) => toUnit(balance.free, tokenDecimals))
		const _reserved = data.historical_balance.map((balance) => toUnit(balance.reserved, tokenDecimals))
		const _categories = data.historical_balance.map((balance) => balance.block)

		// console.log('data', _symbol, _categories)

		setSeries([
			// { name: 'Total', data: _total },
			{ name: 'Free', data: _free },
			{ name: 'Reserved', data: _reserved },
		])
		setCategories(_categories)
	}, [data, tokenDecimals])

	// console.log(categories)

	return !address ? null : (
		<Card sx={{ minHeight: '100%', width: '100%' }} variant={'glass'}>
			<CardContent>
				<Typography variant="h5">Balance History</Typography>

				{series && <StackedAreaChart categories={categories} series={series} height={200} />}

				{/*				{ balances &&
					<RadialChart
						// height={320}
						colors={[
							theme.palette.success.main,
							theme.palette.warning.main,
							theme.palette.info.main
						]}
						series={ series }
						labels={[
							`free`,
							`frozen`,
							`reserved`,
						]}
						stroke={{ lineCap: 'round' }}
						plotOptions={{
							radialBar: {
								dataLabels: {
									value: {
										offsetY: 5,
										fontWeight: theme.typography.fontWeightBold,
										color: theme.palette.common.white,
										fontSize: '1.3rem',
										formatter: (x) => `${(Math.round(x * 100) / 100).toLocaleString()} %`,
									},
									total: {
										show: true,
										color: theme.palette.secondary.main,
										label: {balance},
										fontSize: '0.9rem',
										formatter: () => {},
									},
								},
								hollow: { size: '60%', },
								track: { background: theme.palette.background.default, },
							},
						}}/>
					}*/}
			</CardContent>
		</Card>
	)
}
