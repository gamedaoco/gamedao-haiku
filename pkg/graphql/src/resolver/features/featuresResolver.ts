// TODO: Move to core package
import jsonData from './features.json'
import type { Features } from '../../types'

interface ResolverArgs {
	env: string
}

export function featuresResolver(_: any, args: ResolverArgs): Features {
	return {
		...(jsonData.global ?? {}),
		...((jsonData as any)[args.env] ?? {}),
	} as Features
}
