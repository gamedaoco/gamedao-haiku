import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { Layout } from 'layouts/v2'
import { Paper, Box, Grid, Typography } from '@mui/material'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

export function Page() {
	const { t } = useTranslation()
	const { query } = useRouter()
	const path = query?.path

	const [clientSecret, setClientSecret] = useState('')

	return (
		<Layout showHeader showSidebar showFooter title={t('page:account:title')}>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Battlepass Season 1</Typography>
					</Grid>
					<Grid item></Grid>
				</Grid>
			</Box>

			{clientSecret && (
				<Paper variant="glass">
					<Box p={2}>
						<Typography variant="h4">Payment complete: Welcome to Battlepass!</Typography>
					</Box>
				</Paper>
			)}
		</Layout>
	)
}

export default Page
