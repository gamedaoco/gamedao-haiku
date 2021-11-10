import { useContext } from 'react';
import { SubstraHooksContext } from '../providers/substrahooks-provider/context';
import { systemPropertiesDefaults } from '../helpers';
export const useSystemProperties = (apiProviderId) => {
    var _a;
    const id = apiProviderId || useContext(SubstraHooksContext).defaultApiProviderId;
    return (((_a = useContext(SubstraHooksContext).apiProviders[id]) === null || _a === void 0 ? void 0 : _a.systemProperties) || systemPropertiesDefaults);
};
//# sourceMappingURL=use-system-properties.js.map