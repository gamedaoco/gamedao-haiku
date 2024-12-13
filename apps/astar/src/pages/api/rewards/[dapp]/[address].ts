import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { isAddress } from '@polkadot/util-crypto'

type ResponseType = {
	dapp: string
	address: string
	last: number
	current: number
	pending: number
	batchCount: number
	locked: string
}

type ErrorType = {
	error: string
}

const url = 'wss://rpc.astar.network'

export async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType | ErrorType>) {
	const { dapp, address } = req.query

	if (!isAddress(address as string)) {
		res.status(422).json({
			error: 'bad address input.',
		})
	} else {
		const wsProvider = new WsProvider(url)
		const api = await ApiPromise.create({ provider: wsProvider })

		try {
			const locked = await api.query.dappStaking.ledger(address).then((_) => _.locked.toString())
			const last = await api.query.dappStaking.ledger(address).then((_) => _.staked.era)
			const current = await api.query.dappStaking.currentEraInfo().then((_) => _.currentStakeAmount.era)
			const pending = current - last
			const batchCount = Math.ceil(pending / 7)

			res.status(200).json({
				dapp: dapp as string,
				address: address as string,
				locked: locked,
				last: last,
				current: current,
				pending: pending,
				batchCount: batchCount,
			})
		} catch (e) {
			res.status(420).json({
				error: 'unknown error.',
			})
		}
	}
}

export default handler
