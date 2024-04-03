import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useSession } from 'next-auth/react'
import { useAppContext } from 'src/providers/app/components/context'

import { Layout } from 'src/layouts/v2'
import { Paper, Box, Grid, Typography } from '@mui/material'
import { setUserToken } from 'src/utils/auth/storeUserToken'
import { decode } from 'src/utils/getTwitterAuthorizationURL'

export function Page() {
	const { query, push } = useRouter()
	const { user, setTwitterAuthorized } = useAppContext()
	const state = decode(decodeURI(query?.state as string)).split('::::')
	const callerURL = state[0]
	const callbackURL = state[1]

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
		<Layout showHeader showSidebar showFooter title={'Authorization'}>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Authorized</Typography>
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
