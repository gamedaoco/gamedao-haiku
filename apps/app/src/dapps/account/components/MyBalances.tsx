import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { useBalanceByAddress } from 'src/hooks/useBalanceByAddress'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
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

export function MyBalances() {
	const theme = useTheme()
	const address = useCurrentAccountAddress()
	const balances = useBalanceByAddress(address)
	const { t } = useTranslation()

	return (
		<Card sx={{ minHeight: '100%' }} variant={'glass'}>
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
									<TableRow
										sx={{ borderTop: `1px solid ${theme.palette.grey[500_32]}` }}
										hover
										key={index}
									>
										<TableCell>
											{' '}
											<Skeleton width={50} />{' '}
										</TableCell>
										<TableCell align="right">
											{' '}
											<Skeleton width={80} />{' '}
										</TableCell>
										<TableCell align="right">
											{' '}
											<Skeleton width={50} />{' '}
										</TableCell>
										<TableCell align="right">
											{' '}
											<Skeleton width={50} />{' '}
										</TableCell>
										<TableCell align="right">
											{' '}
											<Skeleton width={50} />{' '}
										</TableCell>
									</TableRow>
								))}
							</>
						) : (
							<>
								{balances?.map((balance, index) => (
									<TableRow
										hover
										key={index}
										sx={{ borderTop: `1px solid ${theme.palette.grey[500_32]}` }}
									>
										<TableCell>{balance?.tokenSymbol}</TableCell>
										<TableCell align="right">{balance.free}</TableCell>
										<TableCell align="right">{balance.frozen}</TableCell>
										<TableCell align="right">{balance.reserved}</TableCell>
										<TableCell align="right">{getTotal(balance)}</TableCell>
									</TableRow>
								))}
							</>
						)}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
