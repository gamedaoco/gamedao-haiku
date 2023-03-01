import { createContext, useContext } from 'react'

import { AppState } from 'src/@types/app'
import { string } from 'yup/lib/locale'

export const AppContext = createContext<AppState>({
	ready: false,
	config: null,
	features: null,
	apiProviderConfig: null,
	uuid: null,
	user: null,
	linkAddress: () => {},
	context: null,
})

export function useAppContext(): AppState {
	return useContext(AppContext)
}
