import { useSession, signIn, signOut } from 'next-auth/react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Layout } from 'layouts/v2'
import { LoginBtn } from 'components/LoginBtn'

export function Page() {
	return (
		<Layout showHeader showFooter showSidebar>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Welcome.</Typography>
					</Grid>
					<Grid item></Grid>
				</Grid>
				<Grid item>
					<LoginBtn />
					{/*					<Typography pb={2} variant="body1" sx={{ maxWidth: { sx: '100%', md: '75%', lg: '50%' } }}>
						Community driven ownership and creation will be a vital part of
						how we see video games in the near future. The transition to token driven
						economies is already in progress but is still in its early stages, only
						treating the symptoms of a broken, financial incentive driven sales machine.
					</Typography>
					<Typography pb={2} variant="body1" sx={{ maxWidth: { sx: '100%', md: '75%', lg: '50%' } }}>
						Tokenisation and community ownership need fair and transparent protocols to
						create safe environments for all participants working and creating together.
						Proper game theory needs to disincentivize bad actors and reward the good vibes
						of the community.
					</Typography>
					<Typography pb={2} variant="body1" sx={{ maxWidth: { sx: '100%', md: '75%', lg: '50%' } }}>
						From forging the initial idea over collaboration to fundraising and finally
						creating and operating game economies, we provide open protocols enabling
						coordination, ownership, fundraising and much more to sustainably improve
						economics of videogames, content creation and esports.
					</Typography>
*/}{' '}
				</Grid>
			</Box>
		</Layout>
	)
}

export default Page
