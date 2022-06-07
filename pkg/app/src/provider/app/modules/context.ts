import { createContext, useContext } from 'react'

import { AppState } from 'src/@types/app'

export const AppContext = createContext<AppState>({
	ready: false,
	config: null,
	features: null,
})

export function useAppContext(): AppState {
	return useContext(AppContext)
}
