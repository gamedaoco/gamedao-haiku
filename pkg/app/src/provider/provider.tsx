import { NetworkProvider } from './network/networkProvider'
import { ExtensionProvider } from './extension/extensionProvider'
import { SettingsProvider } from './settings/settingsProvider'
import { AppProvider } from 'provider/app/appProvider'
import { GraphQlProvider } from 'provider/graphQl/graphQlProvider'

export function Providers({ children }) {
	return (
		<GraphQlProvider>
			<AppProvider>
				<SettingsProvider>
					<NetworkProvider>
						<ExtensionProvider>{children}</ExtensionProvider>
					</NetworkProvider>
				</SettingsProvider>
			</AppProvider>
		</GraphQlProvider>
	)
}
