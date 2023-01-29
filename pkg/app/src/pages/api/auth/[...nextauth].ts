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
			clientId: process.env.TWITTER_CLIENT_ID,
			clientSecret: process.env.TWITTER_CLIENT_SECRET,
		}),

		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: process.env.EMAIL_SERVER_PORT,
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD,
				},
			},
			from: process.env.EMAIL_FROM,
		}),

		DiscordProvider({
			clientId: process.env.DISCORD_KEY,
			clientSecret: process.env.DISCORD_SECRET,
			authorization: { params: { scope: scope } },
			profile(profile) {
				// console.log(profile)
				return {
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
		async jwt({ token, account, profile }) {
			if (account) {
				token.accessToken = account.access_token
			}
			if (profile) {
				token.discord = profile.id
				token.username = profile.username
				token.avatar = profile.avatar
			}
			console.log('token', token)
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
				address: token.address,
				uuid: null,
				// email: token?.email || null,
				// profile: token?.profile || null,
			}
			console.log('session', session)
			return session
		},
		// async signIn({ user, account, profile, email, credentials }) {
		// 	console.log('signIn', user, account, profile, email, credentials)
		// 	return true
		// },
	},
}
export default NextAuth(authOptions)
