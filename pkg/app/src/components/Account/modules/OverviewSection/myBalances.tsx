import { FC } from 'react'

import { AccountBalance } from '@gamedao-haiku/graphql/dist'
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

import { Scrollbar } from 'components/scrollbar'

interface MyBalancesCardProps {
	balances: AccountBalance[]
	loading: boolean
}

const MyBalancesCard: FC<MyBalancesCardProps> = ({ balances, loading }) => {
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
								<TableCell>Transferrable</TableCell>
								<TableCell>Locked</TableCell>
								<TableCell>Reserved</TableCell>
								<TableCell>Total</TableCell>
								<TableCell align="right"></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{loading ? (
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
											<TableCell>{balance?.symbol}</TableCell>
											<TableCell>{balance.transferrable}</TableCell>
											<TableCell>{balance.locked}</TableCell>
											<TableCell>{balance.reserved}</TableCell>
											<TableCell>{balance.total}</TableCell>
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

export default MyBalancesCard
