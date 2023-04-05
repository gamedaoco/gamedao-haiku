// export const config = { runtime: 'edge', }

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = (items) => {
	const { id } = items
	if (!id) return 1000

	// TODO: get price for bpid and insert here
	// for beta version presale price is generally restricted to 10 EUR === 1000 eurocents

	switch (id) {
		// beta fixed price
		case 'battlepass-beta':
			return 1000
			break

		default:
			return 5
			break
	}
}

export default async function handler(req, res) {
	const {
		items,
		// uuid,
		// bpid,
		price,
		custom_fields,
	} = req.body

	const uuid = custom_fields.filter((f) => f.key === 'uuid')[0].text.value
	const bpid = custom_fields.filter((f) => f.key === 'bpid')[0].text.value

	console.log('-->', 'payment intent', items, uuid, bpid, price, custom_fields)

	// Create a PaymentIntent with the order amount and currency
	const paymentIntent = await stripe.paymentIntents.create({
		amount: calculateOrderAmount(items),
		currency: 'eur',
		payment_method_types: ['card'],
		// customer: uuid,
		statement_descriptor: 'BATTLEPASS',
		// automatic_payment_methods: {
		// enabled: true,
		// },
		metadata: {
			uuid: uuid,
			bpid: bpid,
		},
	})

	res.send({
		clientSecret: paymentIntent.client_secret,
	})
}
