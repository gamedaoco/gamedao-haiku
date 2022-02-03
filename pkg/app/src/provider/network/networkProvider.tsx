import { useCallback, useEffect, useRef, useState } from 'react'
import types from 'src/data/types.json'
import type { ApiProvider } from 'src/@types/network'
import { NetworkContext } from './modules/context'
import { initializeApis, keepAlive } from 'provider/network/modules/network'

// TODO: Data should be retrieved from GraphQL or another interface.
// @2075
// Are there already ideas here should the types come also from GraphQL or rather
// be pulled from the chain itself
const API_PROVIDER_CONFIG_ZERO = {
	wsProviderUrl: 'wss://alphaville.zero.io',
	types: types,
}

const API_PROVIDER_CONFIG_POLKADOT = {
	wsProviderUrl: 'wss://rpc.polkadot.io',
	types: {},
}

const API_PROVIDERS = [API_PROVIDER_CONFIG_ZERO, API_PROVIDER_CONFIG_POLKADOT]

export function NetworkProvider({ children }) {
	const [selectedApiProviderState, setSelectedApiProviderState] = useState<ApiProvider>(null)
	const [apiProvidersState, setApiProvidersState] = useState<ApiProvider[]>(null)
	const isMountedRef = useRef<null | boolean>(null)
	const intervalRef = useRef<NodeJS.Timer>(null)

	const handleSelectApiProvider = useCallback(
		(apiProvider: ApiProvider) => {
			if (apiProvider) {
				setSelectedApiProviderState(apiProvider)
			}
		},
		[setSelectedApiProviderState],
	)

	useEffect(() => {
		isMountedRef.current = true

		// Create and connect to Api
		initializeApis(API_PROVIDERS).then((providers: ApiProvider[]) => {
			if (isMountedRef.current && providers.length) {
				setApiProvidersState(providers)
				setSelectedApiProviderState(providers[0])
				if (!intervalRef.current) {
					intervalRef.current = setInterval(keepAlive, 30000, providers)
				}
			}
		})

		return () => {
			isMountedRef.current = false
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [])

	return (
		<NetworkContext.Provider
			value={{
				selectedApiProvider: selectedApiProviderState,
				apiProviders: apiProvidersState,
				selectApiProvider: handleSelectApiProvider,
			}}
		>
			{children}
		</NetworkContext.Provider>
	)
}
