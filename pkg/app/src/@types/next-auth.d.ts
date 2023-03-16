import NextAuth from 'next-auth'
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
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */

	interface Session {
		address?: string
		user: {
			uuid?: string
			discord?: string
			address?: string
			twitter?: string
			username?: string
			avatar?: string
		} & DefaultSession['user']
	}

	interface Profile {
		id?: string
		username?: string
		avatar?: string
		uuid?: string
	}
}
