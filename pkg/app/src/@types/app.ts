import type { ApiProvider as ApiProviderConfig, Config, Features } from 'src/queries'
import type { TAppUser } from 'providers/app/appProvider'
export interface AppState {
	ready: boolean
	config: Config
	features: Features
	apiProviderConfig: ApiProviderConfig
	uuid: string
	user: TAppUser
	context: object
}
