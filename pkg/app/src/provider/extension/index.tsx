import { useEffect, useRef, useState } from 'react';
import { ExtensionState } from 'src/types/extension';
import { useNetworkContext } from 'src/provider/network/modules/context';
import { EXTENSION_STATE_DEFAULT, ExtensionContext } from './modules/context';
import { initializeAccounts } from './modules/accounts';

export default function ExtensionProvider({ children, allowConnect }) {
	const [state, setState] = useState<ExtensionState>(null);
	const { apiProvider } = useNetworkContext();
	const isMountedRef = useRef<null | boolean>(null);

	useEffect(() => {
		isMountedRef.current = true;
		return () => {
			isMountedRef.current = false;
		};
	}, []);

	useEffect(() => {
		if (!apiProvider) return;
		if (allowConnect) {
			// Load accounts from extension
			initializeAccounts(apiProvider.systemProperties).then((extensionState: ExtensionState) => {
				if (isMountedRef.current) {
					setState(extensionState);
					// TODO: Remove
					console.log('ExtensionState', extensionState);
				}
			});
		} else {
			// Reset accounts and state
			setState(EXTENSION_STATE_DEFAULT);
		}
	}, [apiProvider, allowConnect]);

	return <ExtensionContext.Provider value={state}>{children}</ExtensionContext.Provider>;
}
