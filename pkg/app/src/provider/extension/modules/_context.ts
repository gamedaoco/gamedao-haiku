import { createContext, useContext } from 'react';
import { ExtensionState } from '../../../types/extension';

export const EXTENSION_STATE_DEFAULT: ExtensionState = {
	w3Enabled: false,
	accounts: null,
};

export const ExtensionContext = createContext<ExtensionState>(EXTENSION_STATE_DEFAULT);

export function useExtensionContext() {
	return useContext(ExtensionContext);
}
