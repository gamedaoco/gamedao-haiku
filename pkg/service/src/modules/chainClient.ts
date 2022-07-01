import { ApiPromise, WsProvider } from '@polkadot/api'
import { cryptoWaitReady } from '@polkadot/util-crypto'

import ZeroTypes from '../chainTypes/zero-types.json'
import { DbClient } from './dbClient'

const dbClient = DbClient.Instance

export class ChainClient {
	private static _instance: ChainClient
	private isInitialized: boolean = false
	private apiProvider: ApiPromise | undefined
	private unsubscribeBlockNumber: any = undefined

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

	private static async bestNumberFinalizedHandler(result: any) {
		await dbClient.updateBlockNumber(result.toNumber())
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

			this.unsubscribeBlockNumber = this.api.derive.chain.bestNumberFinalized(
				ChainClient.bestNumberFinalizedHandler,
			)

			this.isInitialized = true
		} catch (error) {
			console.error('The RPC could not be initialized', 'error', error, 'url:', this.url)
		}
	}
}
