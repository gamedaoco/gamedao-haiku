import { ISystemProperties } from '../types/system-properties';
/**
 * forsale can come in different types (from dumps it's a string) so convert it back to BigInt
 * @param forsale
 * @param systemProperties
 */
export declare const forSaleToBigInt: (forsale: string | number | bigint, systemProperties: ISystemProperties) => bigint;
/**
 * Format BigInt price based on chain's decimal and symbol
 * @param price - string or number inputted price in plancks
 * @param systemProperties - chain's systemProperties as returned from polkadot api
 * @param toFixed - whether to format price to fixed number (will convert 1.0000 KSM to 1 KSM)
 */
export declare const formatPrice: (price: bigint | string | number, systemProperties: ISystemProperties, toFixed?: boolean) => string;
/**
 * Formant NFT forsale price which is in plancks into whole number unit
 * @param price
 * @param systemProperties
 */
export declare const bigIntPriceToNumber: (price: bigint | string | number, systemProperties: ISystemProperties) => number;
//# sourceMappingURL=format-price.d.ts.map