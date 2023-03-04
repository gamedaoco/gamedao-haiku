import React from 'react'
import { Providers } from 'src/providers'
import { Layout } from 'layouts/default/layout'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export default {
	title: 'Layouts/Home',
	// component: Page,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
}

export const Home = () => (
	<Providers>
		<Layout showHeader showFooter showSidebar>
			<Box sx={{ pt: ['5rem', '5rem', '2rem'], pb: '1rem', minHeight: '90vh' }}></Box>
		</Layout>
	</Providers>
)
