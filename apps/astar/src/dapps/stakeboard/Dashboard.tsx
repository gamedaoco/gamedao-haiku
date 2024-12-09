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
	useAstarDappCurrentTVL,
	useAstarDappStakingEvents,
	useAstarDappStakingEventsAggregate,
} from '@gamedao/core/hooks'

// import { useTheme } from '@mui/material/styles'
import { Stack, Typography, useMediaQuery, Box, Paper, TextField } from '@mui/material'

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

	const searchParams = useSearchParams()
	const params = new URLSearchParams(searchParams)
	const router = useRouter()
	const pathname = usePathname()
	const { query } = useRouter()

	const [id, setId] = useState<string>((query.id as string) || dAppId)
	const [fx, setFx] = useState(0)
	const [data, setData] = useState(initAstarState)
	const [dapp, updateDapp] = useState(initDappState)

	// connected wallet address
	const address = useCurrentAccountAddress()

	// get all dapp info to feed into dropdowns etc
	const { state: dappContent } = useAstarDappContent('')
	const { state: dappTVL } = useAstarDappCurrentTVL(id)
	const { state: dappStakers, loading } = useAstarStakers(id)
	const { state: stakedByAddress } = useAstarStakedByAddress(address)
	const { state: astarTVL } = useAstarTVL()
	const { state: dappStaking } = useAstarDappStakingEventsAggregate(id)

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
		if (!dappStakers.stakers || dappStakers.stakers.length === 0) return
		console.log('stakers changed:', dappStakers.stakers)
		const tvl = dappStakers.stakers.map((staker: TStaker) => staker.amount).reduce((acc, amount) => (acc += amount))
		const astr = tvl
		const usd = tvl * fx
		const _ = {
			...dapp,
			astr,
			usd,
			stakers: dappStakers.totalStakers,
		}
		updateDapp(_)
	}, [id, dappStakers, fx])

	// update selected dapp content
	useEffect(() => {
		if (dappContent.length < 1) return
		console.log('id changed:', id)
		const data = dappContent.find((dapp) => dapp.address === id)
		console.log('data', data.name, { ...dapp })
		const _ = { ...dapp, ...data, id: data.address }
		updateDapp(_)
	}, [id, dappContent])

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
		setData(_)
		setFx(Number(astarTVL.fx))
	}, [astarTVL])

	console.log(id, dapp.name, dapp.iconUrl)

	const StakerList = () => {
		if (loading) return <Loader text="Loading Stakers..." />

		if (dapp.stakers > 0) {
			return (
				<>
					<DappStakers fx={fx} stakers={dappStakers.stakers} id={id} />
				</>
			)
		}
		return (
			<Typography variant={'body1'} color={'white'}>
				No stakers yet.
			</Typography>
		)
	}

	const AstarTVL = () => (
		<Stack direction="column" sx={{ backgroundColor: '#ffffff11', padding: 2 }}>
			<Typography variant={'body1'}>Astar Global dAppStaking</Typography>
			<Stack direction="row" spacing={2} justifyContent="space-between">
				<Typography variant={'body1'} color={'white'}>
					{formatNumber(data.astr) || '...'} $ASTR
				</Typography>
				<Typography variant={'body1'} color={'white'}>
					{formatNumber(data.usd) || '...'} USD
				</Typography>
				<Typography variant={'body1'} color={'white'}>
					Lockers: {data.lockers || '...'}
				</Typography>
			</Stack>
		</Stack>
	)

	const UserDetails = () => (
		<Typography variant={'body1'} color={'white'} sx={{ backgroundColor: '#ffffff11', padding: 2 }}>
			Connected Address: <em>{address}</em>
			<br />
			Staked by Address: <em>{stakedByAddress.amount}</em>
		</Typography>
	)

	return loading ? (
		<Loader text="Preparing your Stakeboard..." />
	) : (
		<Stack spacing={4}>
			{/* <AstarTVL/> */}
			<DappSelector onUpdate={updateDAppId} content={dappContent} id={id} />
			<DappInfo dapp={dapp} />
			<RewardChart id={id} />
			<StakerList />
			{/* <UserDetails /> */}
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
