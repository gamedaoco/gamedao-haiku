import Stripe from 'stripe'
import { buffer } from 'micro'
import { getConnectedEndpoint } from 'src/constants/endpoints'

export const config = { api: { bodyParser: false } }

// async function buffer(readable) {
// 	const chunks = [];
// 	for await (const chunk of readable) {
// 		chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
// 	}
// 	return Buffer.concat(chunks);
// }

// mutation Payment($securityToken: String!, $battlepass: String!, $identityUuid: String!, $paymentToken: String!) {
// 	processPayment(securityToken: $securityToken, battlepass: $battlepass, identityUuid: $identityUuid, paymentToken: $paymentToken) {
// 	  battlepass
// 	  identityUuid
// 	  paymentToken
// 	}
//   }

const query = `mutation Payment($securityToken: String!, $battlepass: String!, $identityUuid: String!, $paymentToken: String!) {
	processPayment(
		securityToken: $securityToken,
		battlepass: $battlepass,
		identityUuid: $identityUuid,
		paymentToken: $paymentToken
) {
		battlepass
		identityUuid
		paymentToken
	}
}`

const battlepass_discord_hook = process.env.DISCORD_BATTLEPASS_LOG_WEBHOOK
const battlepass_payment_key = process.env.BATTLEPASS_PAYMENT_KEY
const battlepass_url = getConnectedEndpoint().url

const processPayment = async (
	securityToken, // api key
	battlepass, // clear
	identityUuid, // clear
	paymentToken, // the payment token
) => {
	fetch(battlepass_url, {
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

const stripe_secret_key = process.env.STRIPE_SECRET_KEY
const stripe_webhooks_secret = process.env.STRIPE_WEBHOOKS_SECRET
const stripe = new Stripe(stripe_secret_key, { apiVersion: '2022-11-15' })

const handler = async (req, res) => {
	if (req.method === 'POST') {
		console.log('============================================================')
		let event

		// verify signature
		try {
			console.log('verifying stripe signature')
			const buf = await buffer(req)
			const sig = req.headers['stripe-signature']

			event = stripe.webhooks.constructEvent(buf.toString(), sig, stripe_webhooks_secret)
			console.log(event)
		} catch (err) {
			return res.status(400).send(`⚠️  Webhook signature verification failed: ${err.message}`)
		}

		console.log('✅ Success:', event.id)

		// handle event

		switch (event.type) {
			case 'payment_intent.succeeded':
				const paymentIntent = event.data.object
				console.log(`💰 Payment received!`)
				// Then define and call a method to handle the successful payment intent.
				// handlePaymentIntentSucceeded(paymentIntent);
				break
			case 'payment_method.attached':
				const paymentMethod = event.data.object
				// Then define and call a method to handle the successful attachment of a PaymentMethod.
				// handlePaymentMethodAttached(paymentMethod);
				break
			default:
				console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
		}
		res.json({ received: true })
	} else {
		res.setHeader('Allow', 'POST')
		res.status(405).end('Method Not Allowed')
	}
}

export default handler
