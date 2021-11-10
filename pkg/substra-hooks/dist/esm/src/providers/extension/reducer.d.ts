import { ExtensionState } from './context';
import { ActionMap } from '../../types/reducer';
export declare enum Types {
    W3_ENABLE = "W3_ENABLE",
    ACCOUNTS_SET = "ACCOUNTS_SET"
}
declare type ExtensionPayload = {
    [Types.W3_ENABLE]: {
        w3Enabled: ExtensionState['w3Enabled'];
    };
    [Types.ACCOUNTS_SET]: {
        accounts: ExtensionState['accounts'];
    };
};
export declare type ExtensionActions = ActionMap<ExtensionPayload>[keyof ActionMap<ExtensionPayload>];
export declare const extensionReducer: (state: ExtensionState, action: ExtensionActions) => ExtensionState;
export {};
//# sourceMappingURL=reducer.d.ts.map