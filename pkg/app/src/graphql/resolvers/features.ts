import { typeDefs } from '../schema'
import data from 'data/features.json'

export const features = (parent, args, context, info) => {
	const { env } = args
	const global = data.global
	const local = data[ env ] || null
	const content = {
		...global,
		...local,
	}
	return content
}