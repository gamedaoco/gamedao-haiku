import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { useTranslation } from 'react-i18next'

import { loadStripe, StripeElementsOptions, Appearance } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { Layout } from 'layouts/v2'
import { Paper, Box, Grid, Typography } from '@mui/material'

import { Checkout } from 'components/Checkout'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export function Page() {
	const [clientSecret, setClientSecret] = useState('')

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch('/api/stripe/intent', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ items: [{ id: 'battlepass-beta' }] }),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret))
	}, [])

	const appearance: Appearance = {
		theme: 'stripe',
	}
	const options: StripeElementsOptions = {
		clientSecret,
		appearance,
	}

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

			{clientSecret && (
				<Box p={[0, 4, 6]}>
					<Paper variant="glass">
						<Box p={[2, 4, 6]}>
							<Typography variant="h4" pb={[2, 4]}>
								Collect points and convert them to real rewards with Battlepass: Join the beta now at an
								introductory price.
							</Typography>
							<Elements options={options} stripe={stripePromise}>
								<Checkout />
							</Elements>
						</Box>
					</Paper>
				</Box>
			)}
		</Layout>
	)
}

export default Page
