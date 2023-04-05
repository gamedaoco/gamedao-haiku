import { SettingsProvider } from 'src/providers/settings/settingsProvider'
import { ThemeProvider } from 'src/providers/theme/themeProvider'
import { LanguageProvider } from 'src/providers/language/languageProvider'
import { GraphQlProvider } from 'src/providers/graphQl/graphQlProvider'
import { AppProvider } from 'src/providers/app/appProvider'
import { ReadyProvider } from 'src/providers/ready/readyProvider'
import { NetworkProvider } from 'src/providers/network/networkProvider'
import { ExtensionProvider } from 'src/providers/extension/extensionProvider'

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
