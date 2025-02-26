import Head from 'next/head'

const content = {
	CAMPAIGN_MIN_EXPIRY_IN_SECONDS: '300',
	CONTACT: 'hey@gamedao.co',
	IPFS_GATEWAY: 'https://gamedao.infura-ipfs.io/',
	LOG_LEVEL: 'SILENT',
	PROPOSAL_MIN_EXPIRY_IN_SECONDS: '300',
	SITE_DESCRIPTION:
		'The community owned video games publisher, producer and distributor. We connect gamers, creators, publishers and investors for better video games with the power of web3, dao, defi and nft.',
	SITE_IMAGE: 'https://gamedao.co/img/og-preview.jpg',
	SITE_NAME: 'GameDAO',
	SITE_TITLE: 'A community owned publisher and DAO for video games, esports.',
	TW_SITE_CREATOR: '@gamedaoco',
	TW_SITE_NAME: '@gamedaoco',
}

export const Metadata = () => (
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

		<meta name="description" content={content.SITE_DESCRIPTION} />

		<meta property="og:type" content="website" />
		<meta property="og:site_name" content={content.SITE_NAME} />
		<meta property="og:title" content={content.SITE_TITLE} />
		<meta property="og:description" content={content.SITE_DESCRIPTION} />
		<meta property="og:image" content={content.SITE_IMAGE} />

		<meta property="twitter:domain" content="gamedao.app" />
		<meta property="twitter:url" content="https://astar.gamedao.app/" />
		<meta property="twitter:image" content={content.SITE_IMAGE} />

		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:creator" content={content.TW_SITE_CREATOR} />
		<meta name="twitter:site" content={content.TW_SITE_NAME} />
		<meta name="twitter:title" content={content.SITE_TITLE} />
		<meta name="twitter:description" content={content.SITE_DESCRIPTION} />
	</Head>
)
