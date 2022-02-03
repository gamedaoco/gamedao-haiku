import { ApiProvider } from './ApiProvider'
import { ApiPromise } from '@polkadot/api'
import type { RegistryTypes } from '@polkadot/types/types'

export interface SystemProperties {
	ss58Format: number
	tokenDecimals: number
	tokenSymbol: string
}

export interface ApiProvider {
	apiProvider: ApiPromise | null
	systemProperties: SystemProperties
	chainName: string
}

export interface ApiProviderConfig {
	wsProviderUrl: string
	types: RegistryTypes
}

export interface NetworkState {
	selectedApiProvider: ApiProvider
	apiProviders: ApiProvider[]
	selectApiProvider: Function<ApiProvider>
}
