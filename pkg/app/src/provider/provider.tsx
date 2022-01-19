import { NetworkProvider } from 'src/provider/network/networkProvider'
import { ExtensionProvider } from 'src/provider/extension/extensionProvider'

export function Providers({ children }) {
	return (
		<NetworkProvider>
			<ExtensionProvider>{children}</ExtensionProvider>
		</NetworkProvider>
	)
}
