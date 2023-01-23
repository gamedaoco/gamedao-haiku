import { AppProvider } from 'providers/app/appProvider'
import { GraphQlProvider } from 'providers/graphQl/graphQlProvider'
import { LanguageProvider } from 'providers/language/languageProvider'
import { ReadyProvider } from 'providers/ready/readyProvider'
import { ThemeProvider } from 'providers/theme/themeProvider'
import { ExtensionProvider } from './extension/extensionProvider'
import { NetworkProvider } from './network/networkProvider'
import { SettingsProvider } from './settings/settingsProvider'

export function Providers({ children }) {
	return (
		<SettingsProvider>
			<ThemeProvider>
				<LanguageProvider>
					<GraphQlProvider>
						<AppProvider>
							<ReadyProvider>
								<NetworkProvider>
									<ExtensionProvider>{children}</ExtensionProvider>
								</NetworkProvider>
							</ReadyProvider>
						</AppProvider>
					</GraphQlProvider>
				</LanguageProvider>
			</ThemeProvider>
		</SettingsProvider>
	)
}

export default Providers
