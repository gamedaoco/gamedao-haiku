module.exports = {
	overwrite: true,
	generates: {
		'src/queries/index.ts': {
			schema: [
				{
					'https://graph.dev.sub.zero.io/v1/graphql': {
						// headers: {
						// "x-hasura-role": "xxxxxxxx",
						// "x-hasura-admin-secret": "xxxxxxxx"
						// },
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

				// skipTypename: false,
				// withHooks: true,
				// withHOC: false,
				// withComponent: false,
				// enumsAsTypes: true,
				// constEnums: true,
				// reactApolloVersion: 3,
			},
		},
	},
}
