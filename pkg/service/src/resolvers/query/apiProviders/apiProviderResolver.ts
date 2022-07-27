import { ApiProvider } from '../../../@types/schema'
import { ChainClient } from '../../../modules/chainClient'

export async function apiProviderResolver(): Promise<ApiProvider> {
	const chainClient = ChainClient.Instance

	try {
		if (!chainClient.initialized) {
			throw new Error('Chain client is not initialized')
		}

		const systemProperties = await chainClient.api.rpc.system.properties()
		const { tokenDecimals, tokenSymbol, ss58Format } = systemProperties.toHuman()

		const systemName = await chainClient.api.rpc.system.chain()

		return {
			types: chainClient.types,
			wsProviderUrl: process.env.CHAIN_RPC_URL_OVERRIDE || chainClient.url,
			chainProperties: {
				ss58Format: (ss58Format as any) ?? 25,
				tokenSymbol: (tokenSymbol as any) ?? ['ZERO'],
				tokenDecimals: (tokenDecimals as any) ?? [18],

				// TODO: Remove hardcoded values
				networkCurrency: 0, // 0 = ZERO
				governanceCurrency: 2, // 2 = GAME
				paymentCurrencies: 1, // 1 = PLAY
			},
			name: (systemName.toHuman() as any) ?? 'ZERO',
		}
	} catch (err) {
		console.error('apiProviderResolver error', err)
	}

	return {} as any
}
