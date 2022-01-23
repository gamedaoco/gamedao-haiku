import { createContext, useContext, useReducer, useEffect } from 'react'

// TODO: get root config through .env
// import { DEV, ENV, HOST } from 'config'
const DEV = true
const ENV = 'dev'
const HOST = 'api/'

// default config and types

import configJSON from 'src/data/config.json'
import featuresJSON from 'src/data/features.json'

const defaultConfig = configJSON.global
type ConfigTypes = typeof configJSON

const defaultFeatures = featuresJSON.global
type FeatureTypes = typeof defaultFeatures

// rest loader, will be replaced with graphql

const loadData = async (resource, env) => {
	try {
		let data = await fetch(HOST + resource, {
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ key: 'hello', env }),
		})
		data = await data.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

//

enum ActionTypes {
	INIT = 'INIT',
	CONFIG_LOAD = 'CONFIG_LOAD',
	CONFIG_UPDATE = 'CONFIG_UPDATE',
	FEATURES_LOAD = 'FEATURES_LOAD',
	FEATURES_UPDATE = 'FEATURES_UPDATE',
	CONTENT_LOAD = 'CONTENT_LOAD',
	CONTENT_UPDATE = 'CONTENT_UPDATE',
}

export type Action = {
	type: ActionTypes
	payload?: object | null
}

//

export type AppState = {
	app: {
		loading: boolean
		READY: boolean
		DEV: boolean
		ENV: string
		HOST: string
	}
	config: {
		loading: boolean
		data?: ConfigTypes
	}
	features: {
		loading: boolean
		data?: FeatureTypes
	}
}

const INITIAL_STATE: AppState = {
	app: {
		loading: false,
		READY: false,
		DEV,
		ENV,
		HOST,
	},
	config: { loading: false, data: defaultConfig },
	features: { loading: false, data: defaultFeatures },
}

// assemble context

const AppContext = createContext<{
	state: AppState
	dispatch: React.Dispatch<any>
}>({
	state: INITIAL_STATE,
	dispatch: () => null,
})

const reducer: React.Reducer<AppState, Action> = (state, action) => {
	switch (action.type) {
		case 'CONFIG_LOAD':
			if (DEV) console.log('config load')
			return {
				...state,
				app: { ...state.app, READY: false },
				config: { ...state.config, loading: true },
			}

		case 'CONFIG_UPDATE':
			if (DEV) console.log('config', action.payload)
			return {
				...state,
				app: { ...state.app, READY: true },
				config: {
					loading: false,
					data: action.payload,
				},
			}

		case 'FEATURES_LOAD':
			if (DEV) console.log('features load')
			return {
				...state,
				features: { ...state.features, loading: true },
			}

		case 'FEATURES_UPDATE':
			if (DEV) console.log('features', action.payload)
			return {
				...state,
				features: {
					loading: false,
					data: action.payload,
				},
			}

		case 'CONTENT_LOAD':
			if (DEV) console.log('content load')
			return {
				...state,
				features: { ...state.features, loading: true },
			}

		case 'CONTENT_UPDATE':
			if (DEV) console.log('content', action.payload)
			return {
				...state,
				content: {
					loading: false,
					data: action.payload,
				},
			}

		default:
			throw new Error(`Unknown type: ${action.type}`)
	}
}

const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
	const { READY } = state.app

	// load config to enable core functionality
	useEffect(() => {
		dispatch({ type: ActionTypes.CONFIG_LOAD })
		const loadConfig = async () => await loadData('config', ENV)
		loadConfig().then((data) => {
			dispatch({
				type: ActionTypes.CONFIG_UPDATE,
				payload: data,
			})
		})
	}, [])

	// load features
	useEffect(() => {
		dispatch({ type: ActionTypes.FEATURES_LOAD })
		const loadFeatures = async () => await loadData('features', ENV)
		loadFeatures().then((data) => {
			dispatch({
				type: ActionTypes.FEATURES_UPDATE,
				payload: data,
			})
		})
	}, [])

	if (!READY) return null

	return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

const useAppContext = () => useContext(AppContext)

export { AppContext, AppProvider, useAppContext }
