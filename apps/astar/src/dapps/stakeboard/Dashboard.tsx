import React, { lazy, useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useLogger } from '@gamedao/core/hooks/useLogger'

import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useCurrentAccountAddress } from '@gamedao/core/hooks/useCurrentAccountAddress'
import { useAstarStakers } from '@gamedao/core/hooks/useAstarDAppStakers'
import { useAstarStaking } from '@gamedao/core/hooks/useAstarStaking'
import { useAstarTVL } from '@gamedao/core/hooks/useAstarTVL'
import { useAstarStakedByAddress } from '@gamedao/core/hooks/useAstarStakedByAddress'

import { useTheme } from '@mui/material/styles'
import { Stack, Typography, useMediaQuery, Box, Paper, TextField } from '@mui/material'
import { Loader } from 'components/atoms/Loader'
import { dAppId } from '@gamedao/core/constants/astar'
import type { Data3DTexture } from 'three/src/Three.js'

export function DashboardView() {
	const logger = useLogger('astar')
	const { query } = useRouter()
	const [loading, setLoading] = useState(false)
	const [id, setId] = useState(dAppId)
	const [data, setData] = useState({
		block_number: 0,
		lockers_count: 0,
		stakers: 0,
		tvl_astar: 0,
		tvl_usd: 0,
		astr_usd: 0,
	})
	const address = useCurrentAccountAddress()
	const { state: stakedByAddress } = useAstarStakedByAddress(address)
	const { state: stakers } = useAstarStakers(id)
	// const { tvlLoading, state: tvl } = useAstarTVL()
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
	}, [])

	const StakerList = () => {
		if (stakers.loading) return <Loader text="Loading Stakers..." />
		if (stakers.stakers && stakers.stakers.length > 0) {
			return stakers.stakers.map((s) => (
				<Box key={s.id}>
					<span>ADDRESS: {s.address}</span>
					<br />
					<span>AMOUNT: {s.amount}</span>
				</Box>
			))
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
			<TextField fullWidth placeholder="0x" onChange={updateDAppId} value={dAppId} label={'DApp ID'} />
			<hr />
			<StakerList />
			<hr />
			<Typography variant={'body1'} color={'white'}>
				1 $ASTR = {data.astr_usd} USD, TVL: {data.tvl_astar} $ASTR / {data.tvl_usd} USD
			</Typography>
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
