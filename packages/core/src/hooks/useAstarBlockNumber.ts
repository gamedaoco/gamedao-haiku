import { useState, useEffect } from 'react'
import { ApiPromise, WsProvider } from '@polkadot/api'

export const useAstarBlockNumber = (): number => {
	const [block, setBlock] = useState<number>(0)
	const [api, setApi] = useState<ApiPromise | null>(null)

	useEffect(() => {
		const getApi = async () => {
			try {
				const wsProvider = new WsProvider('wss://rpc.astar.network')
				const api = await ApiPromise.create({ provider: wsProvider })
				setApi((await api.isReady) ? api : null)
			} catch (error) {
				console.error('Failed to connect:', error)
			}
		}
		getApi()
	}, [])

	useEffect(() => {
		const fetchBlockNumber = async () => {
			if (!api) return
			try {
				const lastHeader = await api.rpc.chain.getHeader()
				const blockNumber = lastHeader.number.toNumber()
				setBlock(blockNumber)
			} catch (error) {
				console.error('Failed to fetch block number:', error)
			}
		}
		fetchBlockNumber()
	}, [api])

	return block
}
