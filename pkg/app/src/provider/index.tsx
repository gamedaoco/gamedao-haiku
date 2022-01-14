import ExtensionProvider from './extension'
import NetworkProvider from './network'

export default function Providers({ children }) {
	return (
		<NetworkProvider>
			<ExtensionProvider allowConnect={true}>{children}</ExtensionProvider>
		</NetworkProvider>
	)
}
