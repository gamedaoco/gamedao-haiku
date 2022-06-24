import { Card, Skeleton, Stack, Typography } from '@mui/material'
import { useBalanceByAddress } from 'hooks/useBalanceByAddress'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

export function BalanceCard() {
	const address = useCurrentAccountAddress()
	const balance = useBalanceByAddress(address)

	return (
		<Card variant="primary" sx={{ width: '312px' }}>
			{!balance && <Skeleton variant="rectangular" height="5rem" width={'100%'} />}
			{balance && (
				<Stack p={{ xs: 3, sm: 3.5 }} spacing={2}>
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
