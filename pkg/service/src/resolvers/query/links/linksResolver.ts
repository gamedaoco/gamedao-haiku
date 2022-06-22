import type { Link } from '../../../@types/schema'
import jsonData from './links.json'

export function linksResolver(): Link[] {
	return jsonData as Link[]
}
