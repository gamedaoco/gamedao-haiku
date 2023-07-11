import { createContext, useContext } from 'react'
import type { NetworkState } from 'src/@types/network'

export const NetworkContext = createContext<NetworkState>({
	selectedApiProvider: null,
	apiProviders: null,
	selectApiProvider: () => {},
})

export function useNetworkContext(): NetworkState {
	return useContext(NetworkContext)
}
