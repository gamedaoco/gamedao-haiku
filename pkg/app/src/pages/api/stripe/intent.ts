const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = (items) => {
	// Replace this constant with a calculation of the order's amount
	// Calculate the order total on the server to prevent
	// people from directly manipulating the amount on the client
	return 1500
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
