import { ApiProvider } from './ApiProvider';
import { ApiPromise } from '@polkadot/api';
import { RegistryTypes } from '@polkadot/types/types';

export interface SystemProperties {
	ss58Format: number;
	tokenDecimals: number;
	tokenSymbol: string;
}

export interface ApiProvider {
	apiProvider: ApiPromise | null;
	systemProperties: SystemProperties;
}

export interface ApiProviderConfig {
	wsProviderUrl: string;
	types: RegistryTypes;
}

export interface NetworkState {
	apiProvider: ApiProvider;
}
