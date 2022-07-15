import type { Features } from '../../../@types/schema'
import jsonData from './features.json' assert { type: 'json' }

interface ResolverArgs {
	env: string
}

export function featuresResolver(_: any, args: ResolverArgs): Features {
	return {
		...(jsonData.global ?? {}),
		...((jsonData as any)[args.env] ?? {}),
	} as Features
}
