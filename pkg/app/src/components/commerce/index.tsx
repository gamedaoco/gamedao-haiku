import { useState, useEffect } from 'react'
import { useAppContext } from 'providers/app/modules/context'
import { Stripe, loadStripe, StripeElementsOptions, Appearance } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { CheckoutForm } from './CheckoutForm'
import { Loader } from '../Loader'

let stripePromise: Promise<Stripe | null>

export const getStripe = () => {
	if (!stripePromise) {
		stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
	}
	return stripePromise
}

export const Checkout = () => {
	const [clientSecret, setClientSecret] = useState('')
	const stripe = getStripe()
	const { user } = useAppContext()

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch('/api/stripe/intent', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				items: [{ id: 'battlepass-beta' }],
				custom_fields: [
					{
						key: 'uuid',
						label: { type: 'custom', custom: 'uuid' },
						optional: false,
						type: 'text',
						text: { value: user.uuid },
					},
					{
						key: 'bpid',
						label: { type: 'custom', custom: 'bpid' },
						optional: false,
						type: 'text',
						text: { value: 'bpid' },
					},
				],
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setClientSecret(data.clientSecret)
			})
	}, [])

	const appearance: Appearance = {
		theme: 'none',
	}

	const options: StripeElementsOptions = {
		clientSecret,
		appearance,
	}

	return stripe && clientSecret ? (
		<Elements options={options} stripe={stripe}>
			<CheckoutForm />
		</Elements>
	) : (
		<Loader />
	)
}
