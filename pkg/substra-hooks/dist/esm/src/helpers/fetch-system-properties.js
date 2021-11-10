export const systemPropertiesDefaults = {
    tokenDecimals: 12,
    tokenSymbol: 'KSM',
    ss58Format: 2,
};
export const fetchSystemProperties = async (polkadotApi) => {
    const systemProperties = await polkadotApi.rpc.system.properties();
    const { tokenDecimals, tokenSymbol, ss58Format } = systemProperties.toHuman();
    let decimals = tokenDecimals;
    let symbol = tokenSymbol;
    if (Array.isArray(tokenDecimals)) {
        decimals = tokenDecimals[0];
    }
    if (Array.isArray(tokenSymbol)) {
        symbol = tokenSymbol[0];
    }
    if (typeof decimals !== 'string') {
        decimals = systemPropertiesDefaults.tokenDecimals;
    }
    if (typeof decimals === 'string') {
        decimals = parseInt(decimals);
    }
    let ss58FormatFinal = systemPropertiesDefaults.ss58Format;
    try {
        ss58FormatFinal = !isNaN(parseInt(ss58Format))
            ? parseInt(ss58Format)
            : ss58FormatFinal;
    }
    catch (error) {
        console.log(error);
    }
    return {
        tokenDecimals: decimals || systemPropertiesDefaults.tokenDecimals,
        tokenSymbol: symbol || systemPropertiesDefaults.tokenSymbol,
        ss58Format: ss58FormatFinal,
    };
};
//# sourceMappingURL=fetch-system-properties.js.map