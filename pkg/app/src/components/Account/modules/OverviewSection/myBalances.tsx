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
import { useBalanceByAddress } from 'hooks/useBalanceByAddress'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { Scrollbar } from 'components/scrollbar'

const getTotal = (balance) => balance.frozen + balance.free + balance.reserved
export function MyBalancesCard() {
	const address = useCurrentAccountAddress()
	const balances = useBalanceByAddress(address)
	return (
		<Card sx={{ borderRadius: '16px' }}>
			<CardContent>
				<Typography fontWeight="700" variant="h5" sx={{ my: 1 }}>
					My Balances
				</Typography>
				<Scrollbar>
					<Table sx={{ minWidth: 700 }}>
						<TableHead>
							<TableRow sx={{ borderRadius: '8px' }}>
								<TableCell>Token</TableCell>
								<TableCell>Transferable</TableCell>
								<TableCell>Locked</TableCell>
								<TableCell>Reserved</TableCell>
								<TableCell>Total</TableCell>
								<TableCell align="right"></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{!balances ? (
								<>
									{[1, 2, 3, 4, 5]?.map((index) => (
										<TableRow hover key={index}>
											<TableCell>
												<Skeleton width={50} />
											</TableCell>
											<TableCell>
												<Skeleton width={80} />
											</TableCell>
											<TableCell>
												<Skeleton width={50} />
											</TableCell>
											<TableCell align="right">
												<Skeleton width={50} />
											</TableCell>
											<TableCell align="right">
												<Skeleton width={50} />
											</TableCell>
										</TableRow>
									))}
								</>
							) : (
								<>
									{balances?.map((balance, index) => (
										<TableRow hover key={index}>
											<TableCell>{balance?.tokenSymbol}</TableCell>
											<TableCell>{balance.free}</TableCell>
											<TableCell>{balance.frozen}</TableCell>
											<TableCell>{balance.reserved}</TableCell>
											<TableCell>{getTotal(balance)}</TableCell>
											<TableCell align="right">
												<IconButton aria-label="options">
													<MoreVertIcon />
												</IconButton>
											</TableCell>
										</TableRow>
									))}
								</>
							)}
						</TableBody>
					</Table>
				</Scrollbar>
			</CardContent>
		</Card>
	)
}
