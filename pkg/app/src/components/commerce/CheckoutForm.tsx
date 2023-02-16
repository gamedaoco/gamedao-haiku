import React, { Fragment, useEffect, useRef, useImperativeHandle } from 'react'

// import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Box, Button, Stack, Typography, Input, TextField } from '@mui/material'
import { Loader } from 'components/Loader'

// import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js'

// const clientSecret = process.env.STRIPE_SECRET_KEY

// export const StripeInput = ({ component: Component, inputRef, ...props }) => {
// 	const elementRef = useRef(null)
// 	useImperativeHandle(inputRef, () => ({
// 		focus: () => elementRef.current.focus,
// 	}))
// 	return <Component onReady={(element) => (elementRef.current = element)} {...props} />
// }

export const CheckoutForm = () => {
	// const stripe = useStripe()
	// const elements = useElements()

	const [email, setEmail] = React.useState('')
	const [message, setMessage] = React.useState(null)
	const [isLoading, setIsLoading] = React.useState(false)

	// useEffect(() => {
	// 	if (!stripe) return
	// 	if (!clientSecret) return

	// 	stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
	// 		switch (paymentIntent.status) {
	// 			case 'succeeded':
	// 				setMessage('Payment succeeded!')
	// 				break
	// 			case 'processing':
	// 				setMessage('Your payment is processing.')
	// 				break
	// 			case 'requires_payment_method':
	// 				setMessage('Your payment was not successful, please try again.')
	// 				break
	// 			default:
	// 				setMessage('Something went wrong.')
	// 				break
	// 		}
	// 	})
	// }, [stripe, clientSecret])

	// const handleSubmit = async (e) => {
	// 	e.preventDefault()
	// 	console.log('buy')
	// 	if (!stripe || !elements) return
	// 	setIsLoading(true)

	// 	const { error } = await stripe.confirmPayment({
	// 		elements,
	// 		// redirect: 'if_required',
	// 		confirmParams: {
	// 			return_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/buy/complete`,
	// 			receipt_email: email,
	// 		},
	// 	})

	// 	if (error.type === 'card_error' || error.type === 'validation_error') {
	// 		setMessage(error.message)
	// 	} else {
	// 		setMessage('An unexpected error occurred.')
	// 	}

	// 	setIsLoading(false)
	// }

	const paymentElementOptions = {
		layout: 'tabs',
	}

	return (
		<Fragment>
			{isLoading && <Loader text="Purchasing Battlepass" />}

			<Typography variant="h4" pb={[2, 4]}>
				Collect points and convert them to real rewards with Battlepass. Join the beta now and get your
				Battlepass at an introductory price now:
			</Typography>

			{message && (
				<Typography variant="h5" pb={[2, 4]}>
					{message}
				</Typography>
			)}

			<form id="payment-form">
				<TextField
					id="email"
					label="Email"
					variant="outlined"
					required
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter email address"
					fullWidth
				/>
				{/*
			<Stack spacing={2}>

			<Stack spacing={2} direction="row">
			<TextField
			label="Credit Card Number"
			placeholder="Credit Card Number"
			name="ccnumber"
			variant="outlined"
			required
			sx={{ width: {xs: '100%', md: '50%'} }}
			InputLabelProps={{ shrink: true }}
			InputProps={{
				inputComponent: StripeInput,
				inputProps: {
					component: CardNumberElement
				},
			}}
			/>

			<TextField
			label="Expiry"
			placeholder="MM/YY"
			name="expiry"
			variant="outlined"
			required
			sx={{ width:{xs: '50%', md: '25%'} }}
			InputLabelProps={{ shrink: true }}
			InputProps={{
				inputComponent: StripeInput,
				inputProps: {
					component: CardExpiryElement
				},
			}}
			/>

			<TextField
			label="CVC"
			placeholder="CVC"
			name="cvc"
			variant="outlined"
			required
			sx={{ width: {xs: '50%', md: '25%'} }}
			InputLabelProps={{ shrink: true }}
			InputProps={{
				inputComponent: StripeInput,
				inputProps: {
					component: CardCvcElement
				},
			}}
			/>
			</Stack>
			</Stack>
		*/}

				<br />
				<br />
				{/* <PaymentElement
					id="payment-element"
					// options={paymentElementOptions}
				/>
				<Stack
					py={3}
					spacing={2}
					// direction={isMd?"row":"column"}
					alignItems="center"
					height="100%"
					width="100%"
					justifyContent="space-between"
				>
					<Box>By clicking PAY NOW you agree to the Battlepass terms and conditions.</Box>
					{stripe && elements && (
						<Button
							variant="lemon"
							disabled={isLoading || !stripe || !elements}
							id="submit"
							onClick={handleSubmit}
							fullWidth
							size="large"
						>
							Pay now
						// <span id="button-text">
						//		{isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}
						//	</span>
						</Button>
					)}
				</Stack> */}
			</form>
		</Fragment>
	)
}
