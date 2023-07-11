// curl -X POST localhost:3000/api/feedback -H "Content-Type:application/json;charset=utf-8" -d '{"msg":"hello"}'
// send a message: discord.send({ content: msg })
// export const config = { runtime: 'edge', }
import Discord from 'discord.js'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Logger } from 'src/utils/logger'

const log = Logger('feedback')

const discord = new Discord.WebhookClient({ id: process.env.DISCORD_HOOK_ID, token: process.env.DISCORD_HOOK_TOKEN })

const Feedback = async (req: NextApiRequest, res: NextApiResponse) => {
	const { uuid, bpid, msg } = req.body
	log.info('feedback', { req, uuid, bpid, msg })

	if (req.method === 'POST') {
		discord.send({
			content: `
			Feedback Message\n
			From ${uuid || 'anonymous'}:\n
			Battlepass: ${bpid || 'unknown'}\n
			${msg}.
		`,
		})
		log.info(`message sent`)
		res.status(200).send('ok')
	} else {
		log.error('unauthorized')
		res.status(400).send('unauthorized')
	}
}

export default Feedback
