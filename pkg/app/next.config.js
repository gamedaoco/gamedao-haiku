const path = require('path')
const dotenv = require('dotenv').config()
// const webpack = require('webpack')
const sitemap = require('nextjs-sitemap-generator')
const pkg = require('./package')

const date = new Date()
const dateStr = date.toISOString()

const dev = process.env.NODE_ENV !== 'production'

sitemap({
	ignoredPaths: ['api'],
	baseUrl: 'https://haiku.gamedao.co',
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
		VERCEL_GITHUB_COMMIT_REF: process.env.VERCEL_GITHUB_COMMIT_REF || 'unknown',
	},
	poweredByHeader: 'gamedao.co loves you',
}
