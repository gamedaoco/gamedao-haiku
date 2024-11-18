import React, { lazy, useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useLogger } from '@gamedao/core/hooks/useLogger'

import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useCurrentAccountAddress } from '@gamedao/core/hooks/useCurrentAccountAddress'
import { useAstarStaking } from '@gamedao/core/hooks/useAstarStaking'
import { useAstarTVL } from '@gamedao/core/hooks/useAstarTVL'
import { useAstarStakedByAddress } from '@gamedao/core/hooks/useAstarStakedByAddress'

import { useTheme } from '@mui/material/styles'
import { Stack, Typography, useMediaQuery, Box } from '@mui/material'
import { Loader } from 'components/atoms/Loader'

export function DashboardView() {
	const logger = useLogger('astar')
	const { query } = useRouter()
	const [loading, setLoading] = useState(false)
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

	if (loading) return <Loader text="Preparing your Stakeboard..." />

	return (
		<Box>
			<Typography variant={'body1'} color={'white'}>
				1 $ASTR = {data.astr_usd} USD <br />
				TVL: {data.tvl_astar} $ASTR / {data.tvl_usd} USD
			</Typography>
			<Typography variant={'h5'} color={'white'}>
				Please connect your wallet to access Stakeboard.
			</Typography>
			<Typography variant={'h5'} color={'white'}>
				Connected Address: {address}
			</Typography>
			<Typography variant={'h5'} color={'white'}>
				Staked by Address: {stakedByAddress.amount}
			</Typography>
		</Box>
	)
}

export const Dashboard = () => {
	const address = useCurrentAccountAddress()

	const Content = () => (address ? <DashboardView /> : <Loader text="Waiting For Wallet" />)

	return (
		<Stack spacing={4}>
			<Typography variant={'h3'} color={'white'}>
				GameDAO Stakeboard
			</Typography>
			<Content />
		</Stack>
	)
}

export default Dashboard
