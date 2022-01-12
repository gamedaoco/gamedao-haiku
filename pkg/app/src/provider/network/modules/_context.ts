import { createContext, useContext } from 'react';
import { NetworkState } from '../../../types/network';

export const NetworkContext = createContext<NetworkState>({
	apiProvider: {},
});

export function useNetworkContext() {
	return useContext(NetworkContext);
}
