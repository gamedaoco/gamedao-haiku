import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '@mui/material'

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	variant: 'contained',
	type: 'button',
	children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
	variant: 'outlined',
	type: 'button',
	children: 'Button',
}

export const Error = Template.bind({})
Error.args = {
	variant: 'contained',
	color: 'error',
	type: 'button',
	children: 'Button',
}

export const Navigation = Template.bind({})
Navigation.args = {
	variant: 'secondary',
	type: 'button',
	color: 'secondary',
	children: 'Button',
}
