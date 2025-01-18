import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useLogger } from '@gamedao/utils'
import { useAstarDappStakingGeneralInfoSubscription } from '@gamedao/graph'

type State = {
	id: string
	dapp_id: number
	stakers_count: number
	registration_block_number: number
	state: string
}

const initialState: State = {
	id: '',
	dapp_id: 0,
	stakers_count: 0,
	registration_block_number: 0,
	state: '',
}

export function useAstarDappStakingGeneralInfo(id: string) {
	const logger = useLogger('useAstarDappStakingGeneralInfo')
	const [state, setState] = useState(initialState)

	const { loading, data, error } = useAstarDappStakingGeneralInfoSubscription({
		variables: { dapp: id },
	})

	useEffect(() => {
		if (loading || !data || data.dapp.length === 0) return
		const _ = data.dapp[0]
		const newState = {
			id: _.id,
			dapp_id: _.dapp_id,
			stakers_count: _.stakers_count,
			registration_block_number: _.registration_block_number,
			state: _.state,
		}
		setState(newState)
	}, [loading, data])

	useEffect(() => {
		if (error) logger.error(error)
	}, [error])

	return { loading, state }
}
