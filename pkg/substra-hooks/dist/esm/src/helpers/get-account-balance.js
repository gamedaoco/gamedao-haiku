import { formatPrice } from './format-price';
export const getAccountBalance = (account, systemProperties, api, callback) => {
    api.query.system.account(account, ({ data: { free: currentFree } }) => {
        const balanceRaw = currentFree.toBigInt();
        const balanceFormatted = formatPrice(balanceRaw, systemProperties, true);
        if (callback) {
            callback({ balanceFormatted, balanceRaw });
        }
    });
};
//# sourceMappingURL=get-account-balance.js.map