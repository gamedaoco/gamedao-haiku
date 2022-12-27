import { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { formatBalanceString } from 'src/utils/balance'
import { useSystemProperties } from 'src/hooks/useSystemProperties'
import { toUnit } from 'src/utils/token'

import { useHistoricalBalanceSubscription } from 'src/queries'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useBalanceByAddress } from 'hooks/useBalanceByAddress'

import { useTheme } from '@mui/material/styles'
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

import { StackedAreaChart } from 'components/Charts/StackedAreaChart'

const getTotal = (balance) => balance.frozen + balance.free + balance.reserved

export function MyBalancesChart() {
	const theme = useTheme()
	const { t } = useTranslation()

	const symbol = 'ZERO'

	const systemProperties = useSystemProperties()
	const tokenDecimals = systemProperties.tokenDecimals?.[systemProperties.networkCurrency]

	const address = useCurrentAccountAddress()
	const { loading, data, error } = useHistoricalBalanceSubscription({
		variables: { address: address, symbol: symbol },
	})
	const [series, setSeries] = useState([])
	const [categories, setCategories] = useState()

	// series: [{
	// 	name: 'ZERO',
	// 	data: [31, 40, 28, 51, 42, 109, 100]
	// }],
	// }

	useEffect(() => {
		if (!data) return

		const _symbol = symbol
		const _total = data.historical_balance.map((balance) => toUnit(balance.total, tokenDecimals))
		const _free = data.historical_balance.map((balance) => toUnit(balance.free, tokenDecimals))
		const _reserved = data.historical_balance.map((balance) => toUnit(balance.reserved, tokenDecimals))
		const _blocked = data.historical_balance.map((balance) => toUnit(balance.block, tokenDecimals))
		const _categories = data.historical_balance.map((balance) => balance.block)

		// console.log( 'data', _symbol,_series,_categories)

		setSeries([
			{ name: 'Total', data: _total },
			{ name: 'Free', data: _free },
			{ name: 'Reserved', data: _reserved },
			{ name: 'Locked', data: _blocked },
		])
		setCategories(_categories)
	}, [data, tokenDecimals])

	// console.log(categories)

	return (
		<Card sx={{ minHeight: '100%' }} variant={'glass'}>
			<CardContent>
				<Typography variant="h5">Balance History</Typography>

				<StackedAreaChart
					// categories={categories}
					series={series}
				/>

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
