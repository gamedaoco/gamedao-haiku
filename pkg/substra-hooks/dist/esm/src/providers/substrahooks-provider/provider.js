import React, { useEffect, useState } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { SubstraHooksContext } from './context';
import { fetchSystemProperties } from '../../helpers/fetch-system-properties';
import { ExtensionProvider } from '../extension';
import { useIsMountedRef } from '../../helpers/use-is-mounted-ref';
const apiProviders = {};
export const initPolkadotPromise = async (id, wsProviderUrl) => {
    if (apiProviders[id])
        return apiProviders[id];
    const wsProvider = new WsProvider(wsProviderUrl);
    const polkadotApi = await ApiPromise.create({ provider: wsProvider });
    await polkadotApi.isReady;
    const systemProperties = await fetchSystemProperties(polkadotApi);
    apiProviders[id] = {
        systemProperties,
        apiProvider: polkadotApi,
    };
    return apiProviders[id];
};
const initAllApis = async (apiProviderConfig) => {
    return Promise.all(Object.keys(apiProviderConfig).map(async (configId) => initPolkadotPromise(apiProviderConfig[configId].id, apiProviderConfig[configId].wsProviderUrl)));
};
export const createSubstraHooksProvider = () => {
    const SubstraHooksProvider = ({ children, apiProviderConfig, defaultApiProviderId, autoInitialiseExtension, }) => {
        const isMountedRef = useIsMountedRef();
        const [apiInitialised, setApiInitialised] = useState(false);
        useEffect(() => {
            if (apiProviderConfig && !apiInitialised) {
                initAllApis(apiProviderConfig).then((_apiProviders) => {
                    if (isMountedRef.current) {
                        setApiInitialised(true);
                    }
                });
            }
        }, [apiProviderConfig, apiInitialised, isMountedRef]);
        return (<SubstraHooksContext.Provider value={{ apiProviders, defaultApiProviderId }}>
        <ExtensionProvider autoInitialiseExtension={autoInitialiseExtension}>
          {children}
        </ExtensionProvider>
      </SubstraHooksContext.Provider>);
    };
    return SubstraHooksProvider;
};
export const SubstraHooksProvider = createSubstraHooksProvider();
//# sourceMappingURL=provider.js.map