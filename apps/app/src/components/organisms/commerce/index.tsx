import { useState, useEffect } from 'react'
import { useAppContext } from 'src/providers/app/components/context'
import { Stripe, loadStripe, StripeElementsOptions, Appearance } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { CheckoutForm } from './CheckoutForm'
import { Loader } from '../../atoms/Loader'

let stripePromise: Promise<Stripe | null>

export const getStripe = () => {
	if (!stripePromise) {
		stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
	}
	return stripePromise
}

type TArgs = { price?: number }
type TProps = { args?: TArgs }

export const Checkout = ({ args }: TProps) => {
	const [clientSecret, setClientSecret] = useState('')
	const stripe = getStripe()
	const { user, bpid } = useAppContext()

	useEffect(() => {
		if (!user.uuid || !bpid) return

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
						text: { value: bpid },
					},
				],
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setClientSecret(data.clientSecret)
			})
	}, [user])

	const appearance: Appearance = {
		theme: 'flat',
		variables: {
			colorPrimary: '#eeeeee',
			colorBackground: '#000000',
			colorText: '#eeeeee',
			colorDanger: '#ff0000',
			fontFamily: 'Inter, system-ui, sans-serif',
			// spacingUnit: '2px',
			borderRadius: '0',
		},
	}

	const options: StripeElementsOptions = {
		clientSecret,
		appearance,
	}

	return user.uuid && stripe && clientSecret ? (
		<Elements options={options} stripe={stripe}>
			<CheckoutForm args={args} />
		</Elements>
	) : (
		<Loader />
	)
}
