import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import * as Fathom from 'fathom-client'
import { Logger } from 'lib/logger'

import { SessionProvider } from 'next-auth/react'

import { Providers } from 'src/providers'
import { useConfig } from 'hooks/useConfig'

import createEmotionCache from 'src/theme/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react'
import 'react-toastify/dist/ReactToastify.css'
import 'src/theme/css/toastify.css'
import 'src/theme/css/modelViewer.css'

import { ENVIRONMENT } from 'src/constants/index'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
	Component: any
	emotionCache: EmotionCache
	pageProps: object
	session: any
}

const log = Logger()

function HeadAndMetaTags() {
	const config = useConfig()

	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=2.0,shrink-to-fit=no"
			/>
			<meta name="format-detection" content="telephone=no, address=no, email=no" />
			<link rel="shortcut icon" href="favicon.png" />
			<link rel="icon" type="image/png" href="favicon.png" />

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

export function MyApp({ Component, emotionCache = clientSideEmotionCache, session, pageProps }: MyAppProps) {
	const router = useRouter()

	useEffect(() => {
		if (ENVIRONMENT === 'DEVELOPMENT') return
		log.info(`❤️  Welcome to GameDAO`)
		log.info(`💬  Join our discord: https://discord.gg/gamedao`)
		log.info(`🕸  Connecting ${process.env.NEXT_PUBLIC_ENVIRONMENT}`)
	}, [ENVIRONMENT])

	useEffect(() => {
		if (!ENVIRONMENT || ENVIRONMENT === 'DEVELOPMENT') return
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
		<SessionProvider session={session}>
			<CacheProvider value={emotionCache}>
				<Providers>
					<HeadAndMetaTags />
					<Component {...pageProps} />
				</Providers>
			</CacheProvider>
		</SessionProvider>
	)
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
// 	log.trace(metric)
// }

export default MyApp
