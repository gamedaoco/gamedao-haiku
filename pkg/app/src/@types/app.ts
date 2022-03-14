import configJSON from 'src/data/config.json'
import featuresJSON from 'src/data/features.json'

// ToDo: Add real interfaces
export type AppConfigTypes = typeof configJSON.global
export type AppFeatureTypes = typeof featuresJSON.global

export interface AppState {
	ready: boolean
	config: AppConfigTypes
	features: AppFeatureTypes
}
