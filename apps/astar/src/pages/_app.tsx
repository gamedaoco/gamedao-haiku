import { useEffect, useState } from 'react'

import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

import { Metadata } from 'components/atoms/Metadata'

import { Providers } from 'src/providers'

import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'src/theme/createEmotionCache'
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
	Component: any
	emotionCache: EmotionCache
	// pageProps: object
	// session?: any
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
					<Metadata />
					<Component {...pageProps} session={session} />
				</Providers>
			</CacheProvider>
		</SessionProvider>
	)
}

export default MyApp
