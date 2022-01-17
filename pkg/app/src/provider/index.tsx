import { NetworkProvider } from 'src/provider/network'
import { ExtensionProvider } from 'src/provider/extension'

export function Providers({ children }) {
	return (
		<NetworkProvider>
			<ExtensionProvider allowConnect={true}>{children}</ExtensionProvider>
		</NetworkProvider>
	)
}
