import { useState, useEffect } from 'react'
import { ApiPromise, WsProvider } from '@polkadot/api'

export const useAstarBlockNumber = (): number => {
	const [block, setBlock] = useState(0)

	useEffect(() => {
		const getBlock = async () => {
			try {
				const wsProvider = new WsProvider('wss://rpc.astar.network')
				const api = ApiPromise.create({ provider: wsProvider })
				// get current block number from the Astar network
				const lastHeader = await api.rpc.chain.getHeader()
				// convert to a number and set the state
				const block = lastHeader.number.toNumber()
				setBlock(block)
				console.log(`Current block number: ${block}`)
			} catch (error) {
				console.error('Failed to fetch block number:', error)
			}
		}
		getBlock()
	}, [])

	return block
}
