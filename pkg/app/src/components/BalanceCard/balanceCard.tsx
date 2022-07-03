import { Box, Skeleton, Stack, Typography } from '@mui/material'
import { useBalanceByAddress } from 'hooks/useBalanceByAddress'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

export function BalanceCard() {
	const address = useCurrentAccountAddress()
	const balance = useBalanceByAddress(address)

	return (
		<Box>
			{!balance && <Skeleton variant="rectangular" height="5rem" width={'100%'} />}
			{balance && (
				<Stack p={{ xs: 2 }} spacing={2}>
					<Typography variant="overline">Balances</Typography>
					<Stack direction="row" justifyContent="space-between">
						<Typography variant="body2">{balance.tokenSymbol}</Typography>
						<Typography variant="body2">{balance.free}</Typography>
					</Stack>
					<Stack direction="row" justifyContent="space-between">
						<Typography variant="body2">GAME</Typography>
						<Typography variant="body2">{balance.free}</Typography>
					</Stack>
					<Stack direction="row" justifyContent="space-between">
						<Typography variant="body2">PLAY</Typography>
						<Typography variant="body2">{balance.free}</Typography>
					</Stack>
				</Stack>
			)}
		</Box>
	)
}
