import type { NextApiRequest, NextApiResponse } from 'next'
import Discord, { ChannelType } from 'discord.js'
import { Logger } from 'src/utils/logger'

const log = Logger('API')

const client = new Discord.Client({ intents: [] })
client.on('ready', async () => {
	console.log(`Bot ${client.user.username} is ready`)
	client.guilds.cache.forEach((guild) => {
		let channels = guild.channels.cache.filter((channel) => channel.type === ChannelType.GuildText)
		guild.invites.create(channels.first().id).then((invite) => console.log(invite.code))
	})
})

// const discord = new Discord.WebhookClient({ id: DISCORD_KEY, token: DISCORD_SECRET })

const Invite = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method, guildId } = req.body
	if (method === 'POST' && guildId !== null) {
		// const channel = discord.channels.cache.find(channel => channel.id === guildId)
		// let invite = channel.createInvite({maxAge: 0, maxUses: 0});

		// discord.send({ content: msg })
		// log.info(`message sent`)

		res.status(200).send('ok')
	} else {
		log.error('unauthorized')
		res.status(400).send('unauthorized')
	}
}

export default Invite
