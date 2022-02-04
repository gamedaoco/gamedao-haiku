import { NextApiRequest, NextApiResponse } from 'next'
// TODO: should use @zeroio/type-definitions
// TODO: should use @gamedao/types
import data from 'src/data/networks.json'

// test config local:
// curl -X POST localhost:3000/api/networks -H "Content-Type:application/json;charset=utf-8" -d '{"key":"hello","prefix":"0"}'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST' && req.body.key == 'hello') {

		const { prefix } = req.body

		console.log('prefix', prefix)

		const slice = (prefix)
			? data.networks.filter( s => ( s.prefix == prefix ? true : false ))[0]
			: data.networks

		console.log(slice)

		const content = {
			...slice,
		}

		try {
			res.setHeader('Content-Type', 'application/json')
			res.status(200).json(JSON.stringify(content))
		} catch (error) {
			console.error('ERROR', error)
			res.status(500).send({ error: 'failed to fetch data' })
		}
	} else {
		res.status(400).send('not authorised.')
	}
}
