import { NextApiRequest, NextApiResponse } from 'next'
// TODO: should use @zeroio/type-definitions
// TODO: should use @gamedao/types
import data from 'src/data/types.json'

// test config local:
// curl -X POST localhost:3000/api/config -H "Content-Type:application/json;charset=utf-8" -d '{"key":"hello","env":"local"}'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST' && req.body.key == 'hello') {
		const { env } = req.body
		const content = {
			...data,
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
