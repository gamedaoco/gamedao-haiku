// curl -X POST localhost:3000/api/feedback -H "Content-Type:application/json;charset=utf-8" -d '{"msg":"hello"}'
// send a message: discord.send({ content: msg })
export const config = { runtime: 'edge' }

import type { NextApiRequest, NextApiResponse } from 'next'
import Discord from 'discord.js'

import { Logger } from 'src/lib/logger'
const log = Logger('callback')

const discord = new Discord.WebhookClient({ id: process.env.DISCORD_HOOK_ID, token: process.env.DISCORD_HOOK_TOKEN })

const Callback = async (req: NextApiRequest, res: NextApiResponse) => {
	discord.send({ content: JSON.stringify(req.query) })
	log.info('callback', req.query)
	res.status(200).json(req.query)

	// const { method, msg } = req.body
	// if (method === 'POST' && msg !== null) {
	// 	log.info(`message sent`)
	// 	res.status(200).send('ok')
	// } else {
	// 	log.error('unauthorized')
	// 	res.status(400).send('unauthorized')
	// }
}

export default Callback
