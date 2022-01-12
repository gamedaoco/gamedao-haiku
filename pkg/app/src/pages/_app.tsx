import dynamic from 'next/dynamic'
import Head from 'next/head'
import AppProps from 'next/app'

import Network from 'src/provider'

import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'src/theme/createEmotionCache'
import ThemeConfig from 'src/theme/mnml'
import GlobalStyles from 'src/theme/globalStyles'
import ThemePrimaryColor from 'src/components/ThemePrimaryColor'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

const MyApp = (props) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>GameDAO</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<Network>
				<ThemeConfig>
					<ThemePrimaryColor>
						<Component {...pageProps} />
					</ThemePrimaryColor>
				</ThemeConfig>
			</Network>
		</CacheProvider>
	)
}

export default MyApp
