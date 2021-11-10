import { formatPrice } from './format-price';
import { fetchSystemProperties } from './fetch-system-properties';
import { hexToString } from "@polkadot/util";
export const getAssetBalance = async (account, assetId, api, callback, systemProperties) => {
    const _systemProperties = systemProperties || (await fetchSystemProperties(api));
    const getAsset = api.query.assets;
    getAsset.account(assetId, account).then((accountData) => {
        if (accountData) {
            getAsset.metadata(assetId).then((data) => {
                const balanceRaw = accountData.balance.toBigInt();
                const tokenDecimals = data.decimals.toNumber();
                const tokenSymbol = hexToString(data.symbol.toHex());
                const balanceFormatted = formatPrice(balanceRaw, { tokenDecimals, tokenSymbol, ss58Format: _systemProperties.ss58Format }, true);
                callback({ balanceFormatted, balanceRaw });
            });
        }
    });
};
//# sourceMappingURL=get-asset-balance.js.map