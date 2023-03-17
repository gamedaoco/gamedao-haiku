import Discord from 'discord.js'
import { authOptions } from 'src/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import { getToken } from 'next-auth/jwt'
import { getConnectedEndpoint } from 'src/constants/endpoints'

import { Logger } from 'lib/logger'
const log = Logger('lib/token')

const battlepass_url = getConnectedEndpoint().url
const discord = new Discord.WebhookClient({ id: process.env.DISCORD_HOOK_ID, token: process.env.DISCORD_HOOK_TOKEN })

const query = `mutation StoreUserToken($uuid: String!, $source: String!, $token: String!) {
	BattlepassBot {
		provideUserToken(
			identityUuid: $uuid,
			source: $source,
			token: $token,
		) {
			uuid
		}
	}
}`

// Mutation provideUserToken
// Accepts 3 parameters:
// - identity uuid
// - source (twitter, discord etc, only twitter acceptable now)
// - token - access token string

export async function setUserToken(provider, token, refresh) {
	log.info('token received', provider, token, refresh)

	fetch(battlepass_url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			query,
			variables: {
				// token: battlepass_payment_key,
				// bpid: bpid,
				// uuid: uuid,
				// txid: txid,
			},
		}),
	})
		.then((r) => r.json())
		.then((data) => {
			// discord.send({ content: `🎉 payment completed for bp ${bpid} by user ${uuid}` })
			log.info('🎉 payment completed:', data)
		})
}
