import type { Endpoints } from 'src/@types/graphql'
import { ENVIRONMENT } from 'src/constants/index'
import { Environment } from 'src/queries'

const env = process.env.NEXT_PUBLIC_ENVIRONMENT

const developmentEndpoints: Endpoints = [
	// {
	// 	image: '/svg/z-ctrl-45-wht.svg',
	// 	name: 'Local Testnet',
	// 	url: 'http://localhost:9999/v1/graphql',
	// 	healthCheck: 'http://localhost:9999/healthz',
	// 	chain: 'wss://localhost:9944',
	// },
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
		name: 'development',
		url: 'https://graph.dev.gamedao.net/v1/graphql',
		healthCheck: 'https://graph.dev.gamedao.net/health',
		chain: 'wss://rpc.dev.gamedao.net',
		default: true, // ENVIRONMENT === Environment.Development ? true : false,
	},
	// {
	// 	image: '/svg/z-ctrl-45-wht.svg',
	// 	name: 'subzero testnet ( stable, fiat on )',
	// 	url: 'https://graph.stage.sub.zero.io/v1/graphql',
	// 	healthCheck: 'https://graph.stage.sub.zero.io/health',
	// 	chain: 'wss://rpc.stage.sub.zero.io',
	// 	default: ENVIRONMENT === Environment.Staging ? true : false,
	// },
	// {
	// 	image: '/svg/z-ctrl-45-wht.svg',
	// 	name: 'zero network',
	// 	url: 'https://graph.prod.sub.zero.io/v1/graphql',
	// 	healthCheck: 'https://graph.prod.sub.zero.io/health',
	// 	chain: 'wss://node.prod.sub.zero.io',
	// 	default: ENVIRONMENT === Environment.Production ? true : false,
	// },
]

export const ENDPOINTS: Endpoints =
	ENVIRONMENT === Environment.Development ? [...developmentEndpoints, ...productionEndpoints] : productionEndpoints

export const getConnectedEndpoint = () => ENDPOINTS.find((e) => e.default)
