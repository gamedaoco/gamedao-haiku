import React, { Fragment, useState, useEffect, useRef, useImperativeHandle } from 'react'
import { useAppContext } from 'providers/app/modules/context'

import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Box, Button, Stack, Typography, Input, TextField, useMediaQuery } from '@mui/material'
import { Loader } from 'components/Loader'

import { BaseDialog } from 'components/BaseDialog/baseDialog'
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js'
import { useTheme } from '@mui/material/styles'

const clientSecret = process.env.STRIPE_SECRET_KEY

export const StripeInput = ({ component: Component, inputRef, ...props }) => {
	const elementRef = useRef(null)
	useImperativeHandle(inputRef, () => ({
		focus: () => elementRef.current.focus,
	}))
	return <Component onReady={(element) => (elementRef.current = element)} {...props} />
}

const protocol = process.env.NEXT_PUBLIC_ENVIRONMENT === 'Development' ? '' : 'https://'

type TArgs = {
	price: number
	total?: number
	remaining?: number
}
type TProps = { args: TArgs }

export const CheckoutForm = ({ args }: TProps) => {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const stripe = useStripe()
	const elements = useElements()

	const { user, bpid } = useAppContext()
	const { price } = args

	const [email, setEmail] = useState(user.email || '')
	const [message, setMessage] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [finalPrice, setFinalPrice] = useState<float>(0)

	useEffect(() => {
		if (!args.price) return
		setFinalPrice(`EUR ${(args.price / 100).toFixed(2)}`)
	}, [args])

	useEffect(() => {
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
	}, [stripe, clientSecret])

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!stripe || !elements || !email) return
		setIsLoading(true)

		const { error } = await stripe.confirmPayment({
			elements,
			// redirect: 'if_required',
			confirmParams: {
				return_url: `${protocol}${process.env.NEXT_PUBLIC_VERCEL_URL}/battlepass/${bpid}/dashboard`,
				receipt_email: email,
				payment_method_data: {
					billing_details: {
						name: `${user.name}#${user.uuid}`,
						email: user.email,
					},
				},
			},
		})

		// console.log(error)
		if (error?.type === 'card_error' || error?.type === 'validation_error') {
			setMessage(error.message)
		} else {
			setMessage('An unexpected error occurred.')
		}

		setIsLoading(false)
	}

	const paymentElementOptions = {
		layout: 'tabs',
	}

	return user.uuid && bpid ? (
		<Fragment>
			{isLoading && <Loader text="Purchasing Battlepass" />}

			<Typography variant="h4" pb={[2, 4]}>
				Collect points and convert them to real rewards with Battlepass. Join the beta now, be one of the first
				to get your limited Battlepass at an introductory price, before public launch!
			</Typography>

			<Box alignItems="middle" justifyContent="middle">
				<Stack direction={isMd ? 'row' : 'column'} spacing={[2, 4]}>
					<Stack direction={'column'} pl={[0, 4]}>
						<Typography variant="h1">{finalPrice}</Typography>
						<Typography variant="caption">
							incl. VAT where applicable,
							<br />
							terms + conditions apply.
						</Typography>
					</Stack>
					<Stack direction={'column'} pl={[0, 4]}>
						<Typography variant="h4">You will receive:</Typography>
						<Typography variant="h6">
							<ul>
								<li>Battlepass Beta Access</li>
								<li>Battlepass Season One Access</li>
								<li>Full access to reward items</li>
								<li>VIP access to selected esports teams</li>
							</ul>
						</Typography>
					</Stack>
				</Stack>
			</Box>

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

				<Box sx={{ '.StripeElement': { border: 'white' } }}>
					<PaymentElement
						id="payment-element"
						// options={paymentElementOptions}
					/>
				</Box>
				<Stack
					py={3}
					spacing={2}
					// direction={isMd?"row":"column"}
					alignItems="center"
					height="100%"
					width="100%"
					justifyContent="space-between"
				>
					<Box>By clicking BUY NOW you agree to the Battlepass terms and conditions.</Box>
					{stripe && elements && (
						<Button
							variant="lemon"
							disabled={isLoading || !stripe || !elements}
							id="submit"
							onClick={handleSubmit}
							fullWidth
							size="large"
						>
							<span id="button-text">
								{isLoading ? <div className="spinner" id="spinner"></div> : 'Buy Now'}
							</span>
						</Button>
					)}
				</Stack>
			</form>
		</Fragment>
	) : null
}
