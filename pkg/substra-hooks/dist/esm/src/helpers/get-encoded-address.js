import { encodeAddress } from '@polkadot/keyring';
export const getEncodedAddress = (address, systemProperties, ss58Format) => {
    return encodeAddress(address, ss58Format || systemProperties.ss58Format);
};
//# sourceMappingURL=get-encoded-address.js.map