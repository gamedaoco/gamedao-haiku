// curl -X POST localhost:3000/api/feedback -H "Content-Type:application/json;charset=utf-8" -d '{"msg":"hello"}'

import type { NextApiRequest, NextApiResponse } from 'next'
import Discord from 'discord.js'
import { Logger } from 'lib/logger'

const log = Logger('API')

const ID = process.env.DISCOID
const TOKEN = process.env.DISCOTOKEN
const discord = new Discord.WebhookClient({ id: ID, token: TOKEN })

const Feedback = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method, msg } = req.body

	if (method === 'POST' && msg !== null) {
		discord.send({ content: msg })
		log.info(`message sent`)
		res.status(200).send('ok')
	} else {
		log.error('unauthorized')
		res.status(400).send('unauthorized')
	}
}

export default Feedback
