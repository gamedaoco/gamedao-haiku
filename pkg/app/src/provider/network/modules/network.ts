import { ApiPromise, WsProvider } from '@polkadot/api'
import type { ApiProvider, ApiProviderConfig, SystemProperties } from 'src/@types/network'

// Load system properties(token format and symbol)
async function getProperties(apiProvider: ApiPromise): Promise<SystemProperties> {
	try {
		const systemProperties = await apiProvider.rpc.system.properties()
		const { tokenDecimals, tokenSymbol, ss58Format } = systemProperties.toHuman()

		return {
			ss58Format: !isNaN(parseInt(ss58Format as string)) ? parseInt(ss58Format as string) : 25,
			tokenDecimals: tokenDecimals?.[0] ?? 18,
			tokenSymbol: tokenSymbol?.[0] ?? 'ZERO',
		}
	} catch (error: any) {
		console.error('The system properties could not be loaded', 'error', error)
	}
	return null
}

// Load system chain name
async function getChainName(apiProvider: ApiPromise): Promise<string> {
	try {
		const systemName = await apiProvider.rpc.system.chain()
		return systemName.toHuman()
	} catch (error: any) {
		console.error('The system name could not be loaded', 'error', error)
	}
	return null
}

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
				types: config.types,
				throwOnConnect: true,
			})
			await apiProvider.isReady
			apiConfigs.push({
				systemProperties: await getProperties(apiProvider),
				chainName: await getChainName(apiProvider),
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
