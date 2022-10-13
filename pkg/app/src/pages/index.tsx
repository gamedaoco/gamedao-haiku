import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Layout } from 'components/Layouts/default/layout'

export function Page() {
	return (
		<Layout showHeader showFooter showSidebar>
			<Box component="main" sx={{ flexGrow: 1 }}>
				<Container maxWidth="xl">
					<Typography sx={{ fontWeight: '800' }} variant={'h3'}>
						Welcome.
					</Typography>
				</Container>
			</Box>
		</Layout>
	)
}

export default Page
