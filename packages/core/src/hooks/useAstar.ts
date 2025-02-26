import { useState, useEffect, useMemo } from 'react'
import { ApiPromise, WsProvider } from '@polkadot/api'

export type AstarState = {
	api: ApiPromise | null
	currentBlock: number | null
}
export function useAstar() {
	// Create a state variable for the API instance
	// const [api, setApi] = useState<ApiPromise | null>(null)

	// useEffect(() => {
	// 	if (api?.isReady) return

	// 	console.log('Creating new API instance...')
	// 	const getApi = async () => {
	// 		try {
	// 			const wsProvider = new WsProvider('wss://rpc.astar.network')
	// 			const api = ApiPromise.create({ provider: wsProvider })
	// 				.then((api) => {
	// 					setApi(api)
	// 				})
	// 				.catch((error) => console.error('Failed to create API:', error))
	// 		} catch (error) {
	// 			console.error('Failed to connect to the API:', error)
	// 		}
	// 	}
	// 	getApi()
	// }, [api])

	// Create a state variable for the current block number
	const [block, setBlock] = useState(0)
	// useEffect(() => {
	// if (!api?.isReady) return
	// {

	// const getBlock = async () => {
	// 		try {
	// 			api.rpc.chain
	// 				.getHeader()
	// 				.then((block) => {
	// 					setBlock(block.number.toNumber())
	// 					console.log('block', block.number.toNumber())
	// 				})
	// 				.catch((error) => console.error('Failed to fetch header:', error))
	// 		} catch (error) {
	// 			console.error('Failed to fetch block number:', error)
	// 		}
	// 	}
	// getBlock()
	// }, [api.isReady])

	return {
		// api: api,
		currentBlock: block,
	}
}
