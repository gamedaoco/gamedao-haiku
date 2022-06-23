import type { Config, Features } from 'src/queries'

export interface AppState {
	ready: boolean
	config: Config
	features: Features
}
