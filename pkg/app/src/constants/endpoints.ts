import type { Endpoints } from 'src/@types/graphql'
import { ENVIRONMENT } from 'src/constants/index'
import { Environment } from 'src/queries'

const developmentEndpoints: Endpoints = [
	{
		image: '/img/zero.png',
		name: 'Local env',
		url: 'http://localhost:9080/v1/graphql',
		healthCheck: 'http://localhost:9080/healthz',
		chain: 'wss://localhost:9080',
	},
]

const productionEndpoints: Endpoints = [
	{
		image: '/img/zero.png',
		name: 'Developent',
		url: 'https://graph.dev.sub.zero.io/v1/graphql',
		healthCheck: 'https://graph.dev.sub.zero.io/health',
		chain: 'wss://node.dev.sub.zero.io',
		default: true,
	},
	{
		image: '/img/zero.png',
		name: 'Staging',
		url: 'https://graph.stage.sub.zero.io/v1/graphql',
		healthCheck: 'https://graph.stage.sub.zero.io/health',
		chain: 'wss://node.stage.sub.zero.io',
	},
	{
		image: '/img/zero.png',
		name: 'Rococo',
		url: 'https://graph.rococo.sub.zero.io/v1/graphql',
		healthCheck: 'https://graph.rococo.sub.zero.io/health',
		chain: 'wss://node.rococo.sub.zero.io',
	},
	{
		image: '/img/zero.png',
		name: 'Mainnet',
		url: 'https://graph.prod.sub.zero.io/v1/graphql',
		healthCheck: 'https://graph.prod.sub.zero.io/health',
		chain: 'wss://node.prod.sub.zero.io',
	},

]

export const ENDPOINTS: Endpoints =
	ENVIRONMENT === Environment.Development ? [...developmentEndpoints, ...productionEndpoints] : productionEndpoints

export const getConnectedEndpoint = () => ENDPOINTS.find((e) => e.default)
