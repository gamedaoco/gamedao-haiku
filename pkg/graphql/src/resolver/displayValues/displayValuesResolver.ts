import jsonData from './data.json'
import type { DisplayValues } from '../../types'

export function displayDataResolver(): DisplayValues {
	return {
		...(jsonData ?? {}),
	} as DisplayValues
}
