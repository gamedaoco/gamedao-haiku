// import Discord from 'discord.js'
import { getToken } from 'next-auth/jwt'
import { getServerSession } from 'next-auth/next'
import { getConnectedEndpoint } from 'src/constants/endpoints'
import { authOptions } from 'src/pages/api/auth/[...nextauth]'
import { Logger } from 'src/utils/logger'

const log = Logger('lib/token')

const battlepass_url = getConnectedEndpoint().url
// const discord = new Discord.WebhookClient({ id: process.env.DISCORD_HOOK_ID, token: process.env.DISCORD_HOOK_TOKEN })

const query = `mutation StoreUserToken($uuid: String!, $source: Source!, $token: String!) {
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

export async function setUserToken(uuid, source, token) {
	log.info('token received', uuid, source, token)

	fetch(battlepass_url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			query,
			variables: {
				uuid: uuid,
				source: source,
				token: token,
			},
		}),
	})
		.then((r) => r.json())
		.then((data) => {
			// discord.send({ content: `🎉 payment completed for bp ${bpid} by user ${uuid}` })
			log.info('🎉 token sent', data)
		})
}
