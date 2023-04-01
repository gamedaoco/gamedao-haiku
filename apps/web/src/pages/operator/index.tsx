import { Layout } from 'src/layouts/v2'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Create } from 'src/dapps/battlepass'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'

export function Page() {
	const address = useCurrentAccountAddress()

	return (
		<Layout showHeader showFooter>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Operator Interface</Typography>
					</Grid>
					<Grid item></Grid>
				</Grid>
				<Grid item>
					<Typography pb={4} variant="body1" sx={{ maxWidth: { sx: '100%', md: '75%', lg: '50%' } }}>
						The Operator Interface allows you to interact with the GameDAO protocol.
					</Typography>
				</Grid>
				<Grid item>{address && <Create />}</Grid>
			</Box>
		</Layout>
	)
}

export default Page
