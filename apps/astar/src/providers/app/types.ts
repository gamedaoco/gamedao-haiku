import type { ApiProvider as ApiProviderConfig, Config, Features } from '@gamedao/graph'

export type TAstar = {
	block: number | null
}

export type TAppContext = {
	dapp?: string
	bpid?: string
}

export type TAppUser = {
	uuid?: string
	address?: string
	discord?: string
	twitter?: string
	email?: string
	name?: string
	epicGames?: string
}

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
	astar: TAstar
}
