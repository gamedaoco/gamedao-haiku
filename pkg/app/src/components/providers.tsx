import { ExtensionProvider } from '../provider/extension/extensionProvider';
import { NetworkProvider } from '../provider/network/networkProvider';

export function Providers({ children }) {
	return (
		<NetworkProvider>
			{/* allowConnect is here the state that is set when someone presses the connect button */}
			<ExtensionProvider allowConnect={true}>{children}</ExtensionProvider>
		</NetworkProvider>
	);
}
