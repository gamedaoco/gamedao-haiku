import { AppState } from 'src/@types/app'
import { createContext, useContext } from 'react'

export const AppContext = createContext<AppState>({
	ready: false,
	config: null,
	features: null,
})

export function useAppContext(): AppState {
	return useContext(AppContext)
}
