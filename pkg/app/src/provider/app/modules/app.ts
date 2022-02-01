import { AppAction, AppActionTypes } from 'src/@types/app'
import type { Dispatch } from 'react'

// TODO: get root config through .env
const HOST = 'api/'
const ENV = 'dev'

async function loadAppDat(resource: string, env: string) {
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

export async function loadAppConfig(dispatch: Dispatch<AppAction>) {
	try {
		dispatch({ type: AppActionTypes.CONFIG_LOAD })
		const config = await loadAppDat('config', ENV)
		dispatch({
			type: AppActionTypes.CONFIG_UPDATE,
			payload: config,
		})
		return
	} catch (error) {
		console.error('The app config could not be retrieved', 'error', error)
	}
	return null
}

export async function loadAppFeatures(dispatch: Dispatch<AppAction>) {
	try {
		dispatch({ type: AppActionTypes.FEATURES_LOAD })
		const features = await loadAppDat('features', ENV)
		dispatch({
			type: AppActionTypes.FEATURES_UPDATE,
			payload: features,
		})
		return
	} catch (error) {
		console.error('The app config could not be retrieved', 'error', error)
	}
	return null
}
