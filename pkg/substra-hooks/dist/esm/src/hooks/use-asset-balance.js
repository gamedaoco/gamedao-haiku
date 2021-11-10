import { useEffect, useState } from 'react';
import { useSystemProperties } from './use-system-properties';
import { useIsMountedRef } from '../helpers/use-is-mounted-ref';
import { getAssetBalance } from '../helpers/get-asset-balance';
import { useApiProvider } from './use-api-provider';
export const useAssetBalance = (account, assetId, apiProviderId) => {
    const apiProvider = useApiProvider(apiProviderId);
    const isMountedRef = useIsMountedRef();
    const systemProperties = useSystemProperties(apiProviderId);
    const [balance, setBalance] = useState({
        balanceRaw: null,
        balanceFormatted: null,
    });
    useEffect(() => {
        if (account && apiProvider && assetId) {
            const callback = ({ balanceFormatted, balanceRaw }) => {
                if (isMountedRef.current) {
                    setBalance({ balanceFormatted, balanceRaw });
                }
            };
            getAssetBalance(account, assetId, apiProvider, callback, systemProperties);
        }
    }, [account, assetId, apiProvider, systemProperties, isMountedRef]);
    return balance;
};
//# sourceMappingURL=use-asset-balance.js.map