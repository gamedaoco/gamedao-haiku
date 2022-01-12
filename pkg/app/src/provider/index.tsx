import ExtensionProvider from './extension'
import NetworkProvider from './network'

export default function Providers({ children }) {
	return (
		<NetworkProvider>
			{/* allowConnect is here the state that is set when someone presses the connect button */}
			<ExtensionProvider allowConnect={true}>{children}</ExtensionProvider>
		</NetworkProvider>
	)
}
