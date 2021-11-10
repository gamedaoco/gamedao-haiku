import { useMemo } from 'react';
import { useSystemProperties } from './use-system-properties';
import { getEncodedAddress } from '../helpers/get-encoded-address';
export const useEncodedAddress = (address, ss58Format) => {
    const systemProperties = useSystemProperties();
    const userAddressEncoded = useMemo(() => {
        if (address) {
            return getEncodedAddress(address, systemProperties, ss58Format);
        }
        return '';
    }, [address, systemProperties.ss58Format, ss58Format]);
    return userAddressEncoded;
};
//# sourceMappingURL=use-encoded-address.js.map