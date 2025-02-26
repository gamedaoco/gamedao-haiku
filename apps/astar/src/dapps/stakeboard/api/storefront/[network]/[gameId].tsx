import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { isAddress } from '@polkadot/util-crypto'

type ResponseType = {
	status: string
}

type ErrorType = {
	error: string
}

const getNetwork = (network: string) => {
	switch (network) {
		case 'astar':
		case 'astar-l1':
			return 'wss://rpc.astar.network'
			break
		case 'zero':
		case 'zero-alphaville':
			return 'wss://rpc.dev.gamedao.net'
			break
		default:
			return 'wss://rpc.dev.gamedao.net'
	}
}

export async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType | ErrorType>) {
	const { network, gameId } = req.query

	if (!network) res.status(200).json({ error: 'unknown network' })

	try {
		const wsProvider = new WsProvider(getNetwork(network as string))
		const api = await ApiPromise.create({ provider: wsProvider })
		// query games || game
		// const games = await api.query.dappStaking.stakerInfo([address,])
		res.status(200).json({
			status: 'ok',
		})
	} catch (e) {
		res.status(420).json({
			error: 'unknown error',
		})
	}
}

export default handler
