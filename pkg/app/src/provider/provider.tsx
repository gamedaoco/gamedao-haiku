import { AppProvider } from 'provider/app/appProvider'
import { GraphQlProvider } from 'provider/graphQl/graphQlProvider'
import { LanguageProvider } from 'provider/language/languageProvider'
import { ReadyProvider } from 'provider/ready/readyProvider'
import { ThemeProvider } from 'provider/theme/themeProvider'

import { ExtensionProvider } from './extension/extensionProvider'
import { NetworkProvider } from './network/networkProvider'
import { SettingsProvider } from './settings/settingsProvider'

export function Providers({ children }) {
	return (
		<GraphQlProvider>
			<AppProvider>
				<LanguageProvider>
					<SettingsProvider>
						<NetworkProvider>
							<ThemeProvider>
								<ReadyProvider>
									<ExtensionProvider>{children}</ExtensionProvider>
								</ReadyProvider>
							</ThemeProvider>
						</NetworkProvider>
					</SettingsProvider>
				</LanguageProvider>
			</AppProvider>
		</GraphQlProvider>
	)
}
