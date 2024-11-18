import type { ApiProvider as ApiProviderConfig, Config, Features } from '@gamedao/graph'
import type { TAppUser } from 'src/providers/app/appProvider'

export interface AppState {
	ready: boolean
	config: Config
	features: Features
	apiProviderConfig: ApiProviderConfig
	uuid: string
	user: TAppUser
	linkAddress: Function
	context: object
	linkBpid: Function
	bpid: string
	processing: boolean
	setProcessing: Function
	twa: boolean
	setTwitterAuthorized: Function
	flush: Function
}
