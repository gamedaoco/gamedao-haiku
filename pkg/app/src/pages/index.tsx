import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Layout } from 'layouts/default/layout'

export function Page() {
	return (
		<Layout showHeader showFooter showSidebar>
			<Box component="main" sx={{ flexGrow: 1 }}>
				<Container maxWidth="xl">
					<Typography variant={'h3'}>Welcome.</Typography>
				</Container>
			</Box>
		</Layout>
	)
}

export default Page
