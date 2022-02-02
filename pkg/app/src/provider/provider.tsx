import { NetworkProvider } from './network/networkProvider'
import { ExtensionProvider } from './extension/extensionProvider'
import { SettingsProvider } from './settings/settingsProvider'
import { AppProvider } from 'provider/app/appProvider'

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
