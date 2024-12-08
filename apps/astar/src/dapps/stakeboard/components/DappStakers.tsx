import { useEffect, useState } from 'react'
import { convertSS58Prefix, useLogger, formatNumber } from '@gamedao/utils'
import { RxClock } from 'react-icons/rx'
import { Stack, Typography, useMediaQuery, Box, Paper, TextField } from '@mui/material'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { type TStaker } from '../types'
import { useAstarStakers, useAstarDappStakingEventsAggregate } from '@gamedao/core/hooks'

export const DappStakers = ({ stakers, fx, id }) => {
	const { state: stakingAggregation } = useAstarDappStakingEventsAggregate(id)
	const [aggregate, setAggregate] = useState([])

	// update selected dapp staking data
	// useEffect(() => {
	// 	if (!dappStakers.stakers || dappStakers.stakers.length === 0) return
	// 	console.log('stakers changed:', dappStakers.stakers)
	// 	const tvl = dappStakers.stakers.map((staker: TStaker) => staker.amount).reduce((acc, amount) => (acc += amount))
	// 	const astr = tvl
	// 	const usd = tvl * fx
	// 	const _ = {
	// 		...dapp,
	// 		astr,
	// 		usd,
	// 		stakers: dappStakers.totalStakers,
	// 	}
	// 	updateDapp(_)
	// }, [id, dappStakers, fx])

	// return the amount of stakes
	const getStakesForAddress = (adr: string) => {
		const res = aggregate.find((item) => {
			convertSS58Prefix(item.address, 5) === convertSS58Prefix(adr, 5)
		})
		return res ? res.tx.length : -1
	}

	return (
		<>
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
											<a
												href={'https://astar.subscan.io/account/' + address}
												target="_blank"
												rel="noreferrer"
											>
												<Typography variant="mono">{address}</Typography>
											</a>
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
											<Typography variant="mono">{`${getStakesForAddress(address)}`}</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography variant="mono">
												<RxClock />
											</Typography>
										</TableCell>
									</TableRow>
								)
							})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
