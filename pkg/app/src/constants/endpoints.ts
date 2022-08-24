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
		name: 'Beeblebrox',
		url: 'https://beeblebrox.zero.io/graph/v1/graphql',
		healthCheck: 'https://beeblebrox.zero.io/graph/healthz',
		default: true,
	},
	{
		image: '/img/zero.png',
		name: 'Rococo',
		url: 'http://ec2-18-157-161-178.eu-central-1.compute.amazonaws.com:9080/v1/graphql',
		healthCheck: 'http://ec2-18-157-161-178.eu-central-1.compute.amazonaws.com:9080/healthz',
	},
]

export const ENDPOINTS: Endpoints =
	ENVIRONMENT === Environment.Development ? [...developmentEndpoints, ...productionEndpoints] : productionEndpoints
