import configCommon from './common.json'

import types from './types.json'
// import { typeBundleForPolkadot } from '@zeroio/type-definitions'
// const types = typeBundleForPolkadot.types.pop().types

const configEnv = require('./production.json')
// const configEnv = require(`./${process.env.NODE_ENV}.json`)
const dockerEnv = process.env.DOCKER === true ? require('./docker.json') : {}

const envVarNames = ['REACT_APP_PROVIDER_SOCKET', 'REACT_APP_DEVELOPMENT_KEYRING']

const envVars = envVarNames.reduce((mem, n) => {
	if (process.env[n] !== undefined) mem[n.slice(10)] = process.env[n]
	return mem
}, {})

export const DEV = process.env.NODE_ENV === 'production' ? false : true
export const ENV = process.env.NODE_ENV

const config = {
	...configCommon,
	...configEnv,
	...dockerEnv,
	...envVars,
	types,
	dev: DEV,
}

export default config
