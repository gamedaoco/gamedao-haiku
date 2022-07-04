import { Card, Skeleton, Stack, Typography } from '@mui/material'
import { useBalanceByAddress } from 'hooks/useBalanceByAddress'
import { useBalanceByAddressAndBalanceId } from 'hooks/useBalanceByAddressAndBalanceId'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useSystemProperties } from 'hooks/useSystemProperties'

export function BalanceCard() {
	const address = useCurrentAccountAddress()
	const balance = useBalanceByAddress(address)
	const systemProperties = useSystemProperties()
	const networkBalance = useBalanceByAddressAndBalanceId(address, systemProperties?.networkCurrency)
	const governanceBalance = useBalanceByAddressAndBalanceId(address, systemProperties?.governanceCurrency)
	// TODO fix value in graphql 2 === Play
	const paymentBalance = useBalanceByAddressAndBalanceId(address, 2)

	return (
		<Card variant="primary" sx={{ width: '312px' }}>
			{!balance && <Skeleton variant="rectangular" height="5rem" width={'100%'} />}
			{balance && (
				<Stack p={{ xs: 3, sm: 3.5 }} spacing={2}>
					<Typography variant="overline">Balances</Typography>
					{networkBalance && (
						<Stack direction="row" justifyContent="space-between">
							<Typography variant="body2">{networkBalance.tokenSymbol}</Typography>
							<Typography variant="body2">{networkBalance.free}</Typography>
						</Stack>
					)}
					{governanceBalance && (
						<Stack direction="row" justifyContent="space-between">
							<Typography variant="body2">{governanceBalance.tokenSymbol}</Typography>
							<Typography variant="body2">{governanceBalance.free}</Typography>
						</Stack>
					)}
					{paymentBalance && (
						<Stack direction="row" justifyContent="space-between">
							<Typography variant="body2">{paymentBalance.tokenSymbol}</Typography>
							<Typography variant="body2">{paymentBalance.free}</Typography>
						</Stack>
					)}
				</Stack>
			)}
		</Card>
	)
}
