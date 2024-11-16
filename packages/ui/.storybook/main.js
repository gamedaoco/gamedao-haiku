module.exports = {
	staticDirs: ['../public'],
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
		'../src/(containers|components)/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'storybook-addon-next',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
}
