// TODO: Move to core package
import type { Features } from '../../types'
import jsonData from './features.json'

interface ResolverArgs {
	env: string
}

export function featuresResolver(_: any, args: ResolverArgs): Features {
	return {
		...(jsonData.global ?? {}),
		...((jsonData as any)[args.env] ?? {}),
	} as Features
}
