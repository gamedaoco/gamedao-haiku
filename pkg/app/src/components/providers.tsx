import ExtensionProvider from 'src/provider/extension'
import NetworkProvider from 'src/provider/network'

export function Providers({ children }) {
	return (
		<NetworkProvider>
			{/* allowConnect is here the state that is set when someone presses the connect button */}
			<ExtensionProvider allowConnect={true}>{children}</ExtensionProvider>
		</NetworkProvider>
	)
}
