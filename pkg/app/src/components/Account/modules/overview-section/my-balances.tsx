import {
	Card,
	CardContent,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material'
import { Scrollbar } from 'components/scrollbar'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const MyBalancesCard = ({ balances }) => {
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
							{balances?.map((balance, index) => (
								<TableRow key={index}>
									<TableCell>{balance.token}</TableCell>
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
						</TableBody>
					</Table>
				</Scrollbar>
			</CardContent>
		</Card>
	)
}

export default MyBalancesCard
