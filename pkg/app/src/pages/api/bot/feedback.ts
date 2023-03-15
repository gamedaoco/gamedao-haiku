// curl -X POST localhost:3000/api/feedback -H "Content-Type:application/json;charset=utf-8" -d '{"msg":"hello"}'
// send a message: discord.send({ content: msg })

import type { NextApiRequest, NextApiResponse } from 'next'
import Discord from 'discord.js'

import { Logger } from 'lib/logger'
const log = Logger('feedback')

const discord = new Discord.WebhookClient({ id: process.env.DISCORD_HOOK_ID, token: process.env.DISCORD_HOOK_TOKEN })

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
