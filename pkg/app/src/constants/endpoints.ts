import type { Endpoints } from 'src/@types/graphql'
import { ENVIRONMENT } from 'src/constants/index'
import { Environment } from 'src/queries'

const developmentEndpoints: Endpoints = [
	{
		image: '/svg/z-ctrl-45-wht.svg',
		name: 'Local Testnet',
		url: 'http://localhost:9080/v1/graphql',
		healthCheck: 'http://localhost:9080/healthz',
		chain: 'wss://localhost:9080',
	},
	// {
	// 	image: '/svg/z-ctrl-45-wht.svg',
	// 	name: 'Rococo Parachain Testnet',
	// 	url: 'https://graph.rococo.sub.zero.io/v1/graphql',
	// 	healthCheck: 'https://graph.rococo.sub.zero.io/health',
	// 	chain: 'wss://node.rococo.sub.zero.io',
	// },
]

const productionEndpoints: Endpoints = [
	{
		image: '/svg/z-ctrl-45-wht.svg',
		name: 'Development via test',
		url: 'https://test.graph.dev.sub.zero.io/v1/graphql',
		healthCheck: 'https://test.graph.dev.sub.zero.io/health',
		chain: 'wss://node.dev.sub.zero.io',
		default: ENVIRONMENT === Environment.Development ? true : false,
	},
	{
		image: '/svg/z-ctrl-45-wht.svg',
		name: 'Development',
		url: 'https://graph.dev.sub.zero.io/v1/graphql',
		healthCheck: 'https://graph.dev.sub.zero.io/health',
		chain: 'wss://node.dev.sub.zero.io',
		default: ENVIRONMENT === Environment.Development ? true : false,
	},
	{
		image: '/svg/z-ctrl-45-wht.svg',
		name: 'Staging',
		url: 'https://graph.stage.sub.zero.io/v1/graphql',
		healthCheck: 'https://graph.stage.sub.zero.io/health',
		chain: 'wss://node.stage.sub.zero.io',
		default: ENVIRONMENT === Environment.Staging ? true : false,
	},
	// {
	// 	image: '/svg/z-ctrl-45-wht.svg',
	// 	name: 'Mainnet',
	// 	url: 'https://graph.prod.sub.zero.io/v1/graphql',
	// 	healthCheck: 'https://graph.prod.sub.zero.io/health',
	// 	chain: 'wss://node.prod.sub.zero.io',
	// 	default: ENVIRONMENT === Environment.Production ? true : false,
	// },
]

export const ENDPOINTS: Endpoints =
	ENVIRONMENT === Environment.Development ? [...developmentEndpoints, ...productionEndpoints] : productionEndpoints

export const getConnectedEndpoint = () => ENDPOINTS.find((e) => e.default)
