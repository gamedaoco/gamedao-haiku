import { useContext } from 'react';
import { SubstraHooksContext } from '../providers/substrahooks-provider/context';
export const useApiProvider = (apiProviderId) => {
    var _a;
    const id = apiProviderId || useContext(SubstraHooksContext).defaultApiProviderId;
    return ((_a = useContext(SubstraHooksContext).apiProviders[id]) === null || _a === void 0 ? void 0 : _a.apiProvider) || null;
};
//# sourceMappingURL=use-api-provider.js.map