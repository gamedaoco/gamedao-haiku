// TODO: Move to core package
import type { Config } from '../../types'
import jsonData from './config.json'

interface ResolverArgs {
	env: string
}

export function configResolver(_: any, args: ResolverArgs): Config {
	return {
		...(jsonData.global ?? {}),
		...((jsonData as any)[args.env] ?? {}),
	} as Config
}
