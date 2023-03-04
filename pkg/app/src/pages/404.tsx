import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Layout } from 'layouts/v2'

export function Page() {
	return (
		<Layout showHeader showFooter showSidebar>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">four oh four</Typography>
					</Grid>
					<Grid item></Grid>
				</Grid>
			</Box>
		</Layout>
	)
}

export default Page
