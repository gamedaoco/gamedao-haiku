import { ApiPromise, WsProvider } from '@polkadot/api'
import { ApiProvider, ApiProviderConfig, SystemProperties } from 'src/@types/network'

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
		console.error('The system properties could not be loaded ', 'error', error)
	}
	return null
}

// Connect to ws node and return ApiProvider
export async function initializeApi(config: ApiProviderConfig): Promise<ApiProvider> {
	try {
		const apiProvider = await ApiPromise.create({
			provider: new WsProvider(config.wsProviderUrl),
			types: config.types,
			throwOnConnect: true,
		})
		await apiProvider.isReady
		return {
			systemProperties: await getProperties(apiProvider),
			apiProvider: apiProvider,
		}
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

	return null
}
