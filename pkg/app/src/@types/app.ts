import type { ApiProvider as ApiProviderConfig, Config, Features } from 'src/queries'

export interface AppState {
	ready: boolean
	config: Config
	features: Features
	apiProviderConfig: ApiProviderConfig
}
