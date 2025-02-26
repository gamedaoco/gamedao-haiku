// import { ENVIRONMENT } from 'constants/environment'
// import { Environment } from '@gamedao/graph'
import type { Endpoints } from '@gamedao/types'

const env = process.env.NEXT_PUBLIC_ENVIRONMENT

const productionEndpoints: Endpoints = [
	{
		image: '/svg/z-ctrl-45-wht.svg',
		name: 'ZERO Alphaville',
		url: 'https://graph.gamedao.net/v1/graphql',
		healthCheck: 'https://graph.gamedao.net/health',
		chain: 'wss://rpc.dev.gamedao.net',
		default: false,
		id: 25,
	},
	{
		image: '/svg/astar.svg',
		name: 'Astar',
		url: 'https://graph.gamedao.net/v1/graphql',
		healthCheck: 'https://graph.gamedao.net/health',
		chain: 'wss://astar-rpc.dwellir.com',
		default: true,
		id: 5,
	},
]

// ENVIRONMENT === Environment.Development ? [...developmentEndpoints, ...productionEndpoints] : productionEndpoints
export const ENDPOINTS: Endpoints = productionEndpoints

export const getConnectedEndpoint = () => ENDPOINTS.find((e: Endpoints) => e.default)
