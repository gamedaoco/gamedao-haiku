import { Fragment } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button, Typography } from '@mui/material'

export const LoginBtn = () => {
	const { data: session } = useSession()

	return session ? (
		<Fragment>
			<Typography>Signed in as {session.user.email}</Typography>
			<Button onClick={() => signOut()}>Sign out</Button>
		</Fragment>
	) : (
		<Fragment>
			<Typography>Not signed in</Typography>
			<Button onClick={() => signIn()}>Sign in</Button>
		</Fragment>
	)
}
