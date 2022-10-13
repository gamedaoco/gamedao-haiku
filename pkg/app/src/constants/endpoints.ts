import type { Endpoints } from 'src/@types/graphql'
import { ENVIRONMENT } from 'src/constants/index'
import { Environment } from 'src/queries'

const developmentEndpoints: Endpoints = [
	{
		image: '/img/zero.png',
		name: 'Local env',
		url: 'http://localhost:9080/v1/graphql',
		healthCheck: 'http://localhost:9080/healthz',
	},
]

const productionEndpoints: Endpoints = [
	{
		image: '/img/zero.png',
		name: 'Developent',
		url: 'https://graph.dev.sub.zero.io/v1/graphql',
		healthCheck: 'https://graph.dev.sub.zero.io/health',
		default: true,
	},
	{
		image: '/img/zero.png',
		name: 'Staging',
		url: 'https://graph.stage.sub.zero.io/v1/graphql',
		healthCheck: 'https://graph.stage.sub.zero.io/health',
	},
	{
		image: '/img/zero.png',
		name: 'Rococo',
		url: 'https://graph.rococo.sub.zero.io/v1/graphql',
		healthCheck: 'https://graph.rococo.sub.zero.io/health',
	},
	{
		image: '/img/zero.png',
		name: 'Mainnet',
		url: 'https://graph.prod.sub.zero.io/v1/graphql',
		healthCheck: 'https://graph.prod.sub.zero.io/health',
	},

]

export const ENDPOINTS: Endpoints =
	ENVIRONMENT === Environment.Development ? [...developmentEndpoints, ...productionEndpoints] : productionEndpoints
