import { LanguageProvider } from './language/languageProvider'
import { SettingsProvider } from './settings/settingsProvider'
import { ThemeProvider } from './theme/themeProvider'

import { GraphQlProvider } from './graphQl/graphQlProvider'
import { AppProvider } from './app/appProvider'
import { ReadyProvider } from './ready/readyProvider'
import { NetworkProvider } from './network/networkProvider'
import { ExtensionProvider } from './extension/extensionProvider'

export function Providers({ children }) {
	return (
		// <SettingsProvider>
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
		// </SettingsProvider>
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
