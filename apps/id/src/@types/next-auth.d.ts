import { ExecFileSyncOptionsWithBufferEncoding } from 'child_process'
import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
	interface User {
		uuid?: string
		name?: string
		avatar?: string
		address?: string
		discord?: string
		email?: string
		epicGames?: string
		twitter?: string
		notifications?: boolean
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

declare module 'next-auth/jwt' {
	interface JWT {
		// primary key
		uuid?: string
		// signin keys
		address?: string
		discord?: string
		email?: string
		epicGames?: string
		twitter?: string
		// settings
		notifications?: boolean
	}
}
