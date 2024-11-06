export const config = {
	// runtime: 'edge',
	api: { bodyParser: false },
}

import Discord from 'discord.js'
import Stripe from 'stripe'
import { buffer } from 'micro'
import { getConnectedEndpoint } from 'src/constants/endpoints'

// curl -X POST localhost:3000/api/feedback -H "Content-Type:application/json;charset=utf-8" -d '{"msg":"hello"}'
// send a message: discord.send({ content: msg })

import { Logger } from 'src/utils/logger'
const log = Logger('payment')

const discord = new Discord.WebhookClient({ id: process.env.DISCORD_HOOK_ID, token: process.env.DISCORD_HOOK_TOKEN })

// mutation Payment($securityToken: String!, $battlepass: String!, $identityUuid: String!, $paymentToken: String!) {
// 	processPayment(securityToken: $securityToken, battlepass: $battlepass, identityUuid: $identityUuid, paymentToken: $paymentToken) {
// 	  battlepass
// 	  identityUuid
// 	  paymentToken
// 	}
//   }

const query = `mutation Payment($token: String!, $bpid: String!, $uuid: String!, $txid: String!) {
	BattlepassBot {
		processPayment(
			securityToken: $token,
			battlepass: $bpid,
			identityUuid: $uuid,
			paymentToken: $txid
		) {
			battlepass
			identityUuid
			paymentToken
		}
	}
}`

const battlepass_discord_hook = process.env.DISCORD_BATTLEPASS_LOG_WEBHOOK
const battlepass_payment_key = process.env.BATTLEPASS_PAYMENT_KEY
const battlepass_url = getConnectedEndpoint().url

const handlePaymentIntentSucceeded = async (paymentIntent) => {
	log.info('-->', 'sending receipt', paymentIntent)
	log.info('battlepass_url', battlepass_url)

	log.info('battlepass_url', battlepass_url)

	const { id: txid, receipt_email, metadata } = paymentIntent
	const { uuid, bpid } = paymentIntent.metadata

	log.info('-->', '\nk', battlepass_payment_key, '\nb', bpid, '\nu', uuid, '\nx', txid, '\ne', receipt_email)

	fetch(battlepass_url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			query,
			variables: {
				token: battlepass_payment_key,
				bpid: bpid,
				uuid: uuid,
				txid: txid,
			},
		}),
	})
		.then((r) => r.json())
		.then((data) => {
			discord.send({ content: `🎉 payment completed for bp ${bpid} by user ${uuid}` })
			log.info('🎉 payment completed:', data)
		})
}

const stripe_secret_key = process.env.STRIPE_SECRET_KEY
const stripe_webhooks_secret = process.env.STRIPE_WEBHOOKS_SECRET
const stripe = new Stripe(stripe_secret_key, { apiVersion: '2022-11-15' })

const handler = async (req, res) => {
	// if (req.method === 'POST') {
	// 	log.info('============================================================')
	let event

	// verify signature
	try {
		const buf = await buffer(req)
		const sig = req.headers['stripe-signature']
		// log.info(buf.toString())
		event = stripe.webhooks.constructEvent(buf.toString(), sig, stripe_webhooks_secret)
	} catch (err) {
		return res.status(400).send(`⚠️  Webhook signature verification failed: ${err.message}`)
	}

	log.info('✅ Success:', event.id)

	// handle event

	switch (event.type) {
		case 'payment_intent.succeeded':
			const paymentIntent = event.data.object
			discord.send(`💰 Payment received!`)
			log.info(`💰 Payment received!`)
			handlePaymentIntentSucceeded(paymentIntent)
			break

		// case 'payment_method.attached':
		// const paymentMethod = event.data.object
		// Then define and call a method to handle the successful attachment of a PaymentMethod.
		// handlePaymentMethodAttached(paymentMethod);
		// break
		default:
			discord.send({ content: `🤷‍♀️ Unhandled event type: ${event.type}` })
			log.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
	}
	res.status(200).json({ received: true })
	// } else {
	// 	res.setHeader('Allow', 'POST')
	// 	res.status(405).end('Method Not Allowed')
	// }
}

export default handler
