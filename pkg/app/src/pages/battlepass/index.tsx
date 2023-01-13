import { Layout } from 'layouts/v2'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Overview } from 'dapps/battlepass/components/Overview'

export function Page() {
	return (
		<Layout showHeader showFooter>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Battlepass</Typography>
					</Grid>
					<Grid item></Grid>
				</Grid>
				<Grid item>
					<Typography pb={4} variant="body1" sx={{ maxWidth: { sx: '100%', md: '75%', lg: '50%' } }}>
						Engage with your favourite games, guilds and creators.
					</Typography>
				</Grid>
				<Grid item>
					<Overview />
				</Grid>
			</Box>
		</Layout>
	)
}

export default Page