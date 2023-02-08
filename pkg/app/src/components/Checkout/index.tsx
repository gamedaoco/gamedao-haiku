import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { CheckoutForm } from './checkout'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export const Checkout = () => {
	const [clientSecret, setClientSecret] = useState('')

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch('/api/stripe/intent', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ items: [{ id: 'battlepass-beta' }] }),
		})
			.then((res) => res.json())
			.then((data) => {
				setClientSecret(data.clientSecret)
			})
	}, [])

	const appearance = {
		theme: 'stripe',
	}

	const options = {
		clientSecret,
		// appearance,
	}

	return (
		<Elements options={options} stripe={stripePromise}>
			<CheckoutForm />
		</Elements>
	)
}
