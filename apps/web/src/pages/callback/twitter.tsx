import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useSession } from 'next-auth/react'
import { useAppContext } from 'src/providers/app/modules/context'

import { Layout } from 'src/layouts/v2'
import { Paper, Box, Grid, Typography } from '@mui/material'
import { setUserToken } from 'src/lib/auth/storeUserToken'
import { decode } from 'src/lib/getTwitterAuthorizationURL'

// example
// http://localhost:3000/callback/twitter?
// state=11d62afdf08d1f386880c6525f4ea625ad3d4ec201527e4b9a1247d434838b65 <-- hashed uuid
// &code=SXRudGlaVUxCT0pIRWlnU1otZHFnYk8yWExwcmR2emhrUXNDcjhIa1VIUzJCOjE2NzkwNTc5MDE3NTA6MToxOmFjOjE <-- token

export function Page() {
	const { query, push } = useRouter()
	const { user, setTwitterAuthorized } = useAppContext()

	const state = decode(query?.state as string).split('::::')
	const callerURL = state[0]
	const callbackURL = state[1]

	console.log(query.state, state)
	console.log(query.code)

	useEffect(() => {
		if (!user.uuid || !query.code) return
		async function sendToken() {
			await setUserToken(user.uuid, 'twitter', query.code + '::::' + callbackURL)
			setTwitterAuthorized(true)
			if (callerURL !== 'noredirect') push(callerURL)
		}
		sendToken()
	}, [user.uuid, query.code, query.state])

	return (
		<Layout showHeader showSidebar showFooter title={'Twitter Authorization'}>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Twitter Authorized</Typography>
					</Grid>
					<Grid item></Grid>
				</Grid>
			</Box>

			{/* <Paper variant="glass">
				<Box p={2}>
					<Typography variant="h4">{JSON.stringify(query)}</Typography>
				</Box>
			</Paper> */}
		</Layout>
	)
}

export default Page