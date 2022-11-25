import { Card, Stack, Typography } from '@mui/material'
import { useBalanceByAddressAndBalanceId } from 'hooks/useBalanceByAddressAndBalanceId'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useSystemProperties } from 'hooks/useSystemProperties'

export function BalanceCard() {
	const address = useCurrentAccountAddress()
	const systemProperties = useSystemProperties()
	const networkBalance = useBalanceByAddressAndBalanceId(address, systemProperties?.networkCurrency)
	const governanceBalance = useBalanceByAddressAndBalanceId(address, systemProperties?.governanceCurrency)
	const paymentBalance = useBalanceByAddressAndBalanceId(address, systemProperties?.paymentCurrencies)

	return (
		<Card sx={{ boxShadow: 'none', borderRadius: 0, border: 0 }}>
			{
				<Stack spacing={2}>
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
			}
		</Card>
	)
}
