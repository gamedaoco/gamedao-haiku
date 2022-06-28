import { ApiPromise, WsProvider } from '@polkadot/api'
import { cryptoWaitReady } from '@polkadot/util-crypto'

import ZeroTypes from '../chainTypes/zero-types.json'

export class ChainClient {
	private static _instance: ChainClient
	private isInitialized: boolean = false
	private apiProvider: ApiPromise | undefined

	public static get Instance() {
		return ChainClient._instance || (ChainClient._instance = new ChainClient())
	}

	public get initialized() {
		return this.isInitialized
	}

	public get types(): string {
		return JSON.stringify(ZeroTypes)
	}

	public get url(): string {
		return process.env.CHAIN_RPC_URL as string
	}

	public get api(): ApiPromise {
		return this.apiProvider as ApiPromise
	}

	public async Initialize() {
		if (this.initialized) {
			return
		}

		try {
			await cryptoWaitReady

			this.apiProvider = await ApiPromise.create({
				provider: new WsProvider(this.url),
				types: ZeroTypes,
				throwOnConnect: true,
			})

			await this.apiProvider.isReady
			this.isInitialized = true
		} catch (error) {
			console.error('The RPC could not be initialized', 'error', error, 'url:', this.url)
		}
	}
}
