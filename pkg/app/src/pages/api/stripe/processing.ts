import { getConnectedEndpoint } from 'src/constants/endpoints'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.NEXT_PUBLIC_STRIPE_HOOK

const calculateOrderAmount = (items) => {
	// Replace this constant with a calculation of the order's amount
	// Calculate the order total on the server to prevent
	// people from directly manipulating the amount on the client
	return 1000
}

// mutation Payment($securityToken: String!, $battlepass: String!, $identityUuid: String!, $paymentToken: String!) {
// 	processPayment(securityToken: $securityToken, battlepass: $battlepass, identityUuid: $identityUuid, paymentToken: $paymentToken) {
// 	  battlepass
// 	  identityUuid
// 	  paymentToken
// 	}
//   }

const query = `mutation Payment($securityToken: String!, $battlepass: String!, $identityUuid: String!, $paymentToken: String!) {
	processPayment(securityToken: $securityToken, battlepass: $battlepass, identityUuid: $identityUuid, paymentToken: $paymentToken) {
		battlepass
		identityUuid
		paymentToken
	}
}`

console.log('getConnectedEndpoint', getConnectedEndpoint())
const url = getConnectedEndpoint().url

const processPayment = async (
	securityToken, // api key
	battlepass, // clear
	identityUuid, // clear
	paymentToken, // the payment token
) => {
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			query,
			variables: { securityToken, battlepass, identityUuid, paymentToken },
		}),
	})
		.then((r) => r.json())
		.then((data) => console.log('data returned:', data))
}

export default async function handler(req, res) {
	const payload = req.body
	const sig = req.headers['stripe-signature']
	console.log('webhook', payload, sig)
	let event
	try {
		event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
	} catch (err) {
		return res.status(400).send(`Webhook Error: ${err.message}`)
	}

	res.send(200)
}
