// GameDAO Stakeboard
// A simple Dashboard for Astar dApp Staking,
// rendering information about dapp stakers

import React, { lazy, useCallback, useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
// import dynamic from 'next/dynamic'
// import { useTranslation } from 'react-i18next'

import BigNumber from 'bignumber.js'

import { convertSS58Prefix, useLogger, formatNumber, formatBalanceString } from '@gamedao/utils'
import { dAppId } from '@gamedao/constants'

import {
	useCurrentAccountAddress,
	useAstarDappStakers,
	useAstarStaking,
	useAstarTVL,
	useAstarStakedByAddress,
	useAstarDappContent,
	useAstarDappTVL,
	useAstarDappStakingGeneralInfo,
	useAstarDappStakingRewardsAggregate,
} from '@gamedao/core/hooks'

import { useAppContext } from 'providers/app/components/context'

// import { useTheme } from '@mui/material/styles'
import {
	Stack,
	Typography,
	Grid,
	useMediaQuery,
	Box,
	Paper,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@mui/material'

// import { RxClock } from 'react-icons/rx'
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
// import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

//
// TODO:
// -- duration = current block - first block staked
// -- reward factors =
//    periods of dapp staking participation
//    total stakers per period * stake
//

import { type TStaker } from './types'

import { Loader } from 'components/atoms/Loader'
import { DappSelector } from './components/DappSelector'
import { DappStakers } from './components/DappStakers'
import { DappInfo } from './components/DappInfo'
import { RewardChart } from './components/RewardChart'
import { DappStakerGrid } from './components/DappStakerGrid'

const initDappState = {
	astr: 0,
	usd: 0,
	stakers: 0,
	id: '',
	creationTime: 0,
	iconUrl: '',
	imagesUrl: [],
	mainCategory: '',
	name: '',
	shortDescription: '',
	tvl: '',
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
	const {
		astar: { block },
	} = useAppContext()

	const searchParams = useSearchParams()
	const params = new URLSearchParams(searchParams)
	const router = useRouter()
	const pathname = usePathname()
	const { query } = useRouter()

	const [id, setId] = useState<string>((query.id as string) || dAppId)
	const [period, setPeriod] = useState(4)
	// TODO: calculate current epoch
	const [epoc, setEpoc] = useState(105)
	const [fx, setFx] = useState(0)

	const [astarBlock, setAstarBlock] = useState(0)

	const [astarData, setAstarData] = useState(initAstarState)
	const [dapp, updateDapp] = useState(initDappState)

	// connected wallet address
	const address = useCurrentAccountAddress()

	// account related
	const { state: stakedByAddress } = useAstarStakedByAddress(address)

	// dapp related
	const { state: dappContent } = useAstarDappContent('')
	const { state: dappTVL } = useAstarDappTVL(id, period)
	const { state: dappStakers, loading } = useAstarDappStakers(id)
	// const { state: dappStaking } = useAstarDappStakingEventsAggregate(id)
	const { state: dappInfo } = useAstarDappStakingGeneralInfo(id)

	// astar related
	const { state: astarTVL } = useAstarTVL()

	// get all eligibile staking events for the dapp in the current period
	const { state: stakingEvents } = useAstarDappStakingRewardsAggregate(id, 3)
	const [events, setEvents] = useState({})
	useEffect(() => {
		if (!stakingEvents || stakingEvents.totalStakingEvents === 0) return
		// console.log('stakingEvents', stakingEvents)
		setEvents(stakingEvents)
	}, [stakingEvents])

	// track the selected or injected dapp id
	const updateDAppId = useCallback((e) => {
		setId(e.target.value)
		if (query.id) {
			params.delete('id')
			router.push(pathname)
		}
	}, [])

	// update selected dapp stakers
	useEffect(() => {
		if (!dappInfo || !dappInfo.stakers_count) return
		// console.log('dappInfo:', dappInfo)
		updateDapp({
			...dapp,
			stakers: dappInfo.stakers_count,
		})
	}, [id, dappInfo, period])

	// update selected dapp tvl
	useEffect(() => {
		if (!dappTVL) return
		// console.log('tvl changed:', dappTVL)
		const astr = BigNumber(dappTVL.totalStaked)
		const usd = astr.multipliedBy(BigNumber(fx))
		const _ = {
			...dapp,
			astr: formatBalanceString(astr.toString(), 18, 4),
			usd: formatBalanceString(usd.toString(), 18, 4),
		}
		updateDapp(_)
	}, [id, dappTVL, fx, period])

	// update selected dapp content
	useEffect(() => {
		if (dappContent.length < 1) return
		// console.log('id changed:', id)
		const data = dappContent.find((dapp) => dapp.address === id)
		// console.log('data', data.name, { ...dapp })
		const _ = { ...dapp, ...data, id: data.address }
		updateDapp(_)
	}, [id, dappContent, period])

	useEffect(() => {
		if (!astarTVL) return
		const _ = {
			block: astarTVL.block,
			lockers: astarTVL.lockers,
			stakers: 0,
			astr: 0,
			usd: 0,
			fx: Number(astarTVL.fx),
		}
		setAstarData(_)
		setFx(Number(astarTVL.fx))
	}, [astarTVL])

	// console.log(id, dapp.name, dapp.iconUrl)

	// const StakerList = () => {
	// 	if (loading) return <Loader text="Loading Stakers..." />

	// 	if (dapp.stakers > 0) {
	// 		return (
	// 			<>
	// 				<DappStakers fx={fx} stakers={dappStakers.stakers} id={id} />
	// 			</>
	// 		)
	// 	}
	// 	return (
	// 		<Typography variant={'body1'} color={'white'}>
	// 			No stakers yet.
	// 		</Typography>
	// 	)
	// }

	// const AstarTVL = () => (
	// 	<Stack direction="column" sx={{ backgroundColor: '#ffffff11', padding: 2 }}>
	// 		<Typography variant={'body1'}>Astar Global dAppStaking</Typography>
	// 		<Stack direction="row" spacing={2} justifyContent="space-between">
	// 			<Typography variant={'body1'} color={'white'}>
	// 				{formatNumber(data.astr) || '...'} $ASTR
	// 			</Typography>
	// 			<Typography variant={'body1'} color={'white'}>
	// 				{formatNumber(data.usd) || '...'} USD
	// 			</Typography>
	// 			<Typography variant={'body1'} color={'white'}>
	// 				Lockers: {data.lockers || '...'}
	// 			</Typography>
	// 		</Stack>
	// 	</Stack>
	// )

	// const UserDetails = () => (
	// 	<Typography variant={'body1'} color={'white'} sx={{ backgroundColor: '#ffffff11', padding: 2 }}>
	// 		Connected Address: <em>{address}</em>
	// 		<br />
	// 		Staked by Address: <em>{stakedByAddress.amount}</em>
	// 	</Typography>
	// )

	const handlePeriodChange = (event) => {
		setPeriod(event.target.value)
	}

	return loading ? (
		<Loader text="Preparing your Stakeboard..." />
	) : (
		<Stack spacing={4}>
			<Typography variant="h2">Stakeboard</Typography>
			<FormControl fullWidth>
				<InputLabel id="period-select-label">Select Period</InputLabel>
				<Select
					labelId="period-select-label"
					id="period-select"
					value={period}
					label="Select Period"
					onChange={handlePeriodChange}
				>
					<MenuItem value={1}>Period 1</MenuItem>
					<MenuItem value={2}>Period 2</MenuItem>
					<MenuItem value={3}>Period 3</MenuItem>
					<MenuItem value={4}>Period 4</MenuItem>
				</Select>
			</FormControl>
			<DappSelector onUpdate={updateDAppId} content={dappContent} id={id} />
			<DappInfo dapp={dapp} />
			<RewardChart id={id} />
			{dappStakers.stakers && <DappStakerGrid stakers={dappStakers.stakers} events={events} fx={fx} id={id} />}
			{/* <AstarTVL /> */}
			{/* <UserDetails /> */}
		</Stack>
	)
}

export const Dashboard = () => {
	const address = useCurrentAccountAddress()

	const Content = () => (
		// address ? (
		<DashboardView />
	)
	// ) : (
	// 	<Typography variant={'h5'} color={'white'}>
	// 		Please connect your wallet to access Stakeboard.
	// 	</Typography>
	// )

	return <Content />
}

export default Dashboard
