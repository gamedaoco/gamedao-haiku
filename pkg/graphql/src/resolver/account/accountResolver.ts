import { Account } from '../../types'
import data from './data.json'

export function accountResolver(): Account {
	return {
		...(data ?? {}),
	} as Account
}
