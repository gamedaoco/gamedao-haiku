import { ReactNode } from 'react';
export declare type ApiProviderConfig = Record<string, {
    id: string;
    wsProviderUrl: string;
}>;
interface ISubstraHooksProviderProps {
    apiProviderConfig: ApiProviderConfig | null;
    defaultApiProviderId: string;
    autoInitialiseExtension?: boolean;
    children: ReactNode;
}
export declare const initPolkadotPromise: (id: string, wsProviderUrl: string) => Promise<import("./context").ApiProvider>;
export declare const createSubstraHooksProvider: () => ({ children, apiProviderConfig, defaultApiProviderId, autoInitialiseExtension, }: ISubstraHooksProviderProps) => JSX.Element;
export declare const SubstraHooksProvider: ({ children, apiProviderConfig, defaultApiProviderId, autoInitialiseExtension, }: ISubstraHooksProviderProps) => JSX.Element;
export {};
//# sourceMappingURL=provider.d.ts.map