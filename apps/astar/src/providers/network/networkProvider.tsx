import { useCallback, useEffect, useRef, useState } from 'react'

import { useAppContext } from 'src/providers/app/components/context'
import { initializeApis, keepAlive } from 'src/providers/network/components/network'
import type { ApiProvider } from '@gamedao/types'

import { NetworkContext } from './components/context'

export function NetworkProvider({ children }) {
	const [selectedApiProviderState, setSelectedApiProviderState] = useState<ApiProvider>(null)
	const [apiProvidersState, setApiProvidersState] = useState<ApiProvider[]>(null)
	const isMountedRef = useRef<null | boolean>(null)

	const intervalRef = useRef<NodeJS.Timeout>()

	const { apiProviderConfig } = useAppContext()

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

		if (apiProviderConfig) {
			// Create and connect to Api
			initializeApis([apiProviderConfig]).then((providers: ApiProvider[]) => {
				if (isMountedRef.current && providers.length) {
					setApiProvidersState(providers)
					setSelectedApiProviderState(providers[0])

					if (!intervalRef.current) {
						intervalRef.current = setInterval(keepAlive, 30000, providers)
					}
				}
			})
		}

		return () => {
			isMountedRef.current = false
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [apiProviderConfig])

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
