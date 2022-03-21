// TODO: Move to core package
import jsonData from './links.json'
import type { Link } from '../../types'

export function linksResolver(): Link[] {
	return jsonData as Link[]
}
