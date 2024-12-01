// GameDAO Stakeboard
// A simple Dashboard for Astar dApp Staking,
// rendering information about dapp stakers

import React, { lazy, useCallback, useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
// import dynamic from 'next/dynamic'
// import { useTranslation } from 'react-i18next'

import { convertSS58Prefix, useLogger, formatNumber } from '@gamedao/utils'
import { dAppId } from '@gamedao/constants'
import {
	useCurrentAccountAddress,
	useAstarStakers,
	useAstarStaking,
	useAstarTVL,
	useAstarStakedByAddress,
	useAstarDappContent,
} from '@gamedao/core/hooks'

// import { useTheme } from '@mui/material/styles'
import { Stack, Typography, useMediaQuery, Box, Paper, TextField } from '@mui/material'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { Loader } from 'components/atoms/Loader'

type TStaker = {
	amount: number
	address: string
}

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
			astr: 0,
			usd: 0,
		},
		fx: 0,
	})

	// connected wallet address
	const address = useCurrentAccountAddress()

	// get all dapp info to feed into dropdowns etc
	const [content,setContent] = useState()
	const { state: dappContent, loading: loadingDappContent } = useAstarDappContent( '' )
	useEffect(()=>{
		if(loadingDappContent || dappContent.length === 0) return
		setContent(dappContent)
		console.log('dappContent',dappContent)
	},[ loadingDappContent,dappContent])

	// subscriptions for global, dapp and individual stake
	const { state: stakedByAddress } = useAstarStakedByAddress(address)
	const { state: stakers, loading: loadingStakers } = useAstarStakers(id)
	const { state: tvl } = useAstarTVL()

	// TODO: migrate to state
	// fx rate for astr/usd
	const [fx, setFx] = useState(0)
	useEffect(() => {
		if (!tvl?.astrusd) return
		const fx = Number(tvl.astrusd)
		setData({ ...data, fx: fx })
		setFx(fx)
	}, [tvl])

	// track the selected or injected dapp id
	const updateDAppId = useCallback((e) => {
		console.log('dropdown',e.target.value)
		setId(e.target.value)
		if (query.id) {
			params.delete('id')
			router.push(pathname)
		}
	}, [])

	// initial dapp info
	const [ dapp,updateDapp] = useState({
		astr:0,
		usd:0,
		stakers:0,
		id: "",
		creationTime: 0,
		iconUrl: "",
		imagesUrl: [],
		mainCategory: "",
		name: "",
		shortDescription: "",
	})

	// update selected dapp content
	useEffect(()=>{
		if (!dappContent.length) return
		console.log('id changed:',id)
		const data = dappContent.find( dapp => dapp.address === id )
		console.log('data:',data)

		updateDapp({
			...dapp,
			...data,
			id: data.address,
		})
	},[id, dappContent])

	// update selected dapp staking data
	const [totalStaked, setTotalStaked] = useState(['', ''])
	useEffect(() => {
		if (!stakers.stakers || stakers.stakers.length === 0) return
		const _ = stakers.stakers.map((staker:TStaker) => staker.amount).reduce((acc, amount) => (acc += amount))
		const astr = _
		const usd = ( _ * data.fx )
		const value = setTotalStaked([ formatNumber(astr), formatNumber(usd) ])
		setData({ ...data, astar: { ...data.astar, astr: astr, usd: usd }})
		updateDapp({ ...dapp, astr:astr,usd:usd, stakers:stakers.stakers.length })
	}, [id, stakers, fx])

	//
	// ui fragments
	//

	const DappSelector = () => {
		return (
			<>
				<FormControl sx={{ flex: 1 }}>
					<InputLabel id="dapp">Select dApp</InputLabel>
					<Select
						name={'organizationId'}
						value={id}
						onChange={updateDAppId}
						labelId="dapp"
						label="Select dApp"
						variant="outlined"
						>
						{dappContent.map((item, index) => (
							<MenuItem value={item.address} key={index} sx={{
								backgroundColor: '#00000099',
								backdropFilter: 'blur(10px)'
								}}>
								{item.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				{/* <TextField fullWidth placeholder="0x" onChange={updateDAppId} value={id} label={'DApp ID'} /> */}
			</>
		)
	}

	const StakerList = () => {

		if (loadingStakers) return <Loader text="Loading Stakers..." />

		if (stakers.stakers && stakers.stakers.length > 0) {
			return (
				<>

					<Stack direction="column">
						<Typography variant={'h4'}>Total Value Locked (TVL)</Typography>
						<Stack direction="row" spacing={2} justifyContent="space-between">
							<Stack direction="column">
								<Typography variant={'micro'} color={'white'}>
									$ASTR
								</Typography>
								<Typography variant={'hero2'} color={'white'}>
									{ formatNumber(dapp.astr) || '...' }
								</Typography>
							</Stack>
							<Stack direction="column">
								<Typography variant={'micro'} color={'white'}>
									USD
								</Typography>
								<Typography variant={'hero2'} color={'white'}>
									${ formatNumber(dapp.usd) || '...' }
								</Typography>
							</Stack>
							<Stack direction="column">
								<Typography variant={'micro'} color={'white'}>
									Stakers
								</Typography>
								<Typography variant={'hero2'} color={'white'}>
									{ dapp.stakers || '...'}
								</Typography>
							</Stack>
						</Stack>
					</Stack>

					<Typography variant={'h4'}>Top stakers over time</Typography>
					<TableContainer component={Paper}>
						<Table sx={{ width: '100%' }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Rank</TableCell>
									<TableCell>Address</TableCell>
									<TableCell align="right">Stake</TableCell>
									<TableCell align="left">Unit</TableCell>
									<TableCell align="right">Reward ($GAME)</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{stakers.stakers
									// .filter( (f:TStaker) => f.amount > 0 ) // filter zero amounts
									.sort(( n1:TStaker, n2:TStaker) => n2.amount - n1.amount )
									.map(( s:TStaker, i ) => {
										const rank = i + 1
										const address = convertSS58Prefix(s.address, 42)
										const amountASTR = formatNumber( s.amount )
										const amountUSD = formatNumber( s.amount * data.fx )

										return (
											<TableRow
												key={9000 + i}
												sx={{
													paddingBottom: i === 2 ? '50px' : 0,
													'td, th': {borderBottom: '1', borderColor: '0xff00ff' },
													'&:last-child td, &:last-child th': { borderBottom: 0 }
												}}
											>
												<TableCell component="th" scope="row">
													<Typography variant="mono">{rank}</Typography>
												</TableCell>
												<TableCell component="th" scope="row">
													<a href={'https://astar.subscan.io/account/'+address} target="_blank" rel="noreferrer">
													<Typography variant="mono">{address}</Typography>
													</a>
												</TableCell>
												<TableCell align="right">
													<Typography variant="mono">{amountASTR}</Typography><br/>
													<Typography variant="mono">{amountUSD}</Typography>
												</TableCell>
												<TableCell align="left">
													<Typography variant="mono">ASTR</Typography><br/>
													<Typography variant="mono">USD</Typography>
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

	const AstarTVL = () =>
		<Stack direction="column" sx={{ backgroundColor: '#ffffff11', padding:2}}>
			<Typography variant={'body1'}>Astar Global dAppStaking Results</Typography>
			<Stack direction="row" spacing={2}>
				<Typography variant={'body1'} color={'white'}>
					TVL
				</Typography>
				<Typography variant={'body1'} color={'white'}>
					{ formatNumber(data.astar.astr) || '...' } $ASTR
				</Typography>
				<Typography variant={'body1'} color={'white'}>
					{ formatNumber(data.astar.usd) || '...' } USD
				</Typography>
				<Typography variant={'body1'} color={'white'}>
					Stakers: {stakers?.stakers?.length || '...'}
				</Typography>
			</Stack>
		</Stack>


	const  UserDetails = () =>
		<Typography variant={'body1'} color={'white'}>
			Connected Address: <em>{address}</em><br />
			Staked by Address: <em>{stakedByAddress.amount}</em>
		</Typography>

if (loading) return <Loader text="Preparing your Stakeboard..." />

	return (
		<Stack spacing={4}>
			<AstarTVL/>
			<DappSelector/>
			<StakerList />
			<UserDetails />
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
