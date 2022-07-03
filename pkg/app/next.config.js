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

module.exports = {
	reactStrictMode: true,
	env: {
		BUILD_TIME: dateStr.toString(),
		BUILD_TIMESTAMP: +date,
		APP_NAME: pkg.name,
		APP_VERSION: pkg.version,
		VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA || '',
		VERCEL_GITHUB_COMMIT_REF: process.env.VERCEL_GITHUB_COMMIT_REF || '',
		VERCEL_ENV: process.env.VERCEL_ENV || ''
	},
	poweredByHeader: 'gamedao.co loves you',
	experiments: {
		topLevelAwait: true,
	},
}
