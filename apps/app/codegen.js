
module.exports = {
	overwrite: true,
	generates: {
		'src/queries/index.ts': {
			schema: [
				{
					'https://graph.dev.gamedao.net/v1/graphql': {
						headers: {
						// "x-hasura-role": "public",
						// "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
						"x-hasura-admin-secret": "password12345"
						},
					},
				},
			],
			documents: ['src/queries/**/*.graphql'],
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo'
			],
			config: {
				// enumsAsTypes: true,
				// futureProofEnums: true,
				// constEnums: true,

				//
				preResolveTypes: true,
				noSchemaStitching: false,
				immutableTypes: true,
				useIndexSignature: true,
			},
		},
		// '../../packages/sdk/src/queries/index.ts': {
		// 	schema: [
		// 		{
		// 			'https://graph.dev.gamedao.net/v1/graphql': {
		// 				headers: {
		// 				"x-hasura-admin-secret": "password12345"
		// 				},
		// 			},
		// 		},
		// 	],
		// 	documents: ['../../packages/sdk/src/queries/**/*.graphql'],
		// 	plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
		// 	config: {
		// 		preResolveTypes: true,
		// 		noSchemaStitching: false,
		// 		immutableTypes: true,
		// 		useIndexSignature: true,
		// 		// skipTypename: false,
		// 		// withHooks: true,
		// 		// withHOC: false,
		// 		// withComponent: false,
		// 		// enumsAsTypes: true,
		// 		// constEnums: true,
		// 		// reactApolloVersion: 3,
		// 	},
		// },
	},
}
