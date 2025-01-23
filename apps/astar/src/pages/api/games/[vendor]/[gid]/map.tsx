import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { isAddress } from '@polkadot/util-crypto'

type ResponseType = {}

type ErrorType = {
	error: string
}

enum MapLayerType {
	BASE,
	PATH,
	NPC,
	PLAYERS,
	VEHICLES,
	BUILDINGS,
	EXTRAS,
}

const exampleMap = {
	name: '',
	description: '',
	dimensions: {
		width: 64,
		height: 64,
		originX: 32,
		originY: 32,
	},
	layers: [
		{
			name: '',
			type: MapLayerType.BASE,
			map: [],
		},
	],
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

		// query games || game
		// const games = await api.query.dappStaking.stakerInfo([address,])

		try {
			res.status(200).json({})
		} catch (e) {
			res.status(420).json({
				error: 'unknown error.',
			})
		}
	}
}

export default handler
