import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
	/**
	 * Returned by the `jwt` callback and `getToken`, when using JWT sessions
	 */
	interface JWT {
		uuid?: string
		email?: string
		address?: string
		twitter?: string
		twitter_username?: string
	}
}
declare module 'next-auth' {
	interface User {
		uuid?: string
		name?: string
		avatar?: string
		email?: string
		address?: string
		discord?: string
		twitter?: string
		twitter_username?: string
	}

	interface Session extends DefaultSession {
		address?: string
		user?: User & DefaultSession['user']
	}

	interface Profile {
		id?: string
		username?: string
		avatar?: string
		uuid?: string
	}
}
