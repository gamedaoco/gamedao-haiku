import Head from 'next/head'
import AppProps from 'next/app'
import { useRouter } from 'next/router'

import { Providers } from 'src/provider'
import Theme from 'src/theme'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'src/theme/createEmotionCache'
import ThemePrimaryColor from 'src/components/ThemePrimaryColor'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

const MyApp = (props) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
	const { pathname } = useRouter()

	const SITE_NAME = 'GameDAO'
	const SITE_TITLE = 'Fundraising, coordination, ownership for video games, esports and the creative industry.'
	const SITE_DESCRIPTION =
		'The DAO for video games, esports and creatives. We connect gamers, creators, publishers and investors for better video games with the power of web3, dao, defi and nft.'
	const SITE_IMAGE = 'https://gamedao.co/assets/gamedao-logo.png'
	const TW_SITE_NAME = '@gamedaoco'
	const TW_SITE_CREATOR = '@zerodotio'
	const CONTACT = 'hey@gamedao.co'

	// TODO: make it better
	const path = pathname

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,shrink-to-fit=no"
				/>
				<meta name="format-detection" content="telephone=no, address=no, email=no" />
				<link rel="stylesheet" href="/fonts/iconfont.css" />
				<link rel="shortcut icon" href="/favicon.png" />
				<link rel="icon" type="image/png" href="/favicon.png" />

				<meta property="og:type" content="website" />
				<meta property="og:site_name" content={SITE_NAME} />
				<meta property="og:title" content={SITE_TITLE} />
				<meta property="og:description" content={SITE_DESCRIPTION} />
				<meta property="og:image" content={SITE_IMAGE} />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content={TW_SITE_CREATOR} />
				<meta name="twitter:site" content={TW_SITE_NAME} />
				<meta name="twitter:title" content={SITE_TITLE} />
				<meta name="twitter:description" content={SITE_DESCRIPTION} />
				<meta property="twitter:image" content={SITE_IMAGE} />
			</Head>
			<Providers>
				<Theme>
					<ThemePrimaryColor>
						<Component {...pageProps} />
					</ThemePrimaryColor>
				</Theme>
			</Providers>
		</CacheProvider>
	)
}

export default MyApp
