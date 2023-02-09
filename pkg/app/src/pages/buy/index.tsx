import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { useTranslation } from 'react-i18next'

import { Stripe, loadStripe, StripeElementsOptions, Appearance } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { Layout } from 'layouts/v2'
import { Paper, Box, Grid, Typography } from '@mui/material'

import { Checkout } from 'components/commerce'

export function Page() {
	return (
		<Layout showHeader showSidebar showFooter title={`Buy`}>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Battlepass Season 1</Typography>
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
