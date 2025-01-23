import { useState, useEffect } from 'react'
import { ApiPromise, WsProvider } from '@polkadot/api'

export async function useAstarBlockNumber() {
	const wsProvider = new WsProvider('wss://rpc.astar.network')

	const [block, setBlock] = useState(0)

	useEffect(() => {
		const getBlock = async () => {
			try {
				const number: number =
					(await ApiPromise.create({ provider: wsProvider })
						.then((api) => api.rpc.chain.getHeader())
						.then(({ number }) => number.toNumber())
						.catch((error) => console.error('Failed to fetch header:', error))) || 0
				setBlock(number)
			} catch (error) {
				console.error('Failed to fetch block number:', error)
			}
		}
		getBlock()
	}, [])

	return block
}
