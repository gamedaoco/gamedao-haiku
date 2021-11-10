/// <reference types="react" />
import { ApiPromise } from '@polkadot/api';
import { ISystemProperties } from '../../types/system-properties';
export declare type ApiProvider = {
    apiProvider: ApiPromise;
    systemProperties: ISystemProperties;
};
export declare type ApiProviders = Record<string, ApiProvider>;
export declare const SubstraHooksContext: import("react").Context<{
    apiProviders: ApiProviders;
    defaultApiProviderId: string;
}>;
export declare function useSubstraHooksState(): {
    apiProviders: ApiProviders;
    defaultApiProviderId: string;
};
//# sourceMappingURL=context.d.ts.map