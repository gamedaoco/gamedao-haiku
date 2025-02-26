module.exports = {
	trailingComma: 'all',
	singleQuote: true,
	bracketSpacing: true,
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	parser: 'typescript',
	semi: false,
	overrides: [
		{
			files: ['**/*.yml', '**/*.yaml'],
			options: {
				parser: 'yaml',
				useTabs: true,
				tabWidth: 4,
				singleQuote: false,
				trailingComma: 'none',
			},
		},
		{
			files: '**/*.json',
			options: {
				parser: 'json',
				useTabs: false,
				tabWidth: 2,
				singleQuote: false,
				trailingComma: 'none',
			},
		},
		{
			files: ['*.md', '*.mdx'],
			options: {
				printWidth: 80,
				proseWrap: 'preserve',
			},
		},
		{
			files: '*.svg',
			options: {
				parser: 'html',
			},
		},
	],
}
