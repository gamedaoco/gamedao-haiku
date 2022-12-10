const sitemap = require('nextjs-sitemap-generator')
const pkg = require('./package')
const date = new Date()
const dateStr = date.toISOString()

sitemap({
	ignoredPaths: ['api'],
	baseUrl: 'https://app.gamedao.co',
	pagesDirectory: __dirname + '/src/pages',
	targetDirectory: 'public/',
	ignoreIndexFiles: true,
	pagesConfig: {
		'/index': {
			priority: '1',
			changefreq: 'daily',
		},
	},
})

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
})

module.exports = withMDX({
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	reactStrictMode: true,
	env: {
		BUILD_TIME: dateStr.toString(),
		BUILD_TIMESTAMP: +date,
		APP_NAME: pkg.name,
		APP_VERSION: pkg.version,
		VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA || '',
		VERCEL_GITHUB_COMMIT_REF: process.env.VERCEL_GITHUB_COMMIT_REF || '',
		VERCEL_ENV: process.env.VERCEL_ENV || '',
		APP_URI: process.env === 'development' ? '//localhost:3000' : '//gamedao.co',
	},
	poweredByHeader: false,
	experiments: {
		topLevelAwait: true,
	},
	images: {
		domains: ['ipfs.infura.io', 'gateway.ipfs.io', 'gamedao.infura-ipfs.io'],
		// remotePatterns: [
		// 	{ protocol: 'https', hostname: 'gateway.ipfs.io', port: '', pathname: '/ipfs/**', },
		// ],
	},
	// eslint: {
	// 	// Warning: This allows production builds to successfully complete even if
	// 	// your project has ESLint errors.
	// 	ignoreDuringBuilds: true,
	// },
})
