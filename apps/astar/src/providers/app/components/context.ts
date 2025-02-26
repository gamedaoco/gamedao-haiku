import { createContext, useContext } from 'react'
import type { ApiProvider as ApiProviderConfig, Config, Features } from '@gamedao/graph'
import { AppState } from '../types'

export const AppContext = createContext<AppState>({
	ready: false,
	config: null,
	features: null,
	apiProviderConfig: null,
	uuid: null,
	user: null,
	linkAddress: () => {},
	context: null,
	linkBpid: () => {},
	bpid: null,
	processing: false,
	setProcessing: () => {},
	twa: false,
	setTwitterAuthorized: () => {},
	flush: () => {},
	astar: { block: 0 },
})

export function useAppContext(): AppState {
	return useContext(AppContext)
}
