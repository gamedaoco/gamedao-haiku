import { NetworkProvider } from './network/networkProvider'
import { ExtensionProvider } from './extension/extensionProvider'
import { SettingsProvider } from './settings/settingsProvider'

export function Providers({ children }) {
	return (
		<SettingsProvider>
			<NetworkProvider>
				<ExtensionProvider>{children}</ExtensionProvider>
			</NetworkProvider>
		</SettingsProvider>
	)
}
