import { createContext, useContext, useState } from 'react'
import { SubstraHooksProvider } from '@substra-hooks/core'
import config from '../config'

export enum ENetworks {
	zero = 'zero',
	// karura = 'karura',
	// kusama = 'kusama',
}

export type NetworkState = {
	updateWalletState: (state) => void
}

const INITIAL_STATE: NetworkState = {
	updateWalletState: (state) => {},
}

const NetworkStateContext = createContext<NetworkState>(INITIAL_STATE)
export const useNetworkState = () => useContext(NetworkStateContext)

const API_PROVIDER_CONFIG = {
	[ENetworks.zero]: {
		id: ENetworks.zero,
		wsProviderUrl: config.PROVIDER_SOCKET,
		types: config.types,
	},
	// [ENetworks.kusama]: {
	// 	id: ENetworks.karura,
	// 	wsProviderUrl: 'wss://karura-rpc-0.aca-api.network',
	// },
	// [ENetworks.kusama]: {
	// 	id: ENetworks.kusama,
	// 	wsProviderUrl: 'wss://kusama-rpc.polkadot.io',
	// },
}

export const NetworkProvider = ({ children }) => {
	const [networkState, setNetworkState] = useState(INITIAL_STATE)

	const handleUpdateNetworkState = (state) => {
		setNetworkState({ ...networkState, ...state })
	}

	return (
		<SubstraHooksProvider
			apiProviderConfig={API_PROVIDER_CONFIG}
			defaultApiProviderId={ENetworks.zero}
		>
			<NetworkStateContext.Provider
				value={{
					...networkState,
					updateWalletState: handleUpdateNetworkState,
				}}
			>
				{children}
			</NetworkStateContext.Provider>
		</SubstraHooksProvider>
	)
}
