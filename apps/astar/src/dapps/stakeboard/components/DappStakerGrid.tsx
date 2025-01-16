import { useEffect, useState } from 'react'
import { avatarImageURL, convertSS58Prefix, useLogger, formatNumber } from '@gamedao/utils'

import { RxClock } from 'react-icons/rx'
import { Stack, Typography, Avatar, Box, Paper, TextField, Grid } from '@mui/material'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { type TStaker } from '../types'
import { useAstarStakers, useAstarDappStakingEventsAggregate } from '@gamedao/core/hooks'

export const DappStakerGrid = ({ stakers, fx, id }) => {
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

	if (!stakers) return null

	const StakerRow = ({ s, i }) => {
		const rank = i + 1
		const address = convertSS58Prefix(s.address, 5)
		const amountASTR = formatNumber(s.amount)
		const amountUSD = formatNumber(s.amount * fx)

		// rewards estimate
		const totalStakingEvents = getStakesForAddress(address)
		const firstStakingBlock = getFirstStakeBlock(address)
		const durationInBlocks = getStakeDuration(address)
		const rewardEstimate = getRewardEstimate(address)

		return (
			<Grid container spacing={2}>
				<Grid
					item
					xs={1}
					sx={{
						display: 'flex',
						borderBottom: { xs: 'none', lg: '1px dotted #ffffff33' },
						alignItems: 'center',
						justifyContent: 'center',
						pb: { xs: 0, lg: 2 },
						mb: { xs: 0, lg: 2 },
					}}
					pb={2}
					// mb={ xs:0,lg:2 }
					direction="row"
				>
					<Typography
						alignItems="center"
						justifyContent="center"
						sx={{
							display: 'flex',
							minWidth: '4ch',
							aspectRatio: '1',
							border: '1px solid #ffffff',
							borderRadius: '50%',
						}}
						variant={'h6'}
					>
						{rank}
					</Typography>
				</Grid>
				<Grid
					item
					xs={11}
					lg={5}
					sx={{
						pb: { xs: 0, lg: 2 },
						mb: { xs: 0, lg: 2 },
						borderBottom: { xs: 'none', lg: '1px dotted #ffffff33' },
					}}
					pb={2}
					// mb={2}
				>
					<Stack direction="row" spacing={1} justifyContent="left">
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
							</Typography>
							{' · '}
							<Typography variant="micro">
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
				</Grid>
				<Grid
					item
					xs={1}
					sx={{ display: { xs: 'block', lg: 'none' }, borderBottom: '1px dotted #ffffff33' }}
				></Grid>
				<Grid item xs={6} lg={3} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
					<Typography sx={{ display: { lg: 'none' } }} variant={'micro'}>
						Stake
					</Typography>
					<Stack direction="row" spacing={1}>
						<Typography align="right" variant="mono">
							{amountASTR}
						</Typography>
						<Typography align="left" variant="mono">
							ASTR
						</Typography>
					</Stack>
					<Stack direction="row" spacing={1}>
						<Typography align="right" variant="mono">
							{amountUSD}
						</Typography>
						<Typography align="left" variant="mono">
							USD
						</Typography>
					</Stack>
				</Grid>
				<Grid item xs={5} lg={3} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
					<Typography sx={{ display: { lg: 'none' } }} variant={'micro'}>
						Rewards
					</Typography>
					<Stack direction="row" spacing={1}>
						<Typography align="right" variant="mono">
							{totalStakingEvents}
						</Typography>

						<Typography align="left" variant="mono">
							{firstStakingBlock}
						</Typography>
					</Stack>
					<Stack direction="row" spacing={1}>
						<Typography align="right" variant="mono">
							{durationInBlocks}
						</Typography>
						<Typography align="left" variant="mono">
							{rewardEstimate}
						</Typography>
					</Stack>
				</Grid>
			</Grid>
		)
	}

	return (
		<Grid container sx={{ padding: 4, border: '1px solid #ffffff33' }}>
			<Grid item xs={12} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
				<Typography variant={'h4'}>Top stakers over time</Typography>
			</Grid>
			<Grid item xs={1} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
				<Typography variant={'micro'}>Rank</Typography>
			</Grid>
			<Grid item xs={11} lg={5} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
				<Typography variant={'micro'}>Staker</Typography>
			</Grid>
			<Grid
				item
				xs={0}
				lg={3}
				sx={{ display: { xs: 'none', lg: 'block' }, borderBottom: '1px dotted #ffffff33' }}
				pb={2}
				mb={2}
			>
				<Typography variant={'micro'}>Stake</Typography>
			</Grid>
			<Grid
				item
				xs={0}
				lg={3}
				sx={{ display: { xs: 'none', lg: 'block' }, borderBottom: '1px dotted #ffffff33' }}
				pb={2}
				mb={2}
			>
				<Typography variant={'micro'}>Rewards</Typography>
			</Grid>
			<Grid item xs={12} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
				{stakers
					// .filter( (f:TStaker) => f.amount > 0 ) // filter zero amounts
					.sort((n1: TStaker, n2: TStaker) => n2.amount - n1.amount)
					.map((s: TStaker, i) => {
						return <StakerRow key={i} s={s} i={i} />
					})}
			</Grid>
		</Grid>
	)
}
