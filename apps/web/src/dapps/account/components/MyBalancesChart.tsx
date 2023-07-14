import MoreVertIcon from '@mui/icons-material/MoreVert'
import {
	Card,
	CardContent,
	IconButton,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { StackedAreaChart } from 'src/components/Charts/StackedAreaChart'
import { useBalanceByAddress } from 'src/hooks/useBalanceByAddress'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useSystemProperties } from 'src/hooks/useSystemProperties'
import { useHistoricalBalanceSubscription } from 'src/queries'
import { formatBalanceString } from 'src/utils/balance'
import { toUnit } from 'src/utils/token'

const getTotal = (balance) => balance.frozen + balance.free + balance.reserved

interface IBalancesChart {
	symbol: string
}
export function MyBalancesChart({ symbol = 'ZERO' }: IBalancesChart) {
	const theme = useTheme()
	const { t } = useTranslation()

	// const symbol = 'ZERO'

	const systemProperties = useSystemProperties()
	const tokenDecimals = systemProperties.tokenDecimals?.[systemProperties.networkCurrency]

	const address = useCurrentAccountAddress()
	const { loading, data, error } = useHistoricalBalanceSubscription({
		variables: { address: address, symbol: symbol },
	})
	const [series, setSeries] = useState([])
	const [categories, setCategories] = useState([])

	// series: [{
	// 	name: 'ZERO',
	// 	data: [31, 40, 28, 51, 42, 109, 100]
	// }],
	// }

	useEffect(() => {
		if (!data) return

		const _symbol = symbol
		// const _total = data.historicalBalance.map((balance) => toUnit(balance.total, tokenDecimals))
		const _free = data.historicalBalance.map((balance) => toUnit(balance.free, tokenDecimals))
		const _reserved = data.historicalBalance.map((balance) => toUnit(balance.reserved, tokenDecimals))
		const _categories = data.historicalBalance.map((balance) => balance.block)

		console.log('data', _symbol, _categories)

		setSeries([
			// { name: 'Total', data: _total },
			{ name: 'Free', data: _free },
			{ name: 'Reserved', data: _reserved },
		])
		setCategories(_categories)
	}, [data, tokenDecimals])

	// console.log(categories)

	return (
		<Card sx={{ minHeight: '100%' }} variant={'glass'}>
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
