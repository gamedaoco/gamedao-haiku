import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from 'src/providers/app/components/context'
import { Layout } from 'src/layouts/v2'
import { Box, Grid, Typography } from '@mui/material'
import { setUserToken } from 'src/utils/auth/storeUserToken'

export function Page() {
	const { query, push } = useRouter()
	const { user } = useAppContext()
	const redirectURL = query?.redirect as string

	useEffect(() => {
		if (!user.uuid || !query.code) return
		async function sendToken() {
			await setUserToken(user.uuid, 'epicGames', query.code)
			if (redirectURL) push(redirectURL)
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
		</Layout>
	)
}

export default Page
