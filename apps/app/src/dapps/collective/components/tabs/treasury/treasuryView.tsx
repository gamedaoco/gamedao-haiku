// libs
import { Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Subscriptions
import {
	HistoricIncome,
	getHistoricIncomeSubscription,
	HistoricOutgoing,
	getHistoricOutgoingSubscription,
} from './components/mock-data'

// modules
import { Charts } from './components/charts'
import { Assets } from './components/assets'
import { Transactions } from './components/transactions'

interface ComponentProps {
	address: string
}

export function TreasuryView({ address }: ComponentProps) {
	const { t } = useTranslation()

	const [incomeTransactionsData, setIncomeTransactionsData] = useState<HistoricIncome[]>([])
	const [outgoingTransactionsData, setOutgoingTransactionsData] = useState<HistoricOutgoing[]>([])

	useEffect(() => {
		const incomeTransactions = getHistoricIncomeSubscription()
		setIncomeTransactionsData(incomeTransactions)
	}, [])

	useEffect(() => {
		const outgoingTransactions = getHistoricOutgoingSubscription()
		setOutgoingTransactionsData(outgoingTransactions)
	}, [])

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Charts address={address} />
			</Grid>
			<Grid item xs={12}>
				<Assets address={address} />
			</Grid>
			<Grid item xs={12}>
				<Transactions type="in" data={incomeTransactionsData} />
			</Grid>
			<Grid item xs={12}>
				<Transactions type="out" data={outgoingTransactionsData} />
			</Grid>
			<Stack padding={4} spacing={6}>
				<Typography variant="body2">{t('label:treasury_address', { address })}</Typography>
			</Stack>
		</Grid>
	)
}
