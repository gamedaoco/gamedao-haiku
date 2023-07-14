import { Header } from './Header'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

export default {
	title: 'Containers/Header',
	component: Header,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
	user: {
		name: 'Jane Doe',
	},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
