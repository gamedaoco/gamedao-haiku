// TODO: Move to core package
import type { Link } from '../../types'
import jsonData from './links.json'

export function linksResolver(): Link[] {
	return jsonData as Link[]
}
