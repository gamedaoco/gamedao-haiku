import { Fragment } from 'react'

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
import { useTranslation } from 'react-i18next'

import { Scrollbar } from 'components/scrollbar'

const getTotal = (balance) => balance.frozen + balance.free + balance.reserved

export function MyBalancesCard() {
	const address = useCurrentAccountAddress()
	const balances = useBalanceByAddress(address)
	const { t } = useTranslation()
	return (
		<Card sx={{ borderRadius: '16px' }}>
			<CardContent>
				<Typography fontWeight="700" variant="h5" sx={{ my: 1 }}>
					{t('page:account:balances:title')}
				</Typography>
				<Scrollbar>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>{t('page:account:balances:token')}</TableCell>
								<TableCell>{t('page:account:balances:transferable')}</TableCell>
								<TableCell>{t('page:account:balances:locked')}</TableCell>
								<TableCell>{t('page:account:balances:reserved')}</TableCell>
								<TableCell>{t('page:account:balances:total')}</TableCell>
								<TableCell align="right"></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{!balances ? (
								<>
									{[1, 2, 3, 4, 5]?.map((index) => (
										<TableRow hover key={`skeleton_${index}`}>
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
										<Fragment key={balance?.tokenSymbol ?? index}>
											{balance?.tokenSymbol && (
												<TableRow hover>
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
											)}
										</Fragment>
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
