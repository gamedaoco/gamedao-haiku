import { Environment } from '@gamedao-haiku/graphql/dist'

export const ENVIRONMENT: Environment = (
	process.env.NEXT_PUBLIC_ENVIRONMENT || 'production'
).toUpperCase() as Environment

export const ENV = process.env.NEXT_PUBLIC_ENVIRONMENT
export const IS_ENV_DEV = ENV === 'development'
export const IS_ENV_PROD = ENV === 'production'

export const HOST = process.env.NEXT_PUBLIC_HOST
