import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	schema: 'https://graph.dev.sub.zero.io/v1/graphql',
	documents: ['src/queries/**/*.graphql'],
	overwrite: true,
	generates: {
		'src/queries/index.ts': {
			config: {
				useIndexSignature: true,
				immutableTypes: true,
				preResolveTypes: true,
				noSchemaStitching: false,
			},
			// preset: 'client',
			plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
		},
	},
}

export default config
