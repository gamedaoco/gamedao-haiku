import { AppProvider } from 'src/providers/app/appProvider'
import { GraphQlProvider } from 'src/providers/graphQl/graphQlProvider'
import { LanguageProvider } from 'src/providers/language/languageProvider'
import { ReadyProvider } from 'src/providers/ready/readyProvider'
import { ThemeProvider } from 'src/providers/theme/themeProvider'
import { ExtensionProvider } from 'src/providers/extension/extensionProvider'
import { NetworkProvider } from 'src/providers/network/networkProvider'
import { SettingsProvider } from 'src/providers/settings/settingsProvider'

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
