import Discord from 'discord.js'
import { authOptions } from 'src/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import { getToken } from 'next-auth/jwt'
import { getConnectedEndpoint } from 'src/constants/endpoints'

import { useConnectIdentityMutation } from 'src/queries'

import { Logger } from 'src/utils/logger'
const log = Logger('lib/uuid')

const battlepass_url = getConnectedEndpoint().url
const discord = new Discord.WebhookClient({ id: process.env.DISCORD_HOOK_ID, token: process.env.DISCORD_HOOK_TOKEN })

const query = `mutation ConnectIdentity ( $uuid: String, $address: String, $discord: String, $twitter: String, $name: String, $email: String) {
	BattlepassBot {
		identity( uuid: $uuid, address: $address, discord: $discord, twitter: $twitter, name: $name, email: $email ) {
			uuid
			address
			discord
			twitter
			name
			email
		}
	}
}`

type TArgs = {
	uuid?: string
	address?: string
	discord?: string
	twitter?: string
	name?: string
	email?: string
	provider?: String
	id?: string
}

export function getUuid(args: TArgs) {
	log.info('🧬 connect identity', args, battlepass_url)

	try {
		const res = fetch(battlepass_url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				query,
				variables: {
					// uuid: args?.uuid,
					discord: args?.provider === 'discord' ? args?.id : null,
					twitter: args?.provider === 'twitter' ? args?.id : null,
					// name: args?.name,
					// email: args?.email,
				},
			}),
		})
			.then((r) => r.json())
			.then((res) => {
				const data = res?.data?.BattlepassBot?.identity?.uuid
				// discord.send({ content: `🧬 uuid retrieved ${JSON.stringify(data)}` })
				log.info('🧬 id retrieved', JSON.stringify(data))
				return data
			})
		return res
	} catch (err) {
		log.error(err)
	}
}
