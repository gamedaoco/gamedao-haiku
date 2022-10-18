import { useEffect } from 'react'
import { AppProps } from 'next/app'
// import { NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

import { CacheProvider, EmotionCache } from '@emotion/react'
import { useConfig } from 'hooks/useConfig'
import { Logger } from 'lib/logger'
// Toastify styles + custom styles overrides
import 'react-toastify/dist/ReactToastify.css'
import { Providers } from 'src/provider/provider'
import createEmotionCache from 'src/theme/createEmotionCache'
import 'src/theme/css/toastify.css'
import 'src/theme/css/modelViewer.css'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
	Component: any
	emotionCache: EmotionCache
	pageProps: object
}

const log = Logger('HAIKU')

function HeadAndMetaTags() {
	const config = useConfig()

	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,shrink-to-fit=no"
			/>
			<meta name="format-detection" content="telephone=no, address=no, email=no" />
			<link rel="shortcut icon" href="/favicon.png" />
			<link rel="icon" type="image/png" href="/favicon.png" />

			<meta name="description" content={config?.SITE_DESCRIPTION} />

			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={config?.SITE_NAME} />
			<meta property="og:title" content={config?.SITE_TITLE} />
			<meta property="og:description" content={config?.SITE_DESCRIPTION} />
			<meta property="og:image" content={config?.SITE_IMAGE} />

			<meta property="twitter:domain" content="app.gamedao.co" />
			<meta property="twitter:url" content="https://app.gamedao.co/" />
			<meta property="twitter:image" content={config?.SITE_IMAGE} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={config?.TW_SITE_CREATOR} />
			<meta name="twitter:site" content={config?.TW_SITE_NAME} />
			<meta name="twitter:title" content={config?.SITE_TITLE} />
			<meta name="twitter:description" content={config?.SITE_DESCRIPTION} />
		</Head>
	)
}

export function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
	const router = useRouter()

	useEffect(() => {
		log.info(`❤️  Welcome to GameDAO`)
		log.info(`💬  Join our discord: https://discord.gg/gamedao`)
	}, [])

	useEffect(() => {
		Fathom.load('XLUUAYWU', {
			url: 'https://brilliant-truthful.gamedao.co/script.js',
			includedDomains: ['gamedao.co'],
		})
		function onRouteChangeComplete() {
			Fathom.trackPageview()
		}
		router.events.on('routeChangeComplete', onRouteChangeComplete)
		return () => {
			router.events.off('routeChangeComplete', onRouteChangeComplete)
		}
	}, [router.events])

	return (
		<CacheProvider value={emotionCache}>
			<Providers>
				<HeadAndMetaTags />
				<Component {...pageProps} />
			</Providers>
		</CacheProvider>
	)
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
// 	log.trace(metric)
// }

export default MyApp
