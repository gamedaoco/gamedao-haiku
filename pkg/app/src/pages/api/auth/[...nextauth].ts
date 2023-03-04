import NextAuth, { NextAuthOptions } from 'next-auth'
import clientPromise from 'lib/mongodb'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'

import EmailProvider from 'next-auth/providers/email'
import DiscordProvider from 'next-auth/providers/discord'
import TwitterProvider from 'next-auth/providers/twitter'
import CredentialsProvider from 'next-auth/providers/credentials'

const scope = ['identify'].join(' ')

export const authOptions: NextAuthOptions = {
	adapter: MongoDBAdapter(clientPromise),

	providers: [
		// Web3 Signin
		// CredentialsProvider({
		// 	name: 'Credentials',
		// 	credentials: {
		// 		address: {
		// 			label: 'Address',
		// 			type: 'text',
		// 			placeholder: '0x0',
		// 		},
		// 	},
		// 	async authorize(credentials) {
		// 		if (Boolean(currentAddress())) {
		// 			return null
		// 		}
		// 		return {
		// 			id: currentAddress(),
		// 		}
		// 	},
		// }),

		TwitterProvider({
			clientId: process.env.TWITTER_CLIENT_ID_V2,
			clientSecret: process.env.TWITTER_CLIENT_SECRET_V2,
			version: '2.0',
			// profile(profile) {
			// 	return {
			// 		context: 'twitter',
			// 		...profile,
			// 	}
			// }
		}),

		// EmailProvider({
		// 	server: {
		// 		host: process.env.EMAIL_SERVER_HOST,
		// 		port: process.env.EMAIL_SERVER_PORT,
		// 		auth: {
		// 			user: process.env.EMAIL_SERVER_USER,
		// 			pass: process.env.EMAIL_SERVER_PASSWORD,
		// 		},
		// 	},
		// 	from: process.env.EMAIL_FROM,
		// }),

		DiscordProvider({
			clientId: process.env.DISCORD_KEY,
			clientSecret: process.env.DISCORD_SECRET,
			authorization: { params: { scope: scope } },
			profile(profile) {
				// console.log(profile)
				return {
					context: 'discord',
					...profile,
					// accent_color: profile.accent_color,
					// avatar: profile.avatar,
					// banner: profile.banner,
					// banner_color: profile.banner_color,
					// discriminator: profile.discriminator,
					// email: profile.email,
					// flags: profile.flags,
					// id: profile.id,
					// image_url: profile.image_url,
					// locale: profile.locale,
					// mfa_enabled: profile.mfa_enabled,
					// premium_type: profile.premium_type,
					// public_flags: profile.public_flags,
					// username: profile.username,
					// verified: profile.verified,
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
		async jwt({ token, user, account = {}, profile, isNewUser }) {
			// if ( account.provider && !token[account.provider] ) {
			// 	token[account.provider] = { access_token: null, refresh_token: null }
			// }

			// if ( account.access_token ) {
			// 	token[account.provider] = { ...token, [account.provider]:  { access_token: account.access_token } }
			// }

			// if ( account.refresh_token ) {
			// 	token[account.provider] = { ...token, [account.provider] : { refresh_token: account.refresh_token } }
			// }

			// if (account) {
			// 	token.accessToken = account.access_token
			// }

			// discord signin has priority
			if (account?.provider === 'discord' && profile) {
				console.log('discord', account.providerAccountId)
				token.discord = profile.id
				token.username = profile.username
				token.avatar = profile.avatar
			}
			// only take twitter id and username
			if (account?.provider === 'twitter') {
				console.log('twitter', account.providerAccountId)
				token.twitter = profile.id
				token.twitter_username = profile.username
			}

			// console.log('user', user)
			// console.log('account', account)
			// console.log('profile', profile)
			// console.log('token', token)
			return token
		},
		async session({ session, token }) {
			// Send properties to the client, like an access_token from a provider.
			// session.accessToken = token.accessToken
			session.address = token.sub
			session.user = {
				name: token.username,
				avatar: token.avatar,
				// id: token?.profile?.id || null,
				discord: token.discord,
				twitter_id: token.twitter_id,
				twitter_username: token.twitter_username,
				// address: token.address,
				uuid: null,
				email: token?.email || null,
				// profile: token?.profile || null,
			}
			// console.log('session', session)
			// console.log(token.twitter)
			return session
		},
		// async signIn({ user, account, profile, email, credentials }) {
		// 	console.log('signIn', user, account, profile, email, credentials)
		// 	return true
		// },
	},
}
export default NextAuth(authOptions)
