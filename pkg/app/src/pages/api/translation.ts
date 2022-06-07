import type { NextApiRequest, NextApiResponse } from 'next'

import enJson from '@gamedao-haiku/translations/src/app/en-US.json'

// Test config local:
// curl -X GET localhost:3000/api/translation -H "Content-Type:application/json;charset=utf-8" -d '{}'

const translation = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		try {
			res.setHeader('Content-Type', 'application/json')
			res.status(200).json({
				en: enJson,
			})
		} catch (error) {
			console.error('ERROR', error)
			res.status(500).send({ error: 'failed to fetch translation data' })
		}
	}
}

export default translation
