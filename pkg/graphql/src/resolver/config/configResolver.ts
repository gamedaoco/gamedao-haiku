// TODO: Move to core package
import jsonData from './config.json'
import type { Config } from '../../types'

interface ResolverArgs {
	env: string
}

export function configResolver(_: any, args: ResolverArgs): Config {
	return {
		...(jsonData.global ?? {}),
		...((jsonData as any)[args.env] ?? {}),
	} as Config
}
