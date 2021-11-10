import { formatBalance } from '@polkadot/util';
import { stringTrimTrailingZeros } from './string-trim-trailing-zeros';
/**
 * forsale can come in different types (from dumps it's a string) so convert it back to BigInt
 * @param forsale
 * @param systemProperties
 */
export const forSaleToBigInt = (forsale, systemProperties) => {
    let priceBigInt = forsale;
    if (typeof forsale == 'string') {
        return BigInt(forsale);
    }
    if (typeof forsale === 'number') {
        return BigInt(Number(`${forsale}e${systemProperties.tokenDecimals}`));
    }
    return BigInt(priceBigInt);
};
/**
 * Format BigInt price based on chain's decimal and symbol
 * @param price - string or number inputted price in plancks
 * @param systemProperties - chain's systemProperties as returned from polkadot api
 * @param toFixed - whether to format price to fixed number (will convert 1.0000 KSM to 1 KSM)
 */
export const formatPrice = (price, systemProperties, toFixed = false) => {
    const numberPrice = forSaleToBigInt(price, systemProperties);
    const { tokenDecimals, tokenSymbol } = systemProperties;
    if (toFixed) {
        let formatted = formatBalance(numberPrice, {
            decimals: tokenDecimals,
            withUnit: false,
            forceUnit: '-',
        });
        return `${stringTrimTrailingZeros(formatted)} ${tokenSymbol}`.replace(',', '');
    }
    else {
        return formatBalance(numberPrice, {
            decimals: tokenDecimals,
            withUnit: tokenSymbol,
            forceUnit: '-',
        }).replace(',', '');
    }
};
/**
 * Formant NFT forsale price which is in plancks into whole number unit
 * @param price
 * @param systemProperties
 */
export const bigIntPriceToNumber = (price, systemProperties) => {
    const base = Math.pow(Number(BigInt(10)), Number(BigInt(systemProperties.tokenDecimals)));
    const numberPrice = Number(forSaleToBigInt(price, systemProperties));
    return numberPrice / base;
};
//# sourceMappingURL=format-price.js.map