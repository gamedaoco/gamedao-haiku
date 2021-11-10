import { merge } from 'ramda';
export var Types;
(function (Types) {
    Types["W3_ENABLE"] = "W3_ENABLE";
    Types["ACCOUNTS_SET"] = "ACCOUNTS_SET";
})(Types || (Types = {}));
export const extensionReducer = (state, action) => {
    switch (action.type) {
        case Types.W3_ENABLE:
            return merge(state, { w3Enabled: action.payload.w3Enabled });
        case Types.ACCOUNTS_SET:
            return merge(state, { accounts: action.payload.accounts });
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map