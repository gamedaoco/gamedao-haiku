import { ApiProvider } from './ApiProvider'
import { ApiPromise } from '@polkadot/api'

export interface SystemProperties {
	ss58Format: number
	tokenDecimals: number
	tokenSymbol: string
	governanceCurrency: number
	networkCurrency: number
	paymentCurrencies: number
	blockTargetTime: number
}

export interface ApiProvider {
	apiProvider: ApiPromise | null
	systemProperties: SystemProperties
	chainName: string
}

export interface NetworkState {
	selectedApiProvider: ApiProvider
	apiProviders: ApiProvider[]
	selectApiProvider: Function<ApiProvider>
}
