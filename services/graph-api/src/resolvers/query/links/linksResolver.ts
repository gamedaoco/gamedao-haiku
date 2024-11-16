import type { Link } from '../../../@types/schema'
import jsonData from './links.json' assert { type: 'json' }

export function linksResolver(): Link[] {
	return jsonData as Link[]
}
