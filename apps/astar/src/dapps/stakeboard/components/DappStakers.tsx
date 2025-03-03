import { useEffect, useState } from 'react'
import { avatarImageURL, convertSS58Prefix, useLogger, formatNumber } from '@gamedao/utils'

import { RxClock } from 'react-icons/rx'
import { Stack, Typography, Avatar, Box, Paper, TextField, Grid } from '@mui/material'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { type TStaker } from '../types'
import { useAstarDappStakingEventsAggregate } from '@gamedao/core/hooks'

export const DappStakers = ({ stakers, fx, id }) => {
	const { state: stakingAggregation, loading } = useAstarDappStakingEventsAggregate(id)
	const [aggregate, setAggregate] = useState([])
	useEffect(() => {
		if (loading) return
		console.log('stakingAggregation', stakingAggregation)
	}, [])
	const getStakesForAddress = (adr: string) => {
		const res = aggregate.find((item) => {
			convertSS58Prefix(item.address, 5) === convertSS58Prefix(adr, 5)
		})
		return res ? res.tx.length : -1
	}
	const getFirstStakeBlock = (address) => -1
	const getStakeDuration = (address) => -1
	const getRewardEstimate = (address) => 0

	return (
		<Grid container sx={{ padding: 4, border: '1px solid #ffffff33' }}>
			<Grid item xs={12} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
				<Typography variant={'h4'}>Top stakers over time</Typography>
				<TableContainer component={Paper}>
					<Table sx={{ width: '100%' }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Rank</TableCell>
								<TableCell>Address</TableCell>
								<TableCell align="right">Stake</TableCell>
								<TableCell align="left">Unit</TableCell>
								<TableCell align="right">Duration</TableCell>
								<TableCell align="right">Reward</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{stakers
								// .filter( (f:TStaker) => f.amount > 0 ) // filter zero amounts
								.sort((n1: TStaker, n2: TStaker) => n2.amount - n1.amount)
								.map((s: TStaker, i) => {
									const rank = i + 1
									const address = convertSS58Prefix(s.address, 5)
									const amountASTR = formatNumber(s.amount)
									const amountUSD = formatNumber(s.amount * fx)

									const totalStakingEvents = getStakesForAddress(address)
									const firstStakingBlock = getFirstStakeBlock(address)
									const durationInBlocks = getStakeDuration(address)
									const rewardEstimate = getRewardEstimate(address)

									return (
										<TableRow
											key={9000 + i}
											sx={{
												paddingBottom: i === 2 ? '50px' : 0,
												'td, th': { borderBottom: '1', borderColor: '0xff00ff' },
												'&:last-child td, &:last-child th': { borderBottom: 0 },
											}}
										>
											<TableCell component="th" scope="row">
												<Typography variant="mono">{rank}</Typography>
											</TableCell>

											<TableCell component="th" scope="row">
												<Stack
													direction="row"
													spacing={1}
													justifyContent="left"
													alignItems="center"
												>
													<Avatar
														sx={{
															width: '48px',
															height: '48px',
															transition: '250ms ease-in-out',
															':hover': { backgroundColor: '#111111cc' },
															':active': { backgroundColor: '#ffffff99' },
														}}
														src={avatarImageURL(address)}
													/>
													<Box>
														<Typography variant="mono">{address}</Typography>
														<br />
														<Typography variant="micro">
															<a
																href={'https://astar.subscan.io/account/' + address}
																target="_blank"
																rel="noreferrer"
															>
																SUBSCAN
															</a>
															{/* </Typography> */}
															{' · '}
															{/* <Typography variant="micro"> */}
															<a
																href={'https://astar.subscan.io/account/' + address}
																target="_blank"
																rel="noreferrer"
															>
																SUB.ID
															</a>
														</Typography>
													</Box>
												</Stack>
											</TableCell>
											<TableCell align="right">
												<Typography variant="mono">{amountASTR}</Typography>
												<br />
												<Typography variant="mono">{amountUSD}</Typography>
											</TableCell>
											<TableCell align="left">
												<Typography variant="mono">ASTR</Typography>
												<br />
												<Typography variant="mono">USD</Typography>
											</TableCell>
											<TableCell align="right">
												<Typography variant="mono">{`${firstStakingBlock}`}</Typography>
												<br />
												<Typography variant="mono">{`${durationInBlocks}`}</Typography>
											</TableCell>
											<TableCell align="right">
												<Typography variant="mono" justifyContent="center">
													<RxClock />
												</Typography>
											</TableCell>
										</TableRow>
									)
								})}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Grid>
	)
}
