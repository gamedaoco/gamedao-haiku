import data from 'data/config.json'

export const config = (parent, args, context, info) => {
	const { env } = args
	const global = data.global
	const local = data[env] || null
	return {
		...global,
		...local,
	}
}
