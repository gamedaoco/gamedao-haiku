import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Layout } from 'src/layouts/v2'
import { Paper, Box, Grid, Typography } from '@mui/material'

import { Checkout } from 'components/organisms/commerce'

export function Page() {
	// const { query } = useRouter()
	// query.bpid
	return (
		<Layout showHeader showSidebar showFooter title={`Buy`}>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Battlepass Presale</Typography>
					</Grid>
					<Grid item></Grid>
				</Grid>
			</Box>

			<Box p={[0, 4, 6]}>
				<Paper variant="glass">
					<Box p={[2, 4, 6]}>
						<Checkout />
					</Box>
				</Paper>
			</Box>
		</Layout>
	)
}

export default Page
