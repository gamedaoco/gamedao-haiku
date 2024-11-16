import { Config } from '../../../@types/schema'
import jsonData from './config.json' assert { type: 'json' }

interface ResolverArgs {
	env: string
}

export function configResolver(_: any, args: ResolverArgs): Config {
	return {
		...(jsonData.global ?? {}),
		...((jsonData as any)[args.env] ?? {}),
	} as Config
}
