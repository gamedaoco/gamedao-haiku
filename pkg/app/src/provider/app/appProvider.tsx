import { Reducer, useEffect, useReducer } from 'react'
import type { AppAction, AppState } from 'src/@types/app'
import { AppActionTypes } from 'src/@types/app'
import { loadAppConfig, loadAppFeatures } from 'provider/app/modules/app'
import { AppContext, INITIAL_APP_STATE } from 'provider/app/modules/context'

// TODO: get root config through .env
const DEV = true

const reducer: Reducer<AppState, AppAction> = (state: AppState, action: AppAction) => {
	switch (action.type) {
		case AppActionTypes.CONFIG_LOAD:
			if (DEV) console.log('config load')
			return {
				...state,
				app: { ...state.app, READY: false },
				config: { ...state.config, loading: true },
			}

		case AppActionTypes.CONFIG_UPDATE:
			if (DEV) console.log('config', action.payload)
			return {
				...state,
				app: { ...state.app, READY: true },
				config: {
					loading: false,
					data: action.payload as any,
				},
			}

		case AppActionTypes.FEATURES_LOAD:
			if (DEV) console.log('features load')
			return {
				...state,
				features: { ...state.features, loading: true },
			}

		case AppActionTypes.FEATURES_UPDATE:
			if (DEV) console.log('features', action.payload)
			return {
				...state,
				features: {
					loading: false,
					data: action.payload as any,
				},
			}

		default:
			throw new Error(`Unknown type: ${action.type}`)
	}
}

export function AppProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, INITIAL_APP_STATE)
	const { READY } = state.app

	useEffect(() => {
		Promise.all([loadAppConfig(dispatch), loadAppFeatures(dispatch)]).then(() => {
			if (DEV) console.log('App config and features were loaded')
		})
	}, [])

	return !READY ? null : <AppContext.Provider value={state}>{children}</AppContext.Provider>
}
