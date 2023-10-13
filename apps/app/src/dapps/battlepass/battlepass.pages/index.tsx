import React from 'react'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Layout } from 'layouts/v2'
import { Landingpage } from 'src/dapps/landingpage/battlepass'

export function Page() {
	// const { data: session } = useSession()

	// console.log('session',session||null)

	return (
		<Layout showHeader showFooter noContainer hideDApps>
			<Landingpage />

			{
				// <Box sx={{ mb: 2 }}>
				// 	<Grid container justifyContent="space-between" spacing={3}>
				// 		<Grid item>
				// 			<Typography variant="h3">Welcome.</Typography>
				// 		</Grid>
				// 		<Grid item></Grid>
				// 	</Grid>
				// 	<Grid item>
				// 		{!session && (
				// 			<Box>
				// 				<Button
				// 					sx={{ mr: 2, mb: 2 }}
				// 					variant="outlined"
				// 					size="medium"
				// 					onClick={() => signIn('discord')}
				// 				>
				// 					Connect your Discord
				// 				</Button>
				// 				{/* <Button
				// 					sx={{ mr: 2, mb: 2 }}
				// 					variant="outlined"
				// 					size="medium"
				// 					onClick={() => signIn('twitter')}
				// 				>
				// 					Connect your Twitter
				// 				</Button>
				// 				<Button
				// 					sx={{ mr: 2, mb: 2 }}
				// 					variant="outlined"
				// 					size="medium"
				// 					onClick={() => signIn('email')}
				// 				>
				// 					Sign in with email
				// 				</Button> */}
				// 			</Box>
				// 		)}
				// 		{session && (
				// 			<Box>
				// 				Hello {session.user.name}
				// 				<br />
				// 				<Button variant="outlined" size="medium" onClick={() => signOut()}>
				// 					Sign out
				// 				</Button>
				// 			</Box>
				// 		)}
				// 	</Grid>
				// </Box>
			}
		</Layout>
	)
}

export default Page
