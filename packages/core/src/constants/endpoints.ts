import { Environment } from '@gamedao/graph'
import type { Endpoints } from '@types/graphql'
import { ENVIRONMENT } from 'constants/environment'

const env = process.env.NEXT_PUBLIC_ENVIRONMENT

const productionEndpoints: Endpoints = [
	{
		image: '/svg/z-ctrl-45-wht.svg',
		name: 'ZERO Alphaville',
		url: 'https://graph.gamedao.net/v1/graphql',
		healthCheck: 'https://graph.gamedao.net/health',
		chain: 'wss://rpc.dev.gamedao.net',
		default: true,
	},
	{
		image: '/svg/astar.svg',
		name: 'Astar',
		url: 'https://graph.gamedao.net/v1/graphql',
		healthCheck: 'https://graph.gamedao.net/health',
		chain: 'wss://astar-rpc.dwellir.com',
		default: false,
	},
]

// ENVIRONMENT === Environment.Development ? [...developmentEndpoints, ...productionEndpoints] : productionEndpoints
export const ENDPOINTS: Endpoints = productionEndpoints

export const getConnectedEndpoint = () => ENDPOINTS.find((e: Endpoints) => e.default)
