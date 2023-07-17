import * as React from 'react'

import { DocumentContext, DocumentInitialProps } from 'next/dist/shared/lib/utils'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from 'src/theme/createEmotionCache'

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const originalRenderPage = ctx.renderPage
		const cache = createEmotionCache()
		const { extractCriticalToChunks } = createEmotionServer(cache)

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App: any) =>
					function EnhanceApp(props) {
						return <App emotionCache={cache} {...props} />
					},
			})

		const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx)

		const emotionStyles = extractCriticalToChunks(initialProps.html)
		const emotionStyleTags = emotionStyles.styles.map((style) => (
			<style
				data-emotion={`${style.key} ${style.ids.join(' ')}`}
				key={style.key}
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: style.css }}
			/>
		))

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{emotionStyleTags}
					<style>{`
						#__next {
							height: 100%;
							width: 100%;
						}
					`}</style>
				</>
			),
		} as any
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Inter:400,600,800&display=swap"
					/>
					<link rel="stylesheet" href="https://use.typekit.net/glg5whl.css" />
				</Head>
				<body
					style={{
						height: '100vh',
						width: '100vw',
						overflowX: 'hidden',
						background: '#111111',
					}}
				>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
