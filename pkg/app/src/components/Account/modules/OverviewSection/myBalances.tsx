import { Fragment } from 'react'
import { useBalanceByAddress } from 'hooks/useBalanceByAddress'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'

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

const getTotal = (balance) => balance.frozen + balance.free + balance.reserved

export function MyBalancesCard() {
	const theme = useTheme()
	const address = useCurrentAccountAddress()
	const balances = useBalanceByAddress(address)
	const { t } = useTranslation()

	return (
		<Card sx={{ minHeight: '100%' }}>
			<CardContent>
				<Typography variant="h5">{t('page:account:balances:title')}</Typography>

				<Table>
					<TableHead>
						<TableRow>
							<TableCell align="left" sx={{ backgroundColor: 'transparent' }}>
								{t('page:account:balances:token')}
							</TableCell>
							<TableCell align="right" sx={{ backgroundColor: 'transparent' }}>
								{t('page:account:balances:transferable')}
							</TableCell>
							<TableCell align="right" sx={{ backgroundColor: 'transparent' }}>
								{t('page:account:balances:locked')}
							</TableCell>
							<TableCell align="right" sx={{ backgroundColor: 'transparent' }}>
								{t('page:account:balances:reserved')}
							</TableCell>
							<TableCell align="right" sx={{ backgroundColor: 'transparent' }}>
								{t('page:account:balances:total')}
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{!balances ? (
							<>
								{[...Array(3).keys()]?.map((index) => (
									<TableRow sx={{ borderTop: '1px dotted white' }} hover key={index}>
										<TableCell>
											<Skeleton width={50} />
										</TableCell>
										<TableCell align="right">
											<Skeleton width={80} />
										</TableCell>
										<TableCell align="right">
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
									<>
										{balance?.tokenSymbol && (
											<TableRow hover key={index} sx={{ borderTop: '1px dotted white' }}>
												<TableCell>{balance?.tokenSymbol}</TableCell>
												<TableCell align="right">{balance.free}</TableCell>
												<TableCell align="right">{balance.frozen}</TableCell>
												<TableCell align="right">{balance.reserved}</TableCell>
												<TableCell align="right">{getTotal(balance)}</TableCell>
											</TableRow>
										)}
									</>
								))}
							</>
						)}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
