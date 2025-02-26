import { Dashboard } from 'dapps/stakeboard/Dashboard'

import React, { lazy, useCallback, useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

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

import { Stack, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { type TStaker } from './types'
import { Layout } from 'layouts/astar'

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

export function Page() {
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

	const handlePeriodChange = (event) => {
		setPeriod(event.target.value)
	}

	return (
		<Layout showHeader showFooter>
			<Stack spacing={4}>
				<Typography variant="h2">Ranking</Typography>
			</Stack>
		</Layout>
	)
}

export default Page
