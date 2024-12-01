import React, { lazy, useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
//
import { convertSS58Prefix } from '@gamedao/utils'
import { useLogger } from '@gamedao/utils'
//
import { useCurrentAccountAddress } from '@gamedao/core/hooks'
import { useAstarStakers } from '@gamedao/core/hooks'
import { useAstarStaking } from '@gamedao/core/hooks'
import { useAstarTVL } from '@gamedao/core/hooks'
import { useAstarStakedByAddress } from '@gamedao/core/hooks'
import { useAstarDappContent } from '@gamedao/core/hooks'

import { useTheme } from '@mui/material/styles'
import { Stack, Typography, useMediaQuery, Box, Paper, TextField } from '@mui/material'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import { Loader } from 'components/atoms/Loader'
import { dAppId } from '@gamedao/constants'

import { usePathname, useSearchParams, useParams } from 'next/navigation'
import { CommandInteractionOptionResolver } from 'discord.js'
import { Campaign_Contributor_Select_Column } from '@gamedao/graph'

export function DashboardView() {
	const logger = useLogger('astar')
	const searchParams = useSearchParams()
	const params = new URLSearchParams(searchParams)
	const router = useRouter()
	const pathname = usePathname()
	const { query } = useRouter()
	const [id, setId] = useState<string>( query.id as string || dAppId )

	const [loading, setLoading] = useState(false)
	const [data, setData] = useState({
		astar: {
			block: 0,
			lockers: 0,
			stakers: 0,
			totalASTR: 0,
			totalUSD: 0,
		},
		dapp: {
			id: id,
			totalStakers: 0,
			totalStaked: 0,
			totalStakedUSD: 0,
			totalRewards: 0,
			totalRewardsUSD: 0,
		},
		ASTRUSD: 0,
	})

	// get all dapp info to feed into dropdowns etc
	const [content,setContent] = useState()
	const { state: dappContent, loading: loadingDappContent } = useAstarDappContent( id )
	useEffect(()=>{
		if(loadingDappContent) return
		setContent(dappContent)
	},[ loadingDappContent,dappContent])

	const address = useCurrentAccountAddress()
	const { state: stakedByAddress } = useAstarStakedByAddress(address)
	const { state: stakers } = useAstarStakers(id, address)
	const { state: tvl } = useAstarTVL()

	const [ASTRUSD, setASTRUSD] = useState(0)
	useEffect(() => {
		if (!tvl?.astrusd) return
		const fx = Number(tvl.astrusd)
		setASTRUSD(fx)
	}, [tvl])

	const [totalStaked, setTotalStaked] = useState(['', ''])
	useEffect(() => {
		if (!stakers.stakers || stakers.stakers.length === 0) return
		const _ = stakers.stakers.map((staker) => staker.amount).reduce((acc, amount) => (acc += amount))
		const total = _.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
		const totalUSD = (_ * ASTRUSD).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
		const value = setTotalStaked([total, totalUSD])
	}, [stakers, ASTRUSD])

	// logger.log(tvl)

	// const { stakingLoading, stakingData } = useAstarStaking(address)

	// useEffect(() => {
	// 	if (tvlLoading) return
	// 	setData({ ...data, ...tvl })
	// }, [data, tvl])

	// useEffect(() => {
	// 	const _ = tvlLoading && stakingLoading
	// 	setLoading(_)
	// }, [tvlLoading, stakingLoading])

	// global stuff

	// tx modal
	// const [showTxModalType, setShowTxModalType] = useState<boolean>(false)
	// const handleOpenTxModal = useCallback(() => {
	// 	setShowTxModalType(true)
	// }, [setShowTxModalType])
	// const handleCloseTxModal = useCallback(() => {
	// 	setShowTxModalType(false)
	// }, [setShowTxModalType])

	// logger.log(tvl)

	// const { stakingLoading, stakingData } = useAstarStaking(address)

	// useEffect(() => {
	// 	if (tvlLoading) return
	// 	setData({ ...data, ...tvl })
	// }, [data, tvl])

	// useEffect(() => {
	// 	const _ = tvlLoading && stakingLoading
	// 	setLoading(_)
	// }, [tvlLoading, stakingLoading])

	// global stuff

	// tx modal
	// const [showTxModalType, setShowTxModalType] = useState<boolean>(false)
	// const handleOpenTxModal = useCallback(() => {
	// 	setShowTxModalType(true)
	// }, [setShowTxModalType])
	// const handleCloseTxModal = useCallback(() => {
	// 	setShowTxModalType(false)
	// }, [setShowTxModalType])

	// dapp staking

	// - get all dapps participating in dapp staking

	// - calculate TVL in USD for our dapp
	// - calculate TVL in USD for all dapps

	// - get dapp staking data for our organization
	// - get stakers for our dapp
	// - get locked/staked ASTR of connected wallet for our dapp

	// const { loading, data, error } = useDappStakingDappsSubscription()

	const updateDAppId = useCallback((e) => {
		setId(e.target.value)
		if (query.id) {
			params.delete('id')
			router.push(pathname)
		}
	}, [])

	const StakerList = () => {
		if (stakers.loading) return <Loader text="Loading Stakers..." />
		if (stakers.stakers && stakers.stakers.length > 0) {
			return (
				<>
					<Stack direction="row" spacing={2}>
						<Typography variant={'body1'} color={'white'}>
							TVL
							<br />
							{totalStaked[0] || '...'} $ASTR
							<br />
							{totalStaked[1] || '...'} USD
						</Typography>
						<Typography variant={'body1'} color={'white'}></Typography>
						<Typography variant={'body1'} color={'white'}>
							Stakers: {stakers?.stakers?.length || '...'}
						</Typography>
					</Stack>

					<TableContainer component={Paper}>
						<Table sx={{ width: '100%' }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Rank</TableCell>
									<TableCell>Address</TableCell>
									<TableCell align="right">Stake ($ASTR)</TableCell>
									<TableCell align="right">Reward ($GAME)</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{stakers.stakers
									.sort((n1, n2) => n2.amount - n1.amount)
									.map((s, i) => {
										const rank = i + 1
										const address = convertSS58Prefix(s.address, 42, 1)
										const amount = s.amount?.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

										return (
											<TableRow
												key={9000 + i}
												sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
											>
												<TableCell component="th" scope="row">
													<Typography variant="mono">{rank}</Typography>
												</TableCell>

												<TableCell component="th" scope="row">
													<Typography variant="mono">{address}</Typography>
												</TableCell>
												<TableCell align="right">
													<Typography variant="mono">{amount}</Typography>
												</TableCell>
												<TableCell align="right">
													<Typography variant="mono">...</Typography>
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
		return (
			<Typography variant={'body1'} color={'white'}>
				No stakers yet.
			</Typography>
		)
	}

	if (loading) return <Loader text="Preparing your Stakeboard..." />

	return (
		<Stack spacing={4}>
			<TextField fullWidth placeholder="0x" onChange={updateDAppId} value={id} label={'DApp ID'} />
			<hr />
			<StakerList />
			<hr />
			<Typography variant={'body1'} color={'white'}>
				Connected Address: <em>{address}</em>
				<br />
				Staked by Address: <em>{stakedByAddress.amount}</em>
			</Typography>
		</Stack>
	)
}

export const Dashboard = () => {
	const address = useCurrentAccountAddress()

	const Content = () =>
		address ? (
			<DashboardView />
		) : (
			<Typography variant={'h5'} color={'white'}>
				Please connect your wallet to access Stakeboard.
			</Typography>
		)

	return <Content />
}

export default Dashboard
