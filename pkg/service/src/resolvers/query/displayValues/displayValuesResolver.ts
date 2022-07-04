import type { DisplayValues } from '../../../@types/schema'
import jsonData from './data.json'

export function displayDataResolver(): DisplayValues {
	return {
		...(jsonData ?? {}),
	} as DisplayValues
}
