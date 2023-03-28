import { createContext, useContext } from 'react'
import { AppState } from 'src/@types/app'

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
})

export function useAppContext(): AppState {
	return useContext(AppContext)
}
