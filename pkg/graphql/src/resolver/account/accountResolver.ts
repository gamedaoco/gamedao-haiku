import { Account } from '../../types'
import data from './data.json'

interface ResolverArgs {
	address: string
}
export function accountResolver(_: any, args: ResolverArgs): Account {
	console.log(args.address)

	return {
		...((data as any) ?? {}),
	} as Account
}
