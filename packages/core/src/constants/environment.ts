import type { Environment } from '@gamedao/graph'

export const ENVIRONMENT: Environment = (
	process.env.NEXT_PUBLIC_ENVIRONMENT || 'Development'
).toUpperCase() as Environment

export const sessionUpdateInterval: number = 5 * 60 * 1000
