module.exports = {
	extends: 'next/core-web-vitals',
	plugins: ['unused-imports'],
	rules: {
		'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
		'unused-imports/no-unused-imports': 0,
		// "unused-imports/no-unused-vars": [
		//   "warn",
		//   { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
		// ]
		'import/no-anonymous-default-export': 0,
		'react-hooks/exhaustive-deps': 0,
		'@next/next/no-img-element': 0,
		'jsx-a11y/alt-text': 0,
	},
}
