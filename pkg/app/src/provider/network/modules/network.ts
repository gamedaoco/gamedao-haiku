import { ApiPromise, WsProvider } from '@polkadot/api'
import type { ApiProvider } from 'src/@types/network'
import type { ApiProvider as ApiProviderConfig } from 'src/queries'

// Call health every 30 seconds as keepalive
// Websocket is closed after one minute if no request is made
export async function keepAlive(apiProviders: ApiProvider[]) {
	for (const apiProvider of apiProviders) {
		try {
			await apiProvider.apiProvider.rpc.system.health()
		} catch (error: any) {
			console.error('Keep alive could not be performed', 'error', error)
		}
	}

	return null
}

// Connect to ws node and return ApiProvider
export async function initializeApis(configs: ApiProviderConfig[]): Promise<ApiProvider[]> {
	if (!Array.isArray(configs)) return null

	const apiConfigs: ApiProvider[] = []

	for (const config of configs) {
		try {
			const apiProvider = await ApiPromise.create({
				provider: new WsProvider(config.wsProviderUrl),
				types: JSON.parse(config.types),
				throwOnConnect: true,
			})
			await apiProvider.isReady

			apiConfigs.push({
				systemProperties: config.chainProperties as any,
				chainName: config.name,
				apiProvider: apiProvider,
			})
		} catch (error: any) {
			console.error(
				'The RPC could not be initialized',
				'error',
				error,
				'url:',
				config.wsProviderUrl,
				'types:',
				config.types,
			)
		}
	}

	return apiConfigs.length ? apiConfigs : null
}
