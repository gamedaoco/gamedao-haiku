import { AppProvider } from 'src/providers/app/appProvider'
import { ExtensionProvider } from 'src/providers/extension/extensionProvider'
import { GraphQlProvider } from 'src/providers/graphQl/graphQlProvider'
import { LanguageProvider } from 'src/providers/language/languageProvider'
import { NetworkProvider } from 'src/providers/network/networkProvider'
import { ReadyProvider } from 'src/providers/ready/readyProvider'
import { SettingsProvider } from 'src/providers/settings/settingsProvider'
import { ThemeProvider } from 'src/providers/theme/themeProvider'

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

// export function Providers({ children }) {
// 	return (
// 		<SettingsProvider>
// 			<ThemeProvider>
// 				<LanguageProvider>{children}</LanguageProvider>
// 			</ThemeProvider>
// 		</SettingsProvider>
// 	)
// }

export default Providers
