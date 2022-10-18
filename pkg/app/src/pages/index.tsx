import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Layout } from 'layouts/default/layout'

export function Page() {
	return (
		<Layout showHeader showFooter showSidebar>

			<Typography variant={'h3'}>Welcome.</Typography>

		</Layout>
	)
}

export default Page
