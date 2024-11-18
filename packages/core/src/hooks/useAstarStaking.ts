import { useEffect, useState } from 'react'
import { type StakingDataSubscription, useStakingDataSubscription } from '@gamedao/graph'
import { useLogger } from '../hooks/useLogger'
import { dAppId } from '../constants/astar'

const initialState = {
	amount: 0,
	block_number: 0,
	dapp_address: '',
	period: -1,
	staker_address: '',
	timestamp: -1,
}

export function useAstarStaking(address: string) {
	const logger = useLogger('astar')
	const [state, setState] = useState(initialState)
	const { loading, data, error } = useStakingDataSubscription({
		variables: {
			dapp_address: dAppId,
			staker_address: address,
		},
	})
	useEffect(() => {
		if (loading) return
		setState(data?.stake[0])
	}, [loading, data, state])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { stakingLoading: loading, stakingData: state }
}
