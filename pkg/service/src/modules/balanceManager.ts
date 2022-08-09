import { Session } from '@prisma/client'

import { getZeroAddressFromAddress } from '../utils/accountUtils'
import { ChainClient } from './chainClient'
import { DbClient } from './dbClient'
import { SessionManager } from './sessionManager'

const sessionManager = SessionManager.Instance
const chainClient = ChainClient.Instance
const dbClient = DbClient.Instance

export class BalanceManager {
	private static _instance: BalanceManager
	private unsubscribeSystem: any
	private unsubscribeTokens: any
	private isInitialized: boolean = false

	public static get Instance() {
		return BalanceManager._instance || (BalanceManager._instance = new BalanceManager())
	}

	public async Initialize() {
		if (this.isInitialized) {
			return
		}

		sessionManager.onActiveSessionsUpdate(this.onActiveSessionsUpdate.bind(this))

		this.isInitialized = true
	}

	private async addOrUpdateBalanceForAccount(
		address: string,
		balanceId: number,
		free: string,
		reserved: string,
		frozen: string,
	): Promise<boolean> {
		if (!this.isInitialized || !dbClient.initialized) {
			return false
		}
		try {
			const addressZeroFormat = getZeroAddressFromAddress(address)

			const update = await dbClient.client.balance.upsert({
				where: { address_balanceId: { address: addressZeroFormat, balanceId: balanceId } },
				update: {
					free: free,
					reserved: reserved,
					frozen: frozen,
				},
				create: {
					address: addressZeroFormat,
					balanceId: balanceId,
					free: free,
					reserved: reserved,
					frozen: frozen,
				},
			})

			return !!update
		} catch (e) {
			console.error('addOrUpdateBalanceForAccount', e)
		}
		return false
	}

	private async handleSystemBalances(addresses: string[], balances: any) {
		if (addresses.length !== balances.length) {
			return
		}

		for (let i = 0; i < addresses.length; i++) {
			const address = addresses[i]
			const { data } = balances[i]?.toHuman() ?? {}
			const { free, reserved, frozen } = data
			const balanceId = 0 // System currency

			const result = await this.addOrUpdateBalanceForAccount(
				address,
				balanceId,
				free ?? '0',
				reserved ?? '0',
				frozen ?? '0',
			)

			if (!result) {
				console.warn('Failed to add or update balance for account:', address, data)
			}
		}
	}

	private async handleTokenBalances(keys: number[], addresses: string[], balances: any) {
		if (addresses.length * keys.length !== balances.length) {
			return
		}

		const accountChunks: any = []

		for (let i = 0; i < balances.length; i += keys.length) {
			accountChunks.push(balances.slice(i, i + keys.length))
		}

		if (addresses.length !== accountChunks.length) {
			return
		}

		for (let i = 0; i < addresses.length; i++) {
			const address = addresses[i]

			for (let j = 0; j < keys.length; j++) {
				const balanceId = keys[j]
				const data = accountChunks[i][j].toHuman()
				const { free, reserved, frozen } = data

				const result = await this.addOrUpdateBalanceForAccount(
					address,
					balanceId,
					free ?? '0',
					reserved ?? '0',
					frozen ?? '0',
				)

				if (!result) {
					console.warn('Failed to update token balance for account:', address, data)
				}
			}
		}
	}

	private async onActiveSessionsUpdate(activeSessions: Session[]) {
		if (!this.isInitialized || !chainClient.initialized) {
			return
		}

		if (this.unsubscribeSystem) {
			this.unsubscribeSystem()
		}

		if (this.unsubscribeTokens) {
			this.unsubscribeTokens()
		}

		const addresses = activeSessions.map((session) => session.address)
		if (!addresses.length) {
			return
		}

		this.unsubscribeSystem = await chainClient.api.query.system.account.multi(addresses, (balances) => {
			this.handleSystemBalances(addresses, balances)
		})

		// TODO: Refactor get real balance ids from chain
		const createCurrencyId = (token: string) =>
			chainClient.api.createType('ZeroPrimitivesCurrencyCurrencyId', { Token: token })
		const keys = [createCurrencyId('PLAY'), createCurrencyId('GAME')]

		const queries: any = []
		addresses.forEach((address) => {
			return keys.forEach((key) => queries.push([chainClient.api.query.tokens.accounts, [address, key]]))
		})

		this.unsubscribeTokens = await chainClient.api.queryMulti(queries, (balances) => {
			// ToDo: Exchange array
			this.handleTokenBalances([1, 2], addresses, balances)
		})
	}
}
