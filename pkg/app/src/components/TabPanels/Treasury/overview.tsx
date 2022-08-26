// libs
import { Grid } from '@mui/material'

// modules
import { Charts } from './modules/charts'
import { Assets } from './modules/assets'
import { Transactions } from './modules/transactions'

interface ComponentProps {
	address: string
}

export function TreasuryOverview({ address }: ComponentProps) {
	return (
		<Grid container spacing={3}>
			{address}
			<Grid item xs={12}>
				<Charts />
			</Grid>
			<Grid item xs={12}>
				<Assets />
			</Grid>
			<Grid item xs={12}>
				<Transactions type="in" />
			</Grid>
			<Grid item xs={12}>
				<Transactions type="out" />
			</Grid>
		</Grid>
	)
}
