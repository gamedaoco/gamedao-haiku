import { Dispatch } from 'react';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { ExtensionActions } from './reducer';
export interface ExtensionState {
    w3Enabled: boolean;
    accounts: InjectedAccountWithMeta[] | null;
}
export declare const initialState: ExtensionState;
export declare const ExtensionContext: import("react").Context<{
    state: ExtensionState;
    dispatch: Dispatch<ExtensionActions>;
    extensionName?: string;
}>;
export declare function useExtensionState(): {
    state: ExtensionState;
    dispatch: Dispatch<ExtensionActions>;
    extensionName?: string;
};
//# sourceMappingURL=context.d.ts.map