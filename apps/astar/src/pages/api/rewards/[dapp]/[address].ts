import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { isAddress } from '@polkadot/util-crypto'
import BigNumber from 'bignumber.js'

import { graphqlClient } from 'src/lib'
import { AstarDappStakingEventsQuery, AstarDappStakingEventsQueryVariables } from '@gamedao/graph'
import { gql } from '@apollo/client'

// === calculate rewards per block / epoc ===
// total rewards =
// 1 - get array with passed blocks from first stake block to current block
// 2 - multiply each stake per block by block reward by curve function

const QUERY = gql`
	query AstarDappStakingEvents($address: String, $period: Int, $dapp: String) {
		stake(where: { dapp_address: { _eq: $dapp }, staker_address: { _eq: $address }, period: { _eq: $period } }) {
			id
			dapp_address
			block_number
			amount
			period
			staker_address
			timestamp
		}
	}
`
// RewardsType defines parameters needed to calculate
// a factor, e.g. as multiple of time passed
// to calculate amounts of token to be dropped.
// These amounts would be indicative only and
// should be calculated based on on-chain data.

type RewardsType = {
	description?: string
	f?: string
	totalRewards?: BigNumber
	claimedRewards?: BigNumber
	unclaimedRewards?: BigNumber
	totalEpocs?: number
}

// Repsonse returns various data related to
// claimable amounts of $ASTR and a rewards object
// for custom drop amount calculation.

type ResponseType = {
	dapp: string
	address: string
	last: number
	current: number
	pending: number
	batchCount: number
	locked: string
	rewards: RewardsType | null
}

type ErrorType = {
	error: string
}

const url = 'wss://rpc.astar.network'

export async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType | ErrorType>) {
	const { dapp, address } = req.query

	try {
		// Use generated types and document for the query
		const { data } = await graphqlClient.query<AstarDappStakingEventsQuery, AstarDappStakingEventsQueryVariables>({
			query: QUERY,
			variables: {
				address: address as string,
				period: 3,
				dapp: dapp as string,
			},
		})
		console.log('data', data)
	} catch (error) {
		console.error('GraphQL Request Failed', error)
		res.status(500).json({ error: 'Failed to fetch data' })
	}

	if (!isAddress(address as string)) {
		res.status(422).json({
			error: 'bad address input.',
		})
	} else {
		const wsProvider = new WsProvider(url)
		let api

		try {
			api = await ApiPromise.create({ provider: wsProvider, types: {} })
		} catch {
			res.status(500).json({ error: 'Failed to connect to the API.' })
		}

		// query current stake by `address` for `dapp`
		// const dappFallback = '0x89ed50cec44a3db4186ba54cdf575ec140937c55'
		// const staked = await api.query.dappStaking.stakerInfo([address,])

		try {
			const locked = await api.query.dappStaking.ledger(address).then((_) => _.locked.toString())
			const last = await api.query.dappStaking.ledger(address).then((_) => _.staked.era)
			const current = await api.query.dappStaking.currentEraInfo().then((_) => _.currentStakeAmount.era)
			const pending = current - last
			const batchCount = Math.ceil(pending / 7)

			// for now we hardwire the calculation of drop rewards
			// for GameDAO dApp Staking only.

			const description = '$GAME rewards for dApp Stakers'
			const f = '' // should be pulled from ipfs or onchain
			const totalRewards = BigNumber(0)
			const claimedRewards = BigNumber(0)
			const unclaimedRewards = BigNumber(0)
			const totalEpocs = 0

			const rewards =
				dapp === '0x89ed50cec44a3db4186ba54cdf575ec140937c55'
					? {
							description: 'claimable GAME rewards',
							f: '',
							totalRewards: totalRewards,
							claimedRewards: claimedRewards,
							unclaimedRewards: unclaimedRewards,
							totalEpocs: totalEpocs,
						}
					: null

			res.status(200).json({
				dapp: dapp as string,
				address: address as string,
				locked: locked,
				last: last,
				current: current,
				pending: pending,
				batchCount: batchCount,
				rewards: rewards,
			})
		} catch (e) {
			res.status(420).json({
				error: 'unknown error.',
			})
		}
	}
}

export default handler
