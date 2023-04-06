import NextAuth, { DefaultSession } from 'next-auth'
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
		discord?: string
		address?: string
		twitter?: string
		username?: string
		avatar?: string
		notifications?: boolean
	}
	interface Session extends DefaultSession {
		user?: User
	}

	interface Profile {
		id?: string
		username?: string
		avatar?: string
		uuid?: string
	}
}
