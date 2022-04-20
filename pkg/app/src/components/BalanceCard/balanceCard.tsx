import { Card, Skeleton, Stack, Typography } from '@mui/material'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useBalanceByAddress } from 'hooks/useBalanceByAddress'

export function BalanceCard() {
	const address = useCurrentAccountAddress()
	const balance = useBalanceByAddress(address)

	return (
		<Card>
			{!balance && <Skeleton variant="rectangular" height="5rem" width={'100%'} />}
			{balance && (
				<Stack p={{ xs: 2, sm: 4 }} spacing={2}>
					<Typography variant="overline">Balances</Typography>
					<Stack direction="row" justifyContent="space-between">
						<Typography variant="body2">{balance.tokenSymbol}</Typography>
						<Typography variant="body2">{balance.free}</Typography>
					</Stack>
				</Stack>
			)}
		</Card>
	)
}
