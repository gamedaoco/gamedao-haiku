import { ApiPromise } from '@polkadot/api';
export declare const systemPropertiesDefaults: {
    tokenDecimals: number;
    tokenSymbol: string;
    ss58Format: number;
};
export declare const fetchSystemProperties: (polkadotApi: ApiPromise) => Promise<{
    tokenDecimals: number;
    tokenSymbol: string;
    ss58Format: number;
}>;
//# sourceMappingURL=fetch-system-properties.d.ts.map