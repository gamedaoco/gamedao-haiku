import NextAuth from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

export const authOptions = {
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_KEY,
			clientSecret: process.env.DISCORD_SECRET,
			authorization: 'https://discord.com/api/oauth2/authorize?scope=identify+email',
			profile(profile) {
				console.log(profile)
				return {
					accent_color: profile.accent_color,
					avatar: profile.avatar,
					banner: profile.banner,
					banner_color: profile.banner_color,
					discriminator: profile.discriminator,
					email: profile.email,
					flags: profile.flags,
					id: profile.id,
					image_url: profile.image_url,
					locale: profile.locale,
					mfa_enabled: profile.mfa_enabled,
					premium_type: profile.premium_type,
					public_flags: profile.public_flags,
					username: profile.username,
					verified: profile.verified,
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, account, profile }) {
			// Persist the OAuth access_token to the token right after signin
			// console.log('account', account)
			if (account) {
				token.accessToken = account.access_token
				token.id = profile.id
				token.email = profile.email
				token.profile = profile
			}
			return token
		},
		async session({ session, token }) {
			// Send properties to the client, like an access_token from a provider.
			// session.accessToken = token.accessToken
			// console.log('token', token)
			session.user = {
				email: token.email,
				id: token.id,
				profile: token.profile,
			}
			return session
		},
	},
}
export default NextAuth(authOptions)
