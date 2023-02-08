import React from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button, Stack, Typography, Input } from '@mui/material'

const clientSecret = process.env.STRIPE_SECRET_KEY

export const CheckoutForm = () => {
	const stripe = useStripe()
	const elements = useElements()

	const [email, setEmail] = React.useState('')
	const [message, setMessage] = React.useState(null)
	const [isLoading, setIsLoading] = React.useState(false)

	React.useEffect(() => {
		if (!stripe) return
		if (!clientSecret) return

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
				case 'succeeded':
					setMessage('Payment succeeded!')
					break
				case 'processing':
					setMessage('Your payment is processing.')
					break
				case 'requires_payment_method':
					setMessage('Your payment was not successful, please try again.')
					break
				default:
					setMessage('Something went wrong.')
					break
			}
		})
	}, [stripe])

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log('buy')
		if (!stripe || !elements) return
		setIsLoading(true)

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/buy/complete`,
				receipt_email: email,
			},
		})

		// This point will only be reached if there is an immediate error when
		// confirming the payment. Otherwise, your customer will be redirected to
		// your `return_url`. For some payment methods like iDEAL, your customer will
		// be redirected to an intermediate site first to authorize the payment, then
		// redirected to the `return_url`.
		if (error.type === 'card_error' || error.type === 'validation_error') {
			setMessage(error.message)
		} else {
			setMessage('An unexpected error occurred.')
		}

		setIsLoading(false)
	}

	const paymentElementOptions = {
		layout: 'tabs',
	}

	return (
		<form id="payment-form" onSubmit={handleSubmit}>
			<Input
				id="email"
				type="text"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Enter email address"
			/>
			<br />
			<br />
			<PaymentElement
				id="payment-element"
				// options={paymentElementOptions}
			/>
			<Stack py={3} direction="row" alignItems="center" height="100%" width="100%" justifyContent="space-between">
				<>By clicking PAY NOW you agree to the Battlepass terms and conditions.</>
				<Button variant="lemon" disabled={isLoading || !stripe || !elements} id="submit">
					<span id="button-text">{isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}</span>
				</Button>
			</Stack>
			{/* Show any error or success messages */}
			{message && <div id="payment-message">{message}</div>}
		</form>
	)
}
