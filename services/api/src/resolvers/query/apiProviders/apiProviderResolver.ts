import { ApiProvider } from '../../../@types/schema'
import { ChainClient } from '../../../modules/chainClient'

export async function apiProviderResolver(): Promise<ApiProvider> {
	const chainClient = ChainClient.Instance

	if (!chainClient.initialized) {
		console.log('Chain client is not initialized')
		process.exit(1)
	}

	const systemProperties = await chainClient.api.rpc.system.properties()
	const { tokenDecimals, tokenSymbol, ss58Format } = systemProperties.toHuman()

	const systemName = await chainClient.api.rpc.system.chain()
	const blockDuration = ((await chainClient.api.call.auraApi.slotDuration()) as any).toNumber() / 1000

	return {
		types: '{}',
		wsProviderUrl: process.env.CHAIN_RPC_URL_OVERRIDE || chainClient.url,
		chainProperties: {
			ss58Format: (ss58Format as any) ?? 25,
			tokenSymbol: (tokenSymbol as any) ?? ['ZERO'],
			tokenDecimals: (tokenDecimals as any) ?? [18],

			// TODO: Remove hardcoded values
			networkCurrency: 0, // 0 = ZERO
			paymentCurrencies: 1, // 1 = PLAY
			governanceCurrency: 2, // 2 = GAME
			blockTargetTime: blockDuration ?? 12,
		},
		name: (systemName.toHuman() as any) ?? 'ZERO',
	}

	return {} as any
}
