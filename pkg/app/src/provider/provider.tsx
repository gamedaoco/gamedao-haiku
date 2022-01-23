import { AppProvider } from './app'
import { SettingsProvider } from './settings/settingsProvider'
import { NetworkProvider } from './network/networkProvider'
import { ExtensionProvider } from './extension/extensionProvider'

export function Providers({ children }) {
	return (
		<AppProvider>
			<SettingsProvider>
				<NetworkProvider>
					<ExtensionProvider>{children}</ExtensionProvider>
				</NetworkProvider>
			</SettingsProvider>
		</AppProvider>
	)
}
