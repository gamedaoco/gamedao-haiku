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
import { RxClock } from 'react-icons/rx'
import { Stack, Typography, useMediaQuery, Box, Paper, TextField } from '@mui/material'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { Loader } from 'components/atoms/Loader'

type TStaker = {
	amount: number
	address: string
}

const initDappState = {
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
}
const initAstarState = {
	block: 0,
	lockers: 0,
	stakers: 0,
	astr: 0,
	usd: 0,
	fx: 0,
}

export function DashboardView() {
	const logger = useLogger('astar')

	const searchParams = useSearchParams()
	const params = new URLSearchParams(searchParams)
	const router = useRouter()
	const pathname = usePathname()
	const { query } = useRouter()

	const [ id, setId ] = useState<string>( query.id as string || dAppId )
	const [ fx, setFx ] = useState(0)
	const [ data, setData ] = useState(initAstarState)
	const [ dapp, updateDapp ] = useState(initDappState)

	// connected wallet address
	const address = useCurrentAccountAddress()

	// get all dapp info to feed into dropdowns etc
	const { state: dappContent } = useAstarDappContent( '' )
	const { state: stakedByAddress } = useAstarStakedByAddress(address)
	const { state: stakers, loading } = useAstarStakers(id)
	const { state: tvl } = useAstarTVL()

	// track the selected or injected dapp id
	const updateDAppId = useCallback((e) => {
		setId(e.target.value)
		if (query.id) {
			params.delete('id')
			router.push(pathname)
		}
	}, [])

	// update selected dapp staking data
	useEffect(() => {
		if (!stakers.stakers || stakers.stakers.length === 0) return
		console.log('stakers changed:', stakers.stakers)
		const tvl = stakers.stakers.map((staker:TStaker) => staker.amount).reduce((acc, amount) => (acc += amount))
		const astr = tvl
		const usd = ( tvl * fx )
		const _ = {
			...dapp,
			astr, usd, stakers:stakers.totalStakers
		}
		updateDapp(_)
	}, [id, stakers, fx])

	// update selected dapp content
	useEffect(()=>{
		if ( dappContent.length < 1 ) return
		console.log('id changed:',id)
		const data = dappContent.find( dapp => dapp.address === id )
		console.log('data', data.name, { ...dapp })
		const _ = { ...dapp, ...data, id: data.address }
		updateDapp(_)
	},[id, dappContent])

	useEffect(()=>{
		if (!tvl) return
		const _ = {
			block: tvl.block,
			lockers: tvl.lockers,
			stakers: 0,
			astr: 0,
			usd: 0,
			fx: Number(tvl.fx),
		}
		setData(_)
		setFx( Number(tvl.fx) )
	},[tvl])



	console.log( id, dapp.name, dapp.iconUrl  )
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

		if (loading) return <Loader text="Loading Stakers..." />

		if ( dapp.stakers > 0) {
			return (
				<>
					<Stack direction="column" spacing={2} sx={{ padding: 2, border: 1, borderColor: '#ffffff33'}}>
						<Stack direction="row" spacing={2} alignContent="center">
							<img src={dapp.iconUrl} width={64} height={64}/>
							<Box>
								<Typography variant={'h4'}>{dapp.name}</Typography>
								<Typography variant={'body1'}>{dapp.shortDescription}</Typography>
							</Box>
						</Stack>
						<Box>
							<Typography variant={'body1'}>Total Value Locked (TVL)</Typography>
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
						</Box>
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
									<TableCell align="right">Eras</TableCell>
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
													<Typography variant="mono"></Typography>
												</TableCell>
												<TableCell align="right">
													<Typography variant="mono"><RxClock/></Typography>
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
			<Typography variant={'body1'}>Astar Global dAppStaking</Typography>
			<Stack direction="row" spacing={2} justifyContent="space-between">
				<Typography variant={'body1'} color={'white'}>
					{ formatNumber(data.astr) || '...' } $ASTR
				</Typography>
				<Typography variant={'body1'} color={'white'}>
					{ formatNumber(data.usd) || '...' } USD
				</Typography>
				<Typography variant={'body1'} color={'white'}>
					Lockers: {data.lockers || '...'}
				</Typography>
			</Stack>
		</Stack>

	const  UserDetails = () =>
		<Typography variant={'body1'} color={'white'} sx={{ backgroundColor: '#ffffff11', padding:2}}>
			Connected Address: <em>{address}</em><br />
			Staked by Address: <em>{stakedByAddress.amount}</em>
		</Typography>

	return loading ? <Loader text="Preparing your Stakeboard..." /> : (
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
