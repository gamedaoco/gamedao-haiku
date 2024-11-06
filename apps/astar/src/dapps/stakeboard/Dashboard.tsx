import React, { lazy, useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useLogger } from 'src/hooks/useLogger'

import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useAstarStaking } from 'hooks/useAstarStaking'
import { useAstarTVL } from 'hooks/useAstarTVL'

import { useTheme } from '@mui/material/styles'
import { Stack, Typography, useMediaQuery } from '@mui/material'
import { Loader } from 'components/atoms/Loader'

export function Dashboard() {
	const logger = useLogger('astar')
	const { query } = useRouter()

	const [data, setData] = useState({
		block_number: 0,
		lockers_count: 0,
		tvl: 0,
		usd_price: 0,
	})
	const address = useCurrentAccountAddress()
	const { tvlLoading, tvlData } = useAstarTVL()
	const { stakingLoading, stakingData } = useAstarStaking(address)

	useEffect(() => {
		if (tvlLoading) return
		setData({ ...data, ...tvlData })
	}, [tvlData])

	const [loading, setLoading] = useState(false)
	useEffect(() => {
		const _ = tvlLoading && stakingLoading
		setLoading(_)
	}, [tvlLoading, stakingLoading])

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
		<Stack spacing={4}>
			<Typography variant={'h3'} color={'white'}>
				GameDAO Stakeboard
			</Typography>
			<Typography variant={'body1'} color={'white'}>
				1 $ASTR = {stakingData?.usd_price} USD <br />
				TVL: {stakingData?.tvl} $ASTR / {stakingData?.tvl * stakingData?.tvl} USD
			</Typography>
			<Typography variant={'h5'} color={'white'}>
				Connected Adress: {address}
			</Typography>
		</Stack>
	)
}

export default Dashboard
