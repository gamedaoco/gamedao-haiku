// import graphqlPlugin from '@graphql-eslint/eslint-plugin'

module.exports = [
	{
		rules: {
			'@next/next/no-img-element': 'off',
			'space-in-brackets': ['error', 'always'],
			// 'array-element-newline': [
			// 	'error',
			// 	{
			// 		ArrayExpression: 'consistent',
			// 		ArrayPattern: { minItems: 3, multiline: true },
			// 	},
			// ],
		},
	},
	// yarn add -W -D @graphql-eslint/eslint-plugin
	//
	// {
	// 	files: ['**/*.graphql'],
	// 	languageOptions: {
	// 		parser: graphqlPlugin.parser,
	// 	},
	// 	plugins: {
	// 		'@graphql-eslint': graphqlPlugin,
	// 	},
	// 	rules: {
	// 		'@graphql-eslint/known-type-names': 'error',
	// 		// ... other GraphQL-ESLint rules
	// 	},
	// },
]
