import { AppState } from 'src/@types/app'
import configJSON from 'data/config.json'
import featuresJSON from 'data/features.json'
import { createContext, useContext } from 'react'

// TODO: get root config through .env
// import { DEV, ENV, HOST } from 'config'
const DEV = true
const ENV = 'dev'
const HOST = 'api/'

export const INITIAL_APP_STATE: AppState = {
	app: {
		loading: false,
		READY: false,
		DEV,
		ENV,
		HOST,
	},
	config: { loading: false, data: configJSON.global },
	features: { loading: false, data: featuresJSON.global },
}

export const AppContext = createContext<AppState>(INITIAL_APP_STATE)

export const useAppContext = () => useContext(AppContext)
