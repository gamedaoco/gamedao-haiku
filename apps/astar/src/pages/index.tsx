import React from 'react'
import { Layout } from 'layouts/default'
import { Dashboard } from 'dapps/stakeboard/Dashboard'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

export function Page() {
	return (
		<Layout showHeader showFooter>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h2">Stakeboard</Typography>
						<Dashboard />
					</Grid>
					<Grid item></Grid>
				</Grid>
			</Box>
			{/* <Dashboard /> */}
		</Layout>
	)
}

export default Page
