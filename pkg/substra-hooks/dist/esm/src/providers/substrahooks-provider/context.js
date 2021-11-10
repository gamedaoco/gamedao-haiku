import { createContext, useContext } from 'react';
export const SubstraHooksContext = createContext({
    apiProviders: {},
    defaultApiProviderId: '',
});
export function useSubstraHooksState() {
    return useContext(SubstraHooksContext);
}
//# sourceMappingURL=context.js.map