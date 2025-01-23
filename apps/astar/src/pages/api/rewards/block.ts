import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiPromise, WsProvider } from '@polkadot/api'

type ResponseType = {
	block: number
}

type ErrorType = {
	error: string
}

const url =

export async function handler(res: NextApiResponse<ResponseType | ErrorType>) {

	const wsProvider = new WsProvider('wss://rpc.astar.network')
	const api = await ApiPromise.create({ provider: wsProvider })
	await api.isReady;
	const lastHeader = await api.rpc.chain.getHeader();
	const block = lastHeader.number.toNumber();
	res.status(200).json({
		block: block,
	})
}

export default handler
