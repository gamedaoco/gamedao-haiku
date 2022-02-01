import type { NextApiRequest, NextApiResponse } from 'next'
import data from 'src/data/features.json'

// test features local:
// curl -X POST localhost:3000/api/features -H "Content-Type:application/json;charset=utf-8" -d '{"key":"hello","env":"local"}'

const features = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST' && req.body.key == 'hello') {
		const { env } = req.body
		const global = data['global']
		const local = data[env]
		const content = {
			...global,
			...local,
		}

		try {
			res.setHeader('Content-Type', 'application/json')
			res.status(200).json(content)
		} catch (error) {
			console.error('ERROR', error)
			res.status(500).send({ error: 'failed to fetch data' })
		}
	} else {
		res.status(400).send('not authorised.')
	}
}

export default features
