// export const config = { runtime: 'edge', }

import NextAuth, { NextAuthOptions } from 'next-auth'
import clientPromise from 'src/utils/mongodb'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'

import EmailProvider from 'next-auth/providers/email'
import DiscordProvider from 'next-auth/providers/discord'
import TwitterProvider from 'next-auth/providers/twitter'
import CredentialsProvider from 'next-auth/providers/credentials'

import { getUuid } from 'src/utils/auth/getUuid'
import { setUserToken } from 'src/utils/auth/storeUserToken'

// const options = { databaseName: process.env.MONGO_DATABASE }
// console.log('db', process.env.MONGO_DATABASE)

import { Logger } from 'src/utils/logger'
const log = Logger('auth')

const scope = ['identify'].join(' ')

// provider:
// 	url
//  params
//    [ key: value ]
async function refreshAccessToken(token, provider) {
	try {
		const url =
			provider.url +
			new URLSearchParams(
				provider.params.map((param) => {
					return { [param.key]: param.value }
				}),
			)
		// {
		// 	client_id: process.env.GOOGLE_CLIENT_ID,
		// 	client_secret: process.env.GOOGLE_CLIENT_SECRET,
		// 	grant_type: 'refresh_token',
		// 	refresh_token: token.refreshToken
		//   })

		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			method: 'POST',
		})
		const refreshedTokens = await response.json()

		if (!response.ok) {
			throw refreshedTokens
		}

		return {
			...token,
			accessToken: refreshedTokens.access_token,
			accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
			refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
		}
	} catch (error) {
		console.log(error)
		return {
			...token,
			error: 'RefreshAccessTokenError',
		}
	}
}

export const authOptions: NextAuthOptions = {
	adapter: MongoDBAdapter(clientPromise),

	providers: [
		// TwitterProvider({
		// 	clientId: process.env.TWITTER_CLIENT_ID_V2,
		// 	clientSecret: process.env.TWITTER_CLIENT_SECRET_V2,
		// 	version: '2.0',
		// 	// profile(profile) {
		// 	// 	return {
		// 	// 		context: 'twitter',
		// 	// 		...profile,
		// 	// 	}
		// 	// }
		// }),
		DiscordProvider({
			clientId: process.env.DISCORD_KEY,
			clientSecret: process.env.DISCORD_SECRET,
			authorization: { params: { scope: scope } },
			profile(profile) {
				return {
					context: 'discord',
					...profile,
				}
			},
		}),
	],

	session: {
		strategy: 'jwt',
	},
	jwt: {
		secret: process.env.JWT_SECRET,
	},

	callbacks: {
		async jwt({ token, user, account, profile, isNewUser }) {
			// log.info('AUTH', '-->', 'provider', account?.provider)
			if (account?.provider && !token[account?.provider]) {
				token.providers = {
					...token,
					providers: { [account.provider]: { access_token: null, refresh_token: null } },
				}
			}
			if (account?.access_token) {
				token.providers = {
					...token,
					providers: { [account.provider]: { access_token: account.access_token } },
				}
			}
			if (account?.refresh_token) {
				token.providers = {
					...token,
					providers: { [account.provider]: { refresh_token: account.refresh_token } },
				}
			}

			// const identity = getUuid({ provider: 'discord', id: profile.id })

			if (account?.provider === 'discord') {
				// log.info('AUTH', '-->', 'discord', profile.id)
				token.discord = profile?.id
				token.username = profile?.username
				token.avatar = profile?.avatar
				token.email = profile?.email
				token.uuid = await getUuid({ provider: 'discord', id: profile?.id })
				// token.address = identity.address
				// token.twitter = twitter
			}

			// if (account?.provider === 'twitter') {
			// 	log.info('AUTH', '-->', 'twitter', account.providerAccountId)
			// 	token.twitter = profile?.id
			// 	token.twitter_username = profile.username
			// 	// send token to bot api
			// 	// log.info('AUTH', '-->', 'sending', account.access_token, account.refresh_token)
			// 	// await setUserToken( account?.provider, account?.access_token, account?.refresh_token )
			// 	// log.info('AUTH', '-->', 'sent')
			// }

			// log.info('AUTH', '-->', 'token', token)
			// log.info('AUTH', '-->', 'token providers', token.providers)

			return token
		},

		async session({ session, token }) {
			session.address = token?.sub

			session.user = {
				id: token?.id as string,
				uuid: token.uuid as string,
				name: token?.username as string,
				avatar: token.avatar as string,
				email: token.email as string,
				address: token.address,
				discord: token.discord as string,
				twitter: token.twitter,
				epicGames: token.epicGames,
			}

			// log.info('AUTH', '-->', 'session', token, session)
			return session
		},
		// async signIn({ user, account, profile, email, credentials }) {
		// 	log.info('signIn', user, account, profile, email, credentials)
		// 	return true
		// },
	},
}
export default NextAuth(authOptions)
