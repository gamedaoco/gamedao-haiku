import { useEffect, useState } from 'react'
import { dAppId } from '@gamedao/constants'
import { useLogger } from '@gamedao/core/logger'
import { type StakingDataSubscription, useStakingDataSubscription } from '@gamedao/graph'

const initialState = {
	amount: 0,
	block_number: 0,
	dapp_address: '',
	period: -1,
	staker_address: '',
	timestamp: -1,
}

export function useAstarStaking(address: string) {
	const logger = useLogger('useAstarStaking')
	const [state, setState] = useState(initialState)
	const { loading, data, error } = useStakingDataSubscription({
		variables: {
			dapp_address: dAppId,
			staker_address: address,
		},
	})
	useEffect(() => {
		if (loading || !data?.stake) return
		setState(data?.stake[0])
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { stakingLoading: loading, stakingData: state }
}
