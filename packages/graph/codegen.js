module.exports = {
	overwrite: true,
	generates: {
		'src/queries/index.ts': {
			schema: [
				{
					'https://graph.gamedao.net/v1/graphql': {
						headers: {
							'x-hasura-role': 'public',
							'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
						},
					},
				},
			],
			documents: ['src/queries/**/*.graphql'],
			plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
			config: {
				preResolveTypes: true,
				noSchemaStitching: false,
				immutableTypes: true,
				useIndexSignature: true,
				withHooks: true,
			},
		},
	},
}
