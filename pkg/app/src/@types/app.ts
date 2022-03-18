import type { Config, Features } from '@gamedao-haiku/graphql/dist'

export interface AppState {
	ready: boolean
	config: Config
	features: Features
}
