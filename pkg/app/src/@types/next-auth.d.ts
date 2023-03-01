import NextAuth from 'next-auth'
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
	}
}
