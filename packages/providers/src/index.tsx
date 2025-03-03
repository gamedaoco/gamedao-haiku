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
						{/* <ReadyProvider> */}
						{/* <NetworkProvider> */}
						{/* <ExtensionProvider> */}
						{children}
						{/* </ExtensionProvider> */}
						{/* </NetworkProvider> */}
						{/* </ReadyProvider> */}
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

export * from './app/appProvider'
export * from './app/components/context'
export * from './extension/extensionProvider'
export * from './extension/components/context'
export * from './graphQl/graphQlProvider'
export * from './graphQl/components/context'
export * from './language/languageProvider'
export * from './network/networkProvider'
export * from './network/components/context'
export * from './ready/readyProvider'
export * from './settings/settingsProvider'
export * from './settings/components/context'
export * from './theme/themeProvider'
