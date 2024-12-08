import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'

import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import * as Fathom from 'fathom-client'

import { ENVIRONMENT } from '@gamedao/constants'
import { useConfig } from '@gamedao/core/hooks'
import { Logger } from '@gamedao/utils'

import { Providers } from 'src/providers'

import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'src/theme/createEmotionCache'
// import 'src/theme/css/modelViewer.css'
import 'src/theme/css/toastify.css'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
	Component: any
	emotionCache: EmotionCache
	// pageProps: object
	// session?: any
}

const log = Logger()

// import { u8aToHex } from '@polkadot/util'
// import { decodeAddress } from '@polkadot/util-crypto'
// const ADDR = '7MEF9syzCQZK2iMEz4a9ZiFiQxaj8HQN5scdJDzbB4mqC1CB'
// const hex = u8aToHex(decodeAddress(ADDR))
// console.log('hex', hex)

function HeadAndMetaTags() {
	const config = useConfig()

	return (
		<Head>
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black" />
			<link rel="apple-touch-startup-image" href="/splash.png" />
			<link rel="apple-touch-icon" href="/icon.png" />
			{/* to make the splash screen work, we need to provide exact images... */}
			<link
				rel="apple-touch-startup-image"
				media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
				href="/apple-launch-1242x2688.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
				href="/apple-launch-828x1792.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
				href="/apple-launch-1125x2436.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
				href="/apple-launch-1242x2208.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
				href="/apple-launch-750x1334.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
				href="/apple-launch-2048x2732.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
				href="/apple-launch-1668x2388.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
				href="/apple-launch-1668x2224.png"
			/>
			<link
				rel="apple-touch-startup-image"
				media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
				href="/apple-launch-1536x2048.png"
			/>

			<meta
				name="viewport"
				content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=2.0,shrink-to-fit=no"
			/>
			<meta name="format-detection" content="telephone=no, address=no, email=no" />

			<meta name="mobile-web-app-capable" content="yes" />
			<link rel="icon" type="image/png" href="/icon.png" />

			<link rel="shortcut icon" href="/favicon.png" />

			<meta name="description" content={config?.SITE_DESCRIPTION} />

			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={config?.SITE_NAME} />
			<meta property="og:title" content={config?.SITE_TITLE} />
			<meta property="og:description" content={config?.SITE_DESCRIPTION} />
			<meta property="og:image" content={config?.SITE_IMAGE} />

			<meta property="twitter:domain" content="gamedao.app" />
			<meta property="twitter:url" content="https://astar.gamedao.app/" />
			<meta property="twitter:image" content={config?.SITE_IMAGE} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={config?.TW_SITE_CREATOR} />
			<meta name="twitter:site" content={config?.TW_SITE_NAME} />
			<meta name="twitter:title" content={config?.SITE_TITLE} />
			<meta name="twitter:description" content={config?.SITE_DESCRIPTION} />
		</Head>
	)
}

export function MyApp({
	Component,
	emotionCache = clientSideEmotionCache,
	pageProps: { session, ...pageProps },
}: MyAppProps) {
	const router = useRouter()

	useEffect(() => {
		// if (!ENVIRONMENT || ENVIRONMENT === 'DEVELOPMENT') return
		Fathom.load('XLUUAYWU', {
			url: 'https://cdn.usefathom.com/script.js',
			includedDomains: ['gamedao.app'],
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
		<SessionProvider session={session} refetchInterval={5 * 60}>
			<CacheProvider value={emotionCache}>
				<Providers>
					<HeadAndMetaTags />
					<Component {...pageProps} session={session} />
				</Providers>
			</CacheProvider>
		</SessionProvider>
	)
}

export default MyApp
