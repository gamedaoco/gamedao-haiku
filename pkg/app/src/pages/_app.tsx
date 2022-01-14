import dynamic from 'next/dynamic'
import Head from 'next/head'
import AppProps from 'next/app'
import { Providers } from 'src/provider'

import { CacheProvider, EmotionCache } from '@emotion/react'
import ThemeConfig from 'src/theme'
import ThemePrimaryColor from 'src/components/ThemePrimaryColor'
import createEmotionCache from 'src/theme/createEmotionCache'

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
				<link rel="stylesheet" href="/fonts/iconfont.css" />
			</Head>
			<Providers>
				<ThemeConfig>
					{/*	<ThemePrimaryColor>*/}
					<Component {...pageProps} />
					{/*	</ThemePrimaryColor>*/}
				</ThemeConfig>
			</Providers>
		</CacheProvider>
	)
}

export default MyApp
