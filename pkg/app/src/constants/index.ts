export const ENV = process.env.NEXT_PUBLIC_ENVIRONMENT
export const IS_ENV_DEV = ENV === 'development'
export const IS_ENV_PROD = ENV === 'production'

export const HOST = process.env.NEXT_PUBLIC_HOST
