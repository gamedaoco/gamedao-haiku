// Imports
// Constants
import { networkAddressPrefix } from './config.json';
import { codec } from '@subsquid/ss58';

// Exports
export const hashToHexString = (hash: Uint8Array) => `0x${Buffer.from(hash).toString('hex')}`;
export const hexStringToString = (data: string) =>
	`${Buffer.from(data.startsWith('0x') ? data.substring(2) : data, 'hex').toString('utf-8')}`;
export const addressCodec = codec(networkAddressPrefix);
export const signerCodec = codec(42);

export const encodeSigner = (signer: string) => signer;
export const isCIDValid = (cid: string | null) => cid !== null && cid.length < 50 && !!cid.match(/^[a-z0-9]+$/i);
