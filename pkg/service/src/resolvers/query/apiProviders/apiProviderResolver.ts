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
			wsProviderUrl: chainClient.url,
			chainProperties: {
				ss58Format: ss58Format as any,
				tokenSymbol: tokenSymbol as any,
				tokenDecimals: tokenDecimals as any,
			},
			name: systemName.toHuman() as any,
		}
	} catch (err) {
		console.error('apiProviderResolver error', err)
	}

	return {} as any
}
