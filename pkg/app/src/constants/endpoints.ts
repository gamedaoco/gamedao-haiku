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
		name: 'Dev Parachain',
		url: 'https://graph.dev.sub.zero.io/v1/graphql',
		healthCheck: 'https://graph.dev.sub.zero.io/health',
		default: true,
	},
	{
		image: '/img/zero.png',
		name: 'Rococo Parachain',
		url: 'https://graph.staging.para.sub.zero.io',
		healthCheck: 'https://graph.staging.para.sub.zero.io/health',
	},
]

export const ENDPOINTS: Endpoints =
	ENVIRONMENT === Environment.Development ? [...developmentEndpoints, ...productionEndpoints] : productionEndpoints
