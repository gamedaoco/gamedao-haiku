import { createContext, useContext } from 'react';
export const initialState = {
    w3Enabled: false,
    accounts: null,
};
export const ExtensionContext = createContext({
    state: initialState,
    dispatch: () => null,
    extensionName: 'polkadot-extension'
});
export function useExtensionState() {
    return useContext(ExtensionContext);
}
//# sourceMappingURL=context.js.map