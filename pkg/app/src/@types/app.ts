import configJSON from 'src/data/config.json'
import featuresJSON from 'src/data/features.json'

export type AppConfigTypes = typeof configJSON.global
export type AppFeatureTypes = typeof featuresJSON.global

export interface AppAction {
	type: any
	payload?: object | null
}

export enum AppActionTypes {
	CONFIG_LOAD = 'CONFIG_LOAD',
	CONFIG_UPDATE = 'CONFIG_UPDATE',
	FEATURES_LOAD = 'FEATURES_LOAD',
	FEATURES_UPDATE = 'FEATURES_UPDATE',
}

export interface AppState {
	app: {
		loading: boolean
		READY: boolean
		DEV: boolean
		ENV: string
		HOST: string
	}
	config: {
		loading: boolean
		data?: AppConfigTypes
	}
	features: {
		loading: boolean
		data?: AppFeatureTypes
	}
}
